'use strict'

/**
 * Resources: 
 * https://nodejs.org/docs/latest-v12.x/api/fs.html
 * https://lodash.com/docs
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * https://nodejs.org/api/modules.html (module.exports, exports, require)
 */

// TODO: Prepare working directory script:
//      - function checkGitignore(): Check if ".gitignore" file exists, otherwise throw an error: "No '.gitignore' file. Please create .gitignore' file, otherwise all .txt files will be commited"
//      - function checkOutputFolder(): Check "output" folder. If 'output' folder exists, throw an error:
//                                      "Output folder is here, but need to be removed (use cleanup script)"
//                                      If there is no folder, proceed
//      - function createOutputFolder(): Create directory "output"

//      NOTE: file can be executed as script and can be exported, you need to handle both cases

const fs = require('fs');
const {isEqual, difference} = require('lodash');
const {requiredFiles} = require('./resources.json')


function prepareWorkspace() {
    checkGitignore();
    checkDataFolder();
    checkOutputFolder();
    createOutputFolder();
}

function checkGitignore() {}

function checkDataFolder() {
    if (!fs.existsSync('./data')) {
        throw new Error("No 'data' file");
    }
    console.log(' -> ./data folder exists');

    const existFiles = fs.readdirSync('./data');
    if (!isEqual(existFiles, requiredFiles)) {
        throw new Error(`Not enough files in './data' folder: missed '${difference(requiredFiles, existFiles)}' file(s)`);
    }
    console.log(' -> files in ./data folder exist');
}

function checkOutputFolder() {}

function createOutputFolder() {}

if(require.main === module){
    prepareWorkspace();
}