const { Command } = require('commander');
const { exec } = require('child_process');
const chalk = require('chalk');

const program = new Command();

program.option(`-n, --name <string>`, `服务名称`);

program.parse(process.argv);

const options = program.opts();

const command = `nest g module ${options.name} server && nest g controller ${options.name} server && nest g provider ${options.name} server`;

exec(command, function exec(err) {
  if (err) {
    console.log(chalk.red(`创建失败`));
  } else {
    console.log(chalk.green(`创建成功`));
  }
});
