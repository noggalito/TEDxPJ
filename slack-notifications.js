'use strict'
let Slack   = require('slack-node'),
    fs      = require('fs'),
    path    = require('path');

let webhookUri       = process.env.SLACK_HOOK_URL,
    projectUri       = process.env.SLACK_PROJECT_URL,
    slackChannel     = process.env.SLACK_CHANNEL || "",
    projectName      = process.env.SLACK_PROJECT_NAME || "name project",
    iconNotify       = process.env.SLACK_PROJECT_ICON || ":squirrel:",
    slackEnvironment = process.env.SLACK_ENVIRONMENT || "production",
    userDeploy       = process.env.SLACK_USER_DEPLOY || "user",
    botName          = process.env.SLACK_BOT_NAME || "Squirrel";

let filePath = path.join(__dirname, '../.deploys');
let deploysRead = () => {
  return fs.readFileSync(filePath, {encoding: 'utf-8'});
}

let lastVersionDeployed = () => {
  let deploysVersions, lastElement, lastVersion;
  deploysVersions = deploysRead().split('\n')
  lastElement = deploysVersions.length - 2
  lastVersion = deploysVersions[lastElement]
  return lastVersion
}

let slack = new Slack();
slack.setWebhook(webhookUri);

slack.webhook({
  channel   : slackChannel,
  username  : botName,
  text: `<mailto:${userDeploy}|${userDeploy}> deployed version ${lastVersionDeployed()} application <${projectUri}|${projectName}> to ${slackEnvironment} environment`,
  icon_emoji: iconNotify
},
  (err, response) => {
    console.log(response)
  }
);
