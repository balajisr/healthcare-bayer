const express = require("express");
// const basicAuth = require("basic-auth");
const credentials = {
  username: "admin",
  password: "P@ssw0RD",
};

exports.basicAuth = (req, res, next) => {
  const header = req.header.authorization;
  console.log(req.header);
  if (!header) {
    return res.status(401).send("Authorization header required");
  }

  const auth = Buffer.from(header.split(" ")[1], "base64")
    .toString()
    .split(":");
  const username = auth[0];
  const password = auth[1];

  if (username === credentials.username && password === credentials.password) {
    next();
  } else {
    res.status(401).send("Invalid credentials");
  }
};
