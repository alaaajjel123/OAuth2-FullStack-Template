const JwtService = require('../services/jwtService');

const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !JwtService.validateToken(token)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
};

module.exports = jwtMiddleware;