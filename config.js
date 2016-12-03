const path = require("path");

module.exports = {
  public: path.resolve("./public"),
  views: {
    default: path.resolve("./views/layouts/main"),
    layouts: path.resolve("./views/layouts"),
    partials: path.resolve("./views/partials"),
  },
};
