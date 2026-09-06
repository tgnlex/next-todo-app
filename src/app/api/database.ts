import Database from 'better-sqlite3';
import {dirname, resolve} from 'path';
import {fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = resolve(__dirname, 'todos.db');

const db = new Database(dbPath, { verbose: console.info });

export default db;

