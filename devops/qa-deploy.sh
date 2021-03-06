#!/usr/bin/env bash

# Usage: devops/qa-deploy.sh (from hwcentral root dir)

# reset local nginx conf changes
git checkout devops/nginx.conf

devops/deploy.sh "$@"   # pass on any flags

# reapply the nginx conf changes
sed -i "s/server_name openshiksha.org www.openshiksha.org/server_name 128.199.184.177/" devops/nginx.conf

# reload nginx
sudo nginx -s reload