const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequest, NotFound, Unauthenticated } = require("../error");
const getCurrentAdmin = require("../utils/getCurrentAdmin");

const period = 60 * 5;


const signup = async (req, res) => {
    const admin = await Admin.create({...req.body})

    res.status(StatusCodes.CREATED).json( {success: true, admin} )

};

const login = async (req, res) => {
    const {email, password} = req.body;

    if( !email || !password ) {
        throw new BadRequest( " provide email and password " );
    };

    const admin = await  Admin.findOne({email});
    if( !admin ) {
        throw new Unauthenticated( " Invalid credentials " );
    };

    const isAdminPassword = await admin.comparePassword(password);
    if(!isAdminPassword) {
        throw new Unauthenticated( " Invalid credentials " );
    };

    await jwt.sign( {adminId: admin._id}, process.env.JWT_SECRET, {expiresIn: period}, async(err, token) =>{
        if(err){
            throw new BadRequest(" Token is Invalid ")
        };
        res.cookie("adminToken", token, {maxAge: 1000 * period, httpOnly: true});
        res.status(StatusCodes.OK).json( {success: true, msg: " Successfully login ", admin} );

    } );

};

const adminCreditCustomer = async (req, res) => {
    const {accountNum, amount, pin} = req.body;

    const adminId = await getCurrentAdmin(req);
    const ad = await Admin.findById(adminId);

    if(Number(pin) === ad.pin ) {
        const customerToCredit = await User.findOne({accountNum});
        if(customerToCredit) {

            const customerBalance = Number(amount) + customerToCredit.accountBalance;
            const updateCustomerBalance = await User.findOneAndUpdate( {accountNum}, {accountBalance: customerBalance} );

            res.status(StatusCodes.OK).json( { success: true, msg: " Transaction Successfull " } )

        } else {
            throw new NotFound( " no user exist with the account" )
        }

    } else{
        throw new Unauthenticated(" Incorrect pin ");
    }

};


const createAdminPin = async (req, res) => {
    const {pin} = req.body;

    const adminId = await getCurrentAdmin(req);
    
    const updatePin = await Admin.findByIdAndUpdate(adminId, {pin});

    res.status(StatusCodes.OK).json( { success: true, msg: " pin successfully changed " } )

}




module.exports = {
    signup,
    login,
    adminCreditCustomer,
    createAdminPin
}