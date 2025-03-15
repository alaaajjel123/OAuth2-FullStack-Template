const User = require('../models/User');
const JwtService = require('../services/jwtService');
const GoogleTokenVerifier = require('../services/googleTokenVerifier');

class AuthController {
  static async loginWithGoogle(req, res) {
    const { token } = req.body;

    try {
      const email = await GoogleTokenVerifier.verifyToken(token);
      let user = await User.findOne({ email });

      if (!user) {
        user = new User({
          email,
          username: email.split('@')[0], // Default username
        });
        await user.save();
      }

      const jwtToken = JwtService.generateToken(email);
      res.json({ token: jwtToken });
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  }
}

module.exports = AuthController;