import fs from 'fs/promises'
const chuck = await fs.readFile("./chuck.json");
let jchuck = JSON.parse(chuck);

console.log(jchuck.result[0].value);

