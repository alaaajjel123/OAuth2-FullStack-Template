const jwt = require('jsonwebtoken');
require('dotenv').config();

class JwtService {
  static generateToken(email) {
    return jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
  }

  static validateToken(token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return true;
    } catch (err) {
      return false;
    }
  }

  static getEmailFromToken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.email;
  }
}

module.exports = JwtService;