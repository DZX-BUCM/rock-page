@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:: 进入当前脚本所在目录
cd /d "%~dp0"

:: =========================
:: 这里是你可以改的配置
:: =========================
set "REPO_URL=https://github.com/DZX-BUCM/rock-page.git"
set "IGNORE_DIR=private"
set "GIT_NAME=Zhaoxvan Ding"
set "GIT_EMAIL=zhaoxvanding@gmail.com"

echo.
echo ==============================
echo   GitHub 一键上传脚本启动中
echo ==============================
echo.

:: 1) 检查 Git 是否安装
where git >nul 2>nul
if errorlevel 1 (
    echo [错误] 没有检测到 Git，请先安装 Git。
    pause
    exit /b 1
)

:: 2) 检查当前目录是不是 Git 仓库，不是就自动初始化
git rev-parse --is-inside-work-tree >nul 2>nul
if errorlevel 1 (
    echo [提示] 当前目录不是 Git 仓库，正在自动初始化...
    git init
)

:: 3) 自动设置 Git 提交身份（避免 Author identity unknown）
git config user.name "%GIT_NAME%"
git config user.email "%GIT_EMAIL%"

:: 4) 确保 .gitignore 存在
if not exist ".gitignore" (
    type nul > .gitignore
)

:: 5) 把 private/ 写入 .gitignore（避免重复添加）
findstr /x /c:"%IGNORE_DIR%/" ".gitignore" >nul 2>nul
if errorlevel 1 (
    echo %IGNORE_DIR%/>>.gitignore
    echo [提示] 已加入忽略规则：%IGNORE_DIR%/
)

:: 6) 如果 private 以前已经被 Git 跟踪过，这里取消跟踪
git rm -r --cached --ignore-unmatch "%IGNORE_DIR%" >nul 2>nul

:: 7) 自动绑定远程仓库
git remote get-url origin >nul 2>nul
if errorlevel 1 (
    git remote add origin "%REPO_URL%"
    echo [提示] 已添加远程仓库：%REPO_URL%
) else (
    git remote set-url origin "%REPO_URL%"
    echo [提示] 已更新远程仓库：%REPO_URL%
)

:: 8) 获取当前分支名
for /f "delims=" %%i in ('git branch --show-current 2^>nul') do set "BRANCH=%%i"

:: 如果当前还没有分支，就创建 main
if not defined BRANCH (
    git checkout -b main >nul 2>nul
    set "BRANCH=main"
)

:: 9) 添加所有文件（会自动跳过 private）
git add .

:: 10) 检查有没有改动
git diff --cached --quiet
if not errorlevel 1 (
    echo [提示] 没有需要上传的改动。
    pause
    exit /b 0
)

:: 11) 自动生成提交信息
set "MSG=自动上传 %date% %time%"

:: 12) 提交
git commit -m "%MSG%"
if errorlevel 1 (
    echo [错误] 提交失败。
    pause
    exit /b 1
)

:: 13) 推送到 GitHub
echo.
echo [提示] 正在推送到 GitHub...
git push -u origin "%BRANCH%"
if errorlevel 1 (
    echo.
    echo [错误] 推送失败。
    echo 可能原因：
    echo 1. GitHub 还没登录
    echo 2. 没有仓库权限
    echo 3. 远程分支和本地分支历史不一致
    echo 4. 需要先拉取远程内容
    pause
    exit /b 1
)

echo.
echo [成功] 已上传到 GitHub，且 %IGNORE_DIR% 文件夹不会上传。
pause