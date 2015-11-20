'use strict'
var Slack   = require('slack-node'),
    fs      = require('fs'),
    path    = require('path'),
    exec    = require('child_process').exec;

var defaults = {
  hook_url: "https://hooks.slack.com/services/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",
  project_url: "http://2015.tedxparquejipiro.com",
  slack_channel: "#tedxpj",
  project_name: "TEDx ParqueJipiro"
};

var webhookUri       = process.env.SLACK_HOOK_URL || defaults["hook_url"],
    projectUri       = process.env.SLACK_PROJECT_URL || defaults["project_url"],
    slackChannel     = process.env.SLACK_CHANNEL || defaults["slack_channel"],
    projectName      = process.env.SLACK_PROJECT_NAME || defaults["project_name"],
    iconNotify       = process.env.SLACK_PROJECT_ICON || ":squirrel:",
    slackEnvironment = process.env.ENV || "unknown",
    botName          = process.env.SLACK_BOT_NAME || "Squirrel";

var filePath = path.join(__dirname, '../.deploys');

function deploysRead () {
  return fs.readFileSync(filePath, {encoding: 'utf-8'});
}

function lastVersionDeployed() {
  var deploysVersions, lastElement, lastVersion;
  deploysVersions = deploysRead().split('\n')
  lastElement = deploysVersions.length - 2
  lastVersion = deploysVersions[lastElement]
  return lastVersion
}

var slack = new Slack();
slack.setWebhook(webhookUri);

var execute = function (command, callback) {
  exec(command, function(error, stdout, stderr){ callback(stdout); });
};

execute("git config --global user.name", function(name) {
  var deployUsername = name.replace("\n", "");

  execute("git config --global user.email", function(email) {
    var deployEmail = email.replace("\n", "");

    execute("pm2 -s deploy ecosystem.json5 " + process.env.ENV + " curr", function (sha) {
      var version = sha.replace("\n", "");

      slack.webhook({
        channel   : slackChannel,
        username  : botName,
        icon_emoji: iconNotify,
        text: "<mailto:" + deployEmail + "|" + deployUsername + "> deployed version <http://github.com/noggalito/tedxpj/commits/" + version + "|" + version + "> of application <" + projectUri + "|" +  projectName + "> to " + slackEnvironment
      }, function (err, response) {
        console.log(response)
      });
    });
  });
});
