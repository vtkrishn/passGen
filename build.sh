#! /bin/sh

parameter=$1
git pull
npm test
npm run cover
npm version patch -m "Version %s - $parameter"

git add .
git commit -m "$parameter"
git push && git push --tags
npm publish
