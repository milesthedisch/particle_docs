const express = require("express");
const path = require("path");

const exConfig = require("../ex-config.js");
const logger = require("./helpers/logger.js");
const exampleHandler = require("./helpers/exampleHandler");
const getExampleNames = require("./helpers/getExampleNames");

module.exports = function router(config) {
  const router = express.Router();

  // Github //
  router.use("/docs", function() {
    res.redirect("https://github.com/milesthedisch/particle_library");
  });

  // Home //
  router.get("/", function(req, res, next) {
    res.render("home");
  });

  // Docs //
  router.get("/api", function(req, res, next) {
    res.redirect("/public/files/docs/Particle.html");
  });

  // Examples //
  router.get("/examples", function(req, res, next) {
    const names = getExampleNames(exConfig);
    res.render("examples", {
      layout: "examples",
      showExamples: true,
      names,
    });
  });

  // Example //
  router.get("/examples/:id", function(req, res, next) {
    // Grab the id from the url
    const id = req.params.id;

    exampleHandler(id, function(err, data) {
      if (err) next(err);
      res.send(data);
    });
  });

  // Downloadable //
  router.get("/code", function(req, res, next) {
    const _path = require.resolve("particle_library");
    res.download(_path, "particle_library.js", function(err) {
      if (err) {
        // Client could be streaming the content.
        // If they close the connection send back a 400.
        if (res.headersSent) {
          res.status(400);
          return res.send({"downloaded": "fail"});
        }
        // If there headers were not sent send back a 500.
        return res.next(err);
      }
      return res.send({"downdload": "success"});
    });
  });

  return router;
};
