

function genAccountNum() {

    const number = "1234567890"
    const acc = number.split("").sort( ()=> Math.random() - 0.5 ).join("");
    return acc
}

module.exports = genAccountNum