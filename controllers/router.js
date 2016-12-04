const express = require("express");
const exampleHandler = require("./helpers/exampleHandler");

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
    // Grab the id from the url
    const id = req.params.id;
    exampleHandler(id, function(err, data) {
      if (err) res.send("error");
      res.send(data);
    });
  });

  router.get("/code", function(req, res, next) {
    const _path = require.resolve("particle_library");
    res.download(_path, "particle_library.js", function(err) {
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
