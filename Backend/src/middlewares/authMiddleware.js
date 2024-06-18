import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = (...allowedRoles) => (req, res, next) => {

  const token = req.header('x-auth-token');
  console.log(token);
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  console.log("hii")
  try {
    const decoded =  jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    if (!allowedRoles.includes(decoded.user.role)) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }
    req.user = decoded.user;
    console.log("hii")
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default authMiddleware;
