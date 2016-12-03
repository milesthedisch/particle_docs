const serve = require("./controllers/helpers/serve");
const app = require("./controllers/app");
const config = require("./config.js");

serve(app(config), 3000);
