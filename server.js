const serve = require("./controllers/helpers/serve");
const app = require("./controllers/app");
const particleLib = require("particle_library");

console.log(particleLib);
serve(app, 3000);
