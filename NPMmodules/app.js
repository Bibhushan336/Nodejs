const chalk = require("chalk");
const validator = require("validator");
// import chalk from 'chalk';

console.log(chalk.blue("hello world"));
const res = validator.isEmail("thapa@bibhushan.com")
console.log(res ? chalk.green.inverse(res) : chalk.redinverse(res));