const { JWT_SECRET = "your-secret-key", NODE_ENV } = process.env;

module.exports = {
  JWT_SECRET,
  NODE_ENV,
};
