const core = require('@actions/core');
const github = require('@actions/github');

try {
    console.log(core);
} catch (error) {
    console.log(error);
}
console.log("Hello World");