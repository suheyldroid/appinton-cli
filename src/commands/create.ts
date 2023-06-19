import chalk from "chalk"
import {Command} from "commander"
import clone from "git-clone"

async function create(path: string, options: { [key: string]: any }) {
    console.log(path, options)
    const repo = "https://github.com/suheyldroid/remote-component-starter-vite"
    clone(repo, path, {}, (err) => {
        if (err) console.log(chalk.red(err.message))
    })

}

export const createCommand = new Command("create")
    .argument("[path]", "path to create component", "component")
    .action(create)
    .option("-n, --name <name>", "name to use", "component")

