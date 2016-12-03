const express = require("express");
const app = require("./app");
const exphs = require("express-handlebars");

module.exports = function router(config) {
  const router = express.Router();

  router.get("/", function(req, res, next) {
    res.render("home");
  });

  router.get("/docs", function(req, res, next) {
    res.render("docs");
  });

  router.get("/maths", function(req, res, next) {
    res.render("maths");
  });

  router.get("/examples", function(req, res, next) {
    res.render("examples", {layout: "examples"});
  });

  router.get("/examples/:id", function(req, res, next) {
    res.send("sometext");
  });

  router.get("/code", function(req, res, next) {
    const _path = require.resolve("particle_library");
    res.download(_path, "particle_library", function(err) {
      if (err) {
        // Clinet could be streaming the content.
        // If they close the connection send back a 400.
        if (res.headersSent) {
          res.status(400);
          res.send({"downloaded": "fail"});
        }
        // If there headers were not sent send back a 500.
        res.next(err);
      }
      res.send({"downdload": "success"});
    });
  });

  return router;
};
