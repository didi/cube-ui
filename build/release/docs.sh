#!/bin/bash

# git pull
git pull origin master
# build
npm run doc-demo-build
# ADD commit
git add docs/
git commit -m 'build: docs'
git push origin master
git checkout dev
git rebase master
git push origin dev
git checkout master
