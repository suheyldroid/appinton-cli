import { Command } from "commander";
import { publish_call, upgrade_call } from "./postData";
import {
  json2formData,
  getPackageJson,
  getWidgets,
  getClusterConfig,
  getDotAppinton,
  writeDotAppinton,
} from "../../common/";
import { formatDeps } from "../../common/";
import { build } from "./build";

async function publish() {
  await build();

  const dot_appinton = getDotAppinton();
  const config = getClusterConfig();
  const dependencies = getPackageJson().dependencies;
  const widgetConfigs = await getWidgets();

  const formData = json2formData({
    name: config.name,
    version: config.version,
    description: config.description,
    source: widgetConfigs.bundle,
    dependencies: JSON.stringify(formatDeps(dependencies)), //JSON.stringify(dependencies),
    widgets: JSON.stringify(widgetConfigs.config),
  });

  const publishData = Boolean(dot_appinton?.id)
    ? await upgrade_call(formData, dot_appinton.id)
    : await publish_call(formData);

  if (publishData) {
    writeDotAppinton(publishData);
  }
}

export const publishCommand = new Command("publish").action(publish);
