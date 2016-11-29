const serve = require("./controllers/helpers/serve");
const app = require("./controllers/app");
<<<<<<< Updated upstream
const particleLib = require("particle_library");

=======
const fs = require('fs');

particleLib = fs.readFileSync(require.resolve("particle_library/main.js"), "utf8");

>>>>>>> Stashed changes
console.log(particleLib);
serve(app, 3000);
