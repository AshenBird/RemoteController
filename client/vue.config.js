
const { resolve: r } = require("path")

const resolve = (path) => r(__dirname, path);

const options = {
  outputDir: resolve('../release/www'),
  devServer: {
    host: "0.0.0.0"
  }
}

// 用于按需构建入口
const admin = {
  entry: "src/admin-entry.js",
  template: "public/index.html",
  title: "Admin",
  filename: "admin.html"
};
const mobile = {
  entry: "src/mobile-entry.js",
  template: "public/index.html",
  title: "mobile",
  filename: "mobile.html"
};
if (process.argv.some(arg => arg === "--client:admin")) {
  options.pages = { admin };
} else if (process.argv.some(arg => arg === "--client:mobile")) {
  options.pages = { mobile };
} else {
  options.pages = {
    admin,
    mobile
  };
}


// piu>>=))==))==))==))==))
module.exports = options;
