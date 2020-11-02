// 用于按需构建入口
let pages = {};
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
  pages = { admin };
} else if (process.argv.some(arg => arg === "--client:mobile")) {
  pages = { mobile };
} else {
  pages = {
    admin,
    mobile
  };
}

const devServer = {
  host: "0.0.0.0"
};

// piu>>=))==))==))==))==))
module.exports = {
  pages,
  devServer
};
