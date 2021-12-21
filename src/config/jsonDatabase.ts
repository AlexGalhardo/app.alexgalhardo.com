import { readFileSync } from 'fs-extra';

const jsonDatabase = JSON.parse(readFileSync('./database.json'));

export default jsonDatabase;
