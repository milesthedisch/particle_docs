const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./router");
const logger = require("./helpers/logger");
const app = express();

// This file should have all the middleware ordered by
// priortiy.

module.exports = function(config) {
  // Set the engine to handlebars and use layout main as the default.
  app.engine("handlebars", exphbs({
    defaultLayout: config.views.default,
    layoutDir: config.views.layouts,
    partialsDir: config.views.partials,
  }));

  app.set("view engine", "handlebars");

  // Set up static files
  app.use("/public", express.static(config.public));

  // Set up routes.
  app.use(router(config));

  // Fallback to 500 if we have and err
  app.use(function(err, req, res, next) {
    logger("error").error(err);
    res.status(500);
    res.render("errors/500", {layout: false});
  });

  // Fallback to 404 is we cant handle the request.
  app.use(function(req, res, next) {
    logger("warn").warn(404);
    console.log(req.url);
    res.status(404);
    res.render("errors/404", {layout: false});
  });

  return app;
};
