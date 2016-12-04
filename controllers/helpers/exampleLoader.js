const fs = require("fs");

module.exports = function(config, cb) {
  fs.readFile(config.js, "utf8", function(err, data) {
    if (err) cb(`There was an unexpected err ${err}`);

    const js = `<script>${data}<script>`;
    const title = config.title;
    const css = config.css;

    const context = {js, title, css};

    cb(null, context);
  });
};
