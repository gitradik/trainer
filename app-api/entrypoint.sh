#!/bin/sh
rsync -arv /usr/src/cache/node_modules/. /usr/src/app/app-api
chown -R $USER:$USER /usr/src/app/app-api
exec "$@"