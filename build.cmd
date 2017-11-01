@echo off

set parameter=%1

git pull
git add .
git commit -m %parameter%
git push
