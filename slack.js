var Slack = require('node-slack');

var hook_url     = process.env.SLACK_HOOK_URL,
    project_url  = process.env.SLACK_PROJECT_URL,
    project_name = process.env.SLACK_PROJECT_NAME,
    channel      = process.env.SLACK_CHANNEL;

var slack = new Slack(hook_url);

slack.send({
  text      : `Hey! se ha hecho un deploy en <${project_url}|${project_name}> con PM2`,
  channel   : `${channel}`,
  username  : 'PM2 test-slack-notifications',
  icon_emoji: ':ghost:'
});
