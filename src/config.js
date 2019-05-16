exports.API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";

exports.AUTH_BASE_URL =
  process.env.REACT_APP_AUTH_BASE_URL || "http://localhost:8080/auth";

exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";
