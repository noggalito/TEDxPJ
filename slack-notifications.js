'use strict'
const Slack   = require('slack-node'),
    fs      = require('fs'),
    path    = require('path');

var webhookUri       = process.env.SLACK_HOOK_URL,
    projectUri       = process.env.SLACK_PROJECT_URL,
    slackChannel     = process.env.SLACK_CHANNEL || "#general",
    projectName      = process.env.SLACK_PROJECT_NAME || "name project",
    iconNotify       = process.env.SLACK_PROJECT_ICON || ":squirrel:",
    slackEnvironment = process.env.SLACK_ENVIRONMENT || "production",
    userDeploy       = process.env.SLACK_USER_DEPLOY || "user",
    botName          = process.env.SLACK_BOT_NAME || "Squirrel";

var filePath = path.join(__dirname, '../.deploys');

function deploysRead () {
  return fs.readFileSync(filePath, {encoding: 'utf-8'});
}

function lastVersionDeployed() {
  let deploysVersions, lastElement, lastVersion;
  deploysVersions = deploysRead().split('\n')
  lastElement = deploysVersions.length - 2
  lastVersion = deploysVersions[lastElement]
  return lastVersion
}

var slack = new Slack();
slack.setWebhook(webhookUri);

slack.webhook({
  channel   : slackChannel,
  username  : botName,
  text: `<mailto:${userDeploy}|${userDeploy}> deployed version <http://github.com/noggalito/tedxpj/commits/|${lastVersionDeployed()}> application <${projectUri}|${projectName}> to ${slackEnvironment} environment`,
  icon_emoji: iconNotify
},
  (err, response) => {
    console.log(response)
  }
);
