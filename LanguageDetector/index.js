const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];
const languageCode = franc(input);
if(languageCode === "und") {
    console.log("Need more sample text");
} else {
    const languageInfo = langs.where("3", languageCode);
    console.log(languageInfo.name);
}


