// 用于按需构建入口
let pages = {};
if (process.argv.some(arg => arg === "--client:admin")) {
  pages.admin = "src/admin-entry.js";
} else if (process.argv.some(arg => arg === "--client:mobile")) {
  pages.mobile = "src/mobile-entry.js";
} else {
  pages = {
    admin: "src/admin-entry.js",
    mobile: "src/mobile-entry.js"
  };
}
// piu>>=))==))==))==))==))
module.exports = {
  pages
};
