@echo off

REM 提交信息可以当作第一个参数传进来，不传就默认 "update"
set msg=%1
if "%msg%"=="" set msg=update

git add .
git commit -m "%msg%"
git push

pause
