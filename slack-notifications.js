let Slack = require('slack-node');

let webhookUri       = process.env.SLACK_HOOK_URL,
    projectUri       = process.env.SLACK_PROJECT_URL,
    slackChannel     = process.env.SLACK_CHANNEL || "#general",
    projectName      = process.env.SLACK_PROJECT_NAME || "name project",
    iconNotify       = process.env.SLACK_PROJECT_ICON || ":squirrel:",
    slackEnvironment = process.env.SLACK_ENVIRONMENT || "production",
    userDeploy       = process.env.SLACK_USER_DEPLOY || "user",
    botName          = process.env.SLACK_BOT_NAME || "Squirrel";

let slack = new Slack();
slack.setWebhook(webhookUri);

slack.webhook({
  channel   : slackChannel,
  username  : botName,
  text: `<mailto:${userDeploy}|${userDeploy}> deployed <${projectUri}|${projectName}> in ${slackEnvironment} environment `,
  icon_emoji: iconNotify
},
  (err, response) => {
    console.log(response)
  }
);
