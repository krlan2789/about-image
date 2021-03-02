const rimraf = require("rimraf");

const cleanup = () => rimraf("./uploads", () => { console.log("Uploads directory has been Cleaned up!"); });

module.exports = cleanup;