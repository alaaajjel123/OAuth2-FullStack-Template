const User = require('../models/User');
const JwtService = require('../services/jwtService');

class UserController {
  static async getProfile(req, res) {
    const token = req.headers.authorization;
    const email = JwtService.getEmailFromToken(token);

    try {
      const user = await User.findOne({ email });
      res.json(user);
    } catch (err) {
      res.status(404).json({ error: 'User not found' });
    }
  }

  static async updateUsername(req, res) {
    const token = req.headers.authorization;
    const email = JwtService.getEmailFromToken(token);
    const { username } = req.body;

    try {
      const user = await User.findOne({ email });
      user.username = username;
      await user.save();
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update username' });
    }
  }
}

module.exports = UserController;
