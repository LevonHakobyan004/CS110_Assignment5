import readlineSync from "readline-sync";
import { countWords, trim } from "./utils.js";

const wordCountTest = readlineSync.question("Input a sentence: ");
console.log(countWords(wordCountTest));

const trimTest = readlineSync.question("Input any string: ");
console.log(trim(trimTest));
