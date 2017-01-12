const path = require("path");

module.exports = {
  public: path.resolve("./public"),
  coverage: path.resolve("./public/files/docs"),
  views: {
    default: path.resolve("./views/layouts/main"),
    layouts: path.resolve("./views/layouts"),
    partials: path.resolve("./views/partials"),
  },
};
