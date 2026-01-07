import fs from 'fs';

// Read environment files
let prodEnv = "PROD_ENV not set";
let stagingEnv = "STAGING_ENV not set";

try {
  prodEnv = fs.readFileSync('/var/www/fresh-pipeline/pord.env', 'utf-8').trim();
} catch {}

try {
  stagingEnv = fs.readFileSync('/var/www/fresh-pipeline/staging.env', 'utf-8').trim();
} catch {}

console.log("✅ Fresh Node.js App Hello World");
console.log("PROD_ENV:", prodEnv);
console.log("STAGING_ENV:", stagingEnv);
