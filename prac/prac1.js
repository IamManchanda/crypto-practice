const crypto = require("crypto");

const passwordValue = "password1";
console.log("Password:\n", passwordValue);

const md5Hash = crypto.createHash("md5");
md5Hash.update(passwordValue);
console.log("\nmd5:\n", md5Hash.digest("hex"));

const sha1Hash = crypto.createHash("sha1");
sha1Hash.update(passwordValue);
console.log("\nsha1:\n", sha1Hash.digest("hex"));

const sha256Hash = crypto.createHash("sha256");
sha256Hash.update(passwordValue);
console.log("\nsha256:\n", sha256Hash.digest("hex"));

const sha512Hash = crypto.createHash("sha512");
sha512Hash.update(passwordValue);
console.log("\nsha512:\n", sha512Hash.digest("hex"));
