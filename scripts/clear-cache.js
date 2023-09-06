const { exec } = require('child_process');
const chalk = require('chalk');

const folderToDelete = './node_modules/.cache';

exec(`rimraf "${folderToDelete}"`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error clearing cache: ${error}`);
    } else {
        console.log(chalk.green('CACHE HAS BEEN CLEARED!'));
    }
});
