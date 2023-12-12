const {stdin, stdout} = require('node:process');
const commands = require('./commands/index.js');
const {Z_ASCII} = require('zlib');

function bash() {
  stdout.write('prompt > ');
  stdin.on('data', data => {
    let args = data.toString().trim().split(' ');
    let cmd = args.shift();
    if (!commands[cmd]) {
      print(`command not found: ${cmd}`);
    } else {
      commands[cmd](print, ...args);
    }
  });
}
function print(output) {
  stdout.write(output);
  stdout.write('\nprompt > ');
}

bash();
module.exports = {
  print,
  bash,
};
