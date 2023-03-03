const {LANGUAGE,VERSION} = require('../../config');
const {existsSync,readFileSync} = require('fs');
var json = existsSync(__dirname+'/lang/' + LANGUAGE + '.json') ? JSON.parse(readFileSync(__dirname+'/lang/' + LANGUAGE + '.json')) : JSON.parse(readFileSync(__dirname+'/lang/english.json'));
console.log("diwaa-md(හැමනියං කාලෙම වතුර ඕනෙ කෝඩ් උස්සන්න එපා😪 "+VERSION)
function getString(file) { return json['STRINGS'][file]; }
module.exports = {language: json, getString: getString }
