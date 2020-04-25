const crypto = require("crypto");

(function handleDataTransitProtection() {
  const sally = crypto.createDiffieHellman(2048);
  const sallyKeys = sally.generateKeys();
  const bob = crypto.createDiffieHellman(
    sally.getPrime(),
    sally.getGenerator(),
  );
  const bobKeys = bob.generateKeys();
  const sallySecret = sally.computeSecret(bobKeys);
  const bobSecret = bob.computeSecret(sallyKeys);

  console.log("\nSally Secret:\n", sallySecret.toString("hex"));
  console.log("\nBob Secret:\n", bobSecret.toString("hex"));
})();
