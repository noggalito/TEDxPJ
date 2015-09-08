var Slack = require('slack-node');

var webhookUri       = process.env.SLACK_HOOK_URL,
    slackChannel     = process.env.SLACK_CHANNEL,
    slackProjectName = process.env.SLACK_PROJECT_NAME,
    slackProjectUri  = process.env.SLACK_PROJECT_URL;

slack = new Slack();
slack.setWebhook(webhookUri);

slack.webhook({
  channel: slackChannel,
  username: "PM2 Squirrel",
  text: "Hey! se ha hecho el deploy de <"+ slackProjectUri +"|"+ slackProjectName +"> en produción",
  icon_emoji: ":squirrel:"
}, function(err, response) {
  console.log(response);
});
