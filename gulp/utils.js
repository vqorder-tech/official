const browserSync = require("browser-sync").create();
const paths = require("./gulp.json");
const vendors = require("../vendors.json");
const { name, dependencies } = require("../package.json");

const isIterableArray = (array) => Array.isArray(array) && !!array.length;
const isProd = process.env.MODE === "PROD";
const baseDir = isProd ? paths.dir.prod : paths.dir.dev;

module.exports = {
  name,
  dependencies,
  paths,
  vendors,
  isIterableArray,
  baseDir,
  browserSync,
  isProd,
};
