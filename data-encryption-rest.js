const crypto = require("crypto");
const { promisify } = require("util");
const scrypt = promisify(crypto.scrypt);

(async function handleDataEncryptionRest() {
  try {
    const algorithm = "aes-256-cbc";
    const password = "Good strong password for the key.";
    const salt = crypto.randomBytes(32);
    const key = await scrypt(password, salt, 32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let ssn = "111-000-0000";
    let encrypted = cipher.update(ssn, "utf8", "hex");
    encrypted += cipher.final("hex");
    console.log(encrypted);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    console.log(decrypted);
  } catch (error) {
    console.log(error);
  }
})();
