// Credits: https://github.com/Mephisto5558/Teufelsbot/blob/main/Utils/gitpull.js

// Import the exec function from child_process module and promisify it
const exec = require('node:util').promisify(require('node:child_process').exec);

/** @returns {Promise<Error|'OK'>}*/
// Export an asynchronous function
module.exports = async () => {
  let data; // Declare a variable to store the result of the git pull command

  try {
    /* Try to execute the git pull command
       maxBuffer option is set to 614400 bytes, which is ~600KB */
    data = await exec('git pull', { maxBuffer: 614_400 });
  }
  catch (err) {
    // If an error occurs, log the error and return it
    console.error(`GIT PULL\nExec error: ${err}`);
    return err;
  }

  // Log the result of the git pull command
  console.log(
    'GIT PULL\n'
    // If there is any standard output, log it
    + (data.stdout ? `out: ${data.stdout.trim()}\n` : '')
    // If there is any standard error, log it
    + (data.stderr ? `err: ${data.stderr.trim()}\n` : '')
  );

  // If everything goes well, return 'OK'
  return 'OK';
};