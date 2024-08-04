const { StatusCodes } = require("http-status-codes");
const getAccountNum = require("../utils/genAccountNum");
const User = require("../models/user");
const {BadRequest, Unauthenticated, NotFound} = require("../error");
const jwt = require("jsonwebtoken");
const SendMail = require("../utils/send-mail");
const bcrypt = require("bcryptjs");
const getCurrentUser = require("../utils/getCurrentUser");
const asyncWrapper = require("../middleWare/asyncWrapper");

const period = 15 * 60 * 60;



const signup =  async (req, res) => {
    const {firstname, lastname, middlename, address, password, tel, email} = req.body;

    const tempUser = ({firstname, lastname, middlename, address, password, tel, email, accountNum: getAccountNum()});
    const user = await User.create({...tempUser})

    res.status(StatusCodes.CREATED).json( {success: true, user} )

};

const login = async (req, res) => {
    const {email, password} = req.body;

    if(!email && !password) {
        throw new BadRequest(" incorrect email and password ");
    };

    const user = await User.findOne({email});
    if(!user) {
        throw new Unauthenticated( " Invalid email " );
    };

    const isPassword = await user.comparePassword(password);
    if (!isPassword) {
        throw new Unauthenticated( " Invalid password " );
    };

        await jwt.sign( {userId: user._id}, process.env.JWT_SECRET, {expiresIn: period}, async(err, token) => {
        if(!token) {
            throw new NotFound( " token expired " )
        }
        const text = ` Welcome ${user.firstname}, you have successfully login to your account  `
        await SendMail( user.email, text )

            res.cookie("userToken", token, {maxAge: 1000 * period, httpOnly: true} );
            res.status(StatusCodes.OK).json( {success: true, user, token} );

    } );

};

const logout = async (req, res) => {
    res.cookie("userToken", " ", {maxAge: 0} );
    res.status(StatusCodes.OK).redirect("/api/v1/login-user")
};

const disolayEmailForPasswordUpdate = async (req, res) => {
    res.status(StatusCodes.OK).render("displayemail")
};

const postEmailForPassword = async (req, res) => {
    const {
        body: {email}
    } = req

    const user = await User.findOne({email});
    if (!user) {
        throw new NotFound( ` ${user.email} does not found, please try again ` )
    }
    await jwt.sign( {userId: user._id}, process.env.JWT_SECRET, {expiresIn: period}, async(err, token) => {
        if (err) {
            throw new NotFound(" Token not present ")
        }

        // const text = ` http://localhost:8080/api/v1/update-password/${user._id}/${token} `
        const text = token
        console.log(text);

        await SendMail( user.email, " Update password ", text );
    } );

};

const displayUpdatePassword = async (req, res) => {
    const {userId, token} = req.params;

    res.status(StatusCodes.OK).render("updatePassword", {userId, token})
};

const updatePassword = async (req, res) => {
    const {
        params: {userId, token},
        body: {password}
    } = req;
    console.log(token, userId);

    await jwt.verify( token, process.env.JWT_SECRET, async(err, verified) => {
        if (err) {
            throw new NotFound(" Token not verified ")
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)
        const newPassword = await User.findOneAndUpdate( {_id:userId}, {password: hashPassword} );

        res.status(StatusCodes.TEMPORARY_REDIRECT).redirect("/api/v1/login-user");
        res.status(StatusCodes.OK).json( " password successfully changed " )
    } )

};

const createPin = async(req, res) => {
    const {pin} = req.body;
    console.log(pin);
    const userId = await getCurrentUser(req);
    
    const user = await User.findByIdAndUpdate(userId, {pin});
    res.status(StatusCodes.CREATED).json( { success: true, msg: "pin successfully changed" } )

};

const resetPin = async (req, res) => {
    const {oldPin, newPin} = req.body;
    const userId = await getCurrentUser(req);
    
    const us = await User.findById(userId);

    if ( Number(oldPin) === us.pin ) {
        const user = await User.findByIdAndUpdate(us, { pin: newPin });

        res.status(StatusCodes.OK).json( {success: true, msg: " pin succesfully changed "} )
    } else{
        throw new BadRequest(" Incorrect user pin ")
    }

}

const creditCustomer = async (req, res) => {
    const { accountNum, amount, pin}  = req.body;

    // const userId = await getCurrentUser(req);
    // const user = await User.findById(userId);

    const authHeaders = req.get( 'Authorization' )
    
        const token = authHeaders.split(" ")[1]

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const user = await User.findById(decoded.userId);

    if (user.suspended) {
        return res.status(StatusCodes.FORBIDDEN).json( ` ${user.firstname} have been suspended from making transaction, please contact customer care for further assistance ` )
    }

    if ( Number(pin) === Number(user.pin) ) {
        const customerToCredit = await User.findOne({accountNum});

        if ( customerToCredit ) {
            const receipientBalance = customerToCredit.accountBalance
            const senderBalance = user.accountBalance

            if ( senderBalance > amount ) {

                const newReceipientBalance =  Number(amount) + receipientBalance;
                const newSenderBalance = senderBalance - Number(amount);

                const updateReceipientBalance = await User.findOneAndUpdate({accountNum}, {accountBalance: newReceipientBalance});

                const updateSenderBalance = await User.findByIdAndUpdate(user, {accountBalance: newSenderBalance});

                const saveBeneficiary= user.beneficiary.push({id:customerToCredit._id, accountNumber: customerToCredit.accountNum, transferAmount: amount, accountName: ` ${ customerToCredit.firstname}, ${customerToCredit.middlename} ${customerToCredit.lastname} `})

                await user.save();

                res.status(StatusCodes.OK).json( { success: true, msg: " Transaction successfull " , saveBeneficiary } )

            } else{
                console.log( " Insufficient balance " );
            }

        } else{
            console.log( " customer does not found " );
        }

    } else {
        console.log(" Incorrect pin entered, please try again ");
    }

};

const getUserFromClientSide = async (req, res) => {
    const authHeaders = req.get( 'Authorization' );

    if(!authHeaders || !authHeaders.startsWith("Bearer ")){
        throw new Unauthenticated( " No token Provided " )
    }
    const token = authHeaders.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const loggedInUser = await User.findById( decoded.userId );
                // console.log(loggedInUser);
                res.status(StatusCodes.OK).json( { success: true, msg: "User successfully verified", loggedInUser } );

    } 
    catch (error) {
        throw new Unauthenticated(" Not authorized to access this route ")
    }

} ;

const  getuserDetailsByAccountNum = async (req, res) => {
    const {accountNum} = req.body

    const userDetails = await User.findOne({accountNum})

    if(!userDetails) {
        throw new NotFound( ` No user with ${userDetails} exist, please provide existing user account number `  )
    }

    res.status(StatusCodes.OK).json( {userDetails} )

}



module.exports = {
    signup,
    login,
    logout,
    disolayEmailForPasswordUpdate,
    postEmailForPassword,
    displayUpdatePassword,
    updatePassword,
    createPin,
    resetPin,
    creditCustomer,
    getUserFromClientSide,
    getuserDetailsByAccountNum,
}