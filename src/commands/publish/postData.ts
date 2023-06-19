import chalk from "chalk";
import api from "../../services/api/api";
import fs from "fs";

export async function publish_call(data: FormData) {
  const response = await api.routes.publish(data);
  if (response.status.ok) {
    console.log(chalk.green("Published successfully!"));
    return response.data;
  }
  logError(response.data);
  return false;
}
export async function upgrade_call(data: FormData, id: string) {
  const response = await api.routes.update(id, data);
  if (response.status.ok) {
    console.log(chalk.green("Upgraded successfully!"));
    return response.data;
  }
  logError(response);
  return false;
}

function logError(data: any) {
  console.log("logError", data);

  if (!data) return;
  if (Array.isArray(data?.errors)) {
    data.errors.forEach((error: any) => {
      console.log(chalk.red(JSON.stringify(error)));
    });
  }

  if (!fs.existsSync("errors")) fs.mkdirSync("errors");
  const path = "errors/" + (data?.traceId ?? Date.now()) + ".log";
  const log = JSON.stringify(data, null, 4);

  fs.writeFile(path, log, { flag: "wx" }, function (err) {
    if (err) throw err;
    const errorMessage = "An error occured, please check the log file: " + path;
    console.log(chalk.red(errorMessage));
  });
}
