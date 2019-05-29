exports.API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://packtracker-server.herokuapp.com/api";

exports.AUTH_BASE_URL =
  process.env.REACT_APP_AUTH_BASE_URL || "https://packtracker-server.herokuapp.com/auth";

exports.CLIENT_ORIGIN =
  process.env.CLIENT_ORIGIN ||
  "http://localhost:3000" ||
  "https://packtracker-app.herokuapp.com";
