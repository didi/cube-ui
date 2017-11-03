#!/bin/bash

# git pull
git pull origin master
# build
npm run doc-demo-build
# ADD commit
git add docs/
git commit -m 'docs build'
git push origin master
