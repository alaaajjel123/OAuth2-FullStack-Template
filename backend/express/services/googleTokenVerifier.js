const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class GoogleTokenVerifier {
  static async verifyToken(idToken) {
    try {
      const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      return payload.email;
    } catch (err) {
      throw new Error('Failed to verify Google token.');
    }
  }
}

module.exports = GoogleTokenVerifier;