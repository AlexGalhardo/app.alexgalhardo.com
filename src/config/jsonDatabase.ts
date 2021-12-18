import fs from 'fs-extra';

const jsonDatabase = JSON.parse(fs.readFileSync('./database.json'));

export default jsonDatabase;
