// compile code will go here
const path = require('path');
const fs = require('fs');
const solCompiler = require('solc');

const reqPath = path.join(__dirname,'../../');
const inboxPath = path.resolve(reqPath, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = () => solCompiler.compile(source, 1).contracts[':Inbox'];

