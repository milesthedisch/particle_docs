const express = require("express");

const exConfig = require("../ex-config.js");
const log = require("./helpers/logger.js")("info");
const exampleHandler = require("./helpers/exampleHandler");
const getExampleNames = require("./helpers/getExampleNames");

module.exports = function router() {
  const router = express.Router(); //eslint-disable-line

  router.use("/docs", function(req, res, next) {
    res.redirect("https://github.com/milesthedisch/particle_library");
  });

  router.get("/", function(req, res, next) {
    res.render("home");
  });

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

    log(`GET: /examples/${id}`);

    exampleHandler(id, function(err, data) {
      if (err) return next(err);
      return res.send(data);
    });
  });

  // Downloadable //
  router.get("/code", function(req, res, next) {
    const _path = require.resolve("particle_library");

    res.download(_path, "particle_library.js", function(err) {
      if (err && res.headersSent) {
        res.status(400);
        return res.send({"downloaded": "fail"});
      } else if (err) {
        return res.next(err);
      }

      return res.send({"downdload": "success"});
    });
  });

  return router;
};
