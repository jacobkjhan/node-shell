
// Output a prompt
process.stdout.write('bash > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var cmdArgs = cmd.split(" ").slice(1);
  cmd = cmd.split(" ")[0];






//"hello world"
//"hello world"
//"hello world"
//"hello world"





  // process.stdout.write('You typed: ' + cmd);
  var bash = require("./command.js");
  if(bash.hasOwnProperty(cmd)) bash[cmd](cmdArgs);
  else process.stdout.write('Command: "' + cmd + '" does not exist.');

  // process.stdout.write('\nbash > ');

});