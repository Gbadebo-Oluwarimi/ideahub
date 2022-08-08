const jwt = require('jsonwebtoken');


const ForgotPassword = (id, password, email) => {
    const secret = process.env.JWT_SECRET + password;
    const payload = {
        email,
        id,
    }
    const token = jwt.sign(payload, secret, {expiresIn: '20m'})
    const link = `http://localhost:3000/reset-password/${id}/${token}`
    return link;

}

module.exports = ForgotPassword;