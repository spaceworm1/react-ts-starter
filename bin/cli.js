#!/usr/bin/env node
import { execSync } from 'child_process';

const runCommand = (command) => {
    try {
        execSync(`${command}`, { stdio: 'inherit' });
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }

    return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/ikverenc/react-ts-starter.git ${repoName}`;
const iDeps = `cd ${repoName} && npm i`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`\nInstalling dependencies for ${repoName}`);
const installedDeps = runCommand(iDeps);
if (!installedDeps) process.exit(-1);

console.log(`\nCongratulations! Followe the following commands to start`);
console.log(`\ncd ${repoName}`);
console.log(`npm start`);
console.log('\n\nHappy Hacking!');
