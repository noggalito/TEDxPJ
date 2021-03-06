#!/bin/bash
export ENV=$1
pm2 deploy ecosystem.json5 $ENV

if [ $? -eq 0 ]
then
  node ./slack-notifications.js
fi

exit $?
