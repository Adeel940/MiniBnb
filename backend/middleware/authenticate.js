// backend/middleware/authenticate.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  // const token = req.headers['authorization'];
  const token = req.headers["authorization"]?.split(" ")[1];
console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is required' });
  }else{
    console.log("TOKEEEEEEEEEEENNNNNNNNNNN HEREEEEEEE");
  }

  try {
    console.log(process.env.JWT_SECRET)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded user data to the request
    console.log(decoded.user);
    console.log(decoded);
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.log("ERORRRRRRRRRRRR");
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authenticate;
