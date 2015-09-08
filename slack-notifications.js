var Slack = require('slack-node');

var webhookUri       = process.env.SLACK_HOOK_URL,
    slackChannel     = process.env.SLACK_CHANNEL,
    projectName      = process.env.SLACK_PROJECT_NAME,
    projectUri       = process.env.SLACK_PROJECT_URL,
    iconNotify       = process.env.SLACK_PROJECT_ICON,
    slackEnvironment = process.env.SLACK_ENVIRONMENT,
    deployUser       = process.env.SLACK_USER_DEPLOY;

slack = new Slack();
slack.setWebhook(webhookUri);

slack.webhook({
  channel: slackChannel,
  username: "PM2 Squirrel",
  text: `${deployUser} deployed <${projectUri}|${projectName}> in ${slackEnvironment} environment `,
  icon_emoji: iconNotify
}, function(err, response) {
  console.log(response);
});
