import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    console.log("Cookies:", req.cookies);
    console.log("Headers Cookie:", req.headers.cookie);

    const token = req.cookies.token;

    if (!token) {
      console.log("No token received");
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default authMiddleware;