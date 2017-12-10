const express = require("express");
const fs = require("fs-extra");
const {resolve} = require("path");
const logger = require("./helpers/logger.js")("info");
const exampleHandler = require("./helpers/exampleHandler");

const EXAMPLE_PATH = resolve(__dirname, "../examples");

module.exports = function router() {
  const router = express.Router(); //eslint-disable-line

  router.use("/docs", function(req, res) {
    res.redirect("https://github.com/milesthedisch/particle_library");
  });

  router.get("/", function(req, res) {
    return res.render("home");
  });

  router.get("/examples", async function(req, res, next) {
    try {
      const names = await fs.readdir(EXAMPLE_PATH);
      const filteredNames = names.filter((name) => {
        return !name.match(/\.[\w-_]+$/);
      });

      return res.render("examples", {
        layout: "examples",
        showExamples: true,
        filteredNames,
        helpers: {
          debug: (val) => {
            console.log("=======");
            console.log("debug: ", val);
            console.log("=======");
          },
        },
      });
    } catch (e) {
      return next(e);
    }
  });

  // Example //
  router.get("/examples/:id", async function(req, res, next) {
    // Grab the id from the url
    const id = req.params.id;

    logger.debug(`GET: /examples/${id}`);

    try {
      const data = await exampleHandler(id);
      return res.send(data);
    } catch (e) {
      return next(e);
    }
  });

  // Downloadable //
  router.get("/code", function(req, res) {
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
