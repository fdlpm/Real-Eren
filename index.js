import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const realEren = fs.readFileSync(__dirname + "/real_eren.txt", "utf8"); //Read in the ASCII art of the real Eren.

export { realEren as default, realEren }; //Export the real Eren
