const crypto = require("crypto");
const { promisify } = require("util");

const pbkdf2 = promisify(crypto.pbkdf2);

(async function handleHashedPassword(passwordValue) {
  try {
    console.log("Password:\n", passwordValue);

    const saltBuff = crypto.randomBytes(256);
    const salt = saltBuff.toString("hex");
    console.log("\nSalt:\n", salt);
    const hashBuff = await pbkdf2(passwordValue, salt, 100000, 512, "sha512");
    const hashedPassword = hashBuff.toString("hex");
    console.log("\nHash (sha512):\n", hashedPassword);
  } catch (error) {
    console.log(error);
  }
})("password1");
