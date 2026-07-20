@echo off
setlocal EnableExtensions
title GitHub One Click Upload

cd /d "%~dp0"

set "ROOT=%CD%"
set "REPO_URL=https://github.com/DZX-BUCM/rock-page.git"
set "REPO_PAGE=https://github.com/DZX-BUCM/rock-page"
set "BRANCH=main"
set "STAGE=%TEMP%\rock-page-upload-%RANDOM%-%RANDOM%"

echo.
echo ============================================================
echo GitHub One Click Upload
echo ============================================================
echo.
echo Local folder:
echo %ROOT%
echo.
echo Target repository:
echo %REPO_URL%
echo.
echo Excluded folder:
echo private
echo.

rem ------------------------------------------------------------
rem Check Git
rem ------------------------------------------------------------

where git >nul 2>&1

if errorlevel 1 (
    echo ERROR: Git is not installed.
    echo Install Git for Windows first.
    start "" "https://git-scm.com/download/win"
    goto :FAILED
)

echo [1/6] Git is ready.
echo.

rem ------------------------------------------------------------
rem Prepare temporary directory
rem ------------------------------------------------------------

echo [2/6] Preparing temporary directory...

if exist "%STAGE%\" (
    rmdir /s /q "%STAGE%"
)

echo Temporary directory:
echo %STAGE%
echo.

rem ------------------------------------------------------------
rem Clone repository
rem ------------------------------------------------------------

echo [3/6] Cloning GitHub repository...
echo.

git clone --branch "%BRANCH%" --single-branch "%REPO_URL%" "%STAGE%"

if errorlevel 1 (
    echo.
    echo ERROR: Failed to clone repository.
    goto :FAILED
)

if not exist "%STAGE%\.git\" (
    echo.
    echo ERROR: Git metadata was not found after clone.
    goto :FAILED
)

echo.
echo Repository cloned successfully.
echo.

rem ------------------------------------------------------------
rem Delete old repository files but preserve .git
rem ------------------------------------------------------------

echo [4/6] Removing old public files...

for /f "delims=" %%I in ('dir /a /b "%STAGE%"') do (
    if /I not "%%I"==".git" (
        if exist "%STAGE%\%%I\" (
            rmdir /s /q "%STAGE%\%%I"
        ) else (
            del /f /q "%STAGE%\%%I" >nul 2>&1
        )
    )
)

if not exist "%STAGE%\.git\" (
    echo.
    echo ERROR: The .git directory was removed unexpectedly.
    goto :FAILED
)

echo Old public files removed.
echo.

rem ------------------------------------------------------------
rem Copy everything except private and .git
rem ------------------------------------------------------------

echo [5/6] Copying local public files...
echo private will not be copied.
echo.

robocopy "%ROOT%" "%STAGE%" /E /COPY:DAT /DCOPY:DAT /R:2 /W:1 /XD "%ROOT%\private" "private" ".git" /NFL /NDL /NJH /NJS /NP

set "ROBOCOPY_CODE=%ERRORLEVEL%"

if %ROBOCOPY_CODE% GEQ 8 (
    echo.
    echo ERROR: Robocopy failed with code %ROBOCOPY_CODE%.
    goto :FAILED
)

rem ------------------------------------------------------------
rem Ensure private is ignored by Git
rem ------------------------------------------------------------

if not exist "%STAGE%\.gitignore" (
    type nul > "%STAGE%\.gitignore"
)

call :ENSURE_IGNORE "private/"
call :ENSURE_IGNORE "**/private/"

rem ------------------------------------------------------------
rem Final privacy check
rem ------------------------------------------------------------

powershell -NoProfile -ExecutionPolicy Bypass -Command "$items = Get-ChildItem -LiteralPath $env:STAGE -Directory -Recurse -Force -ErrorAction SilentlyContinue | Where-Object { $_.Name -ieq 'private' }; if ($items) { $items.FullName | ForEach-Object { Write-Host $_ }; exit 1 } else { exit 0 }"

if errorlevel 1 (
    echo.
    echo SECURITY ERROR: A private folder was found.
    echo Upload has been stopped.
    goto :FAILED
)

echo.
echo Public files copied successfully.
echo private was not copied.
echo.

rem ------------------------------------------------------------
rem Configure Git identity when necessary
rem ------------------------------------------------------------

git -C "%STAGE%" config user.name >nul 2>&1

if errorlevel 1 (
    git -C "%STAGE%" config user.name "DZX-BUCM"
)

git -C "%STAGE%" config user.email >nul 2>&1

if errorlevel 1 (
    git -C "%STAGE%" config user.email "DZX-BUCM@users.noreply.github.com"
)

rem ------------------------------------------------------------
rem Create commit
rem ------------------------------------------------------------

echo [6/6] Creating commit and pushing to GitHub...
echo.

git -C "%STAGE%" add --all

if errorlevel 1 (
    echo ERROR: Git add failed.
    goto :FAILED
)

git -C "%STAGE%" diff --cached --quiet

if not errorlevel 1 (
    goto :NO_CHANGES
)

git -C "%STAGE%" commit -m "Automatic website upload"

if errorlevel 1 (
    echo.
    echo ERROR: Git commit failed.
    goto :FAILED
)

rem ------------------------------------------------------------
rem Push
rem ------------------------------------------------------------

git -C "%STAGE%" push origin "%BRANCH%"

if errorlevel 1 (
    echo.
    echo ERROR: Git push failed.
    echo.
    echo The first upload may open a browser login window.
    echo Sign in with an account that can edit the repository.
    goto :FAILED
)

echo.
echo ============================================================
echo UPLOAD SUCCESSFUL
echo ============================================================
echo.
echo Repository:
echo %REPO_PAGE%
echo.
echo private was not uploaded.
echo.

if exist "%STAGE%\" (
    rmdir /s /q "%STAGE%"
)

start "" "%REPO_PAGE%"

echo Repository page opened.
echo.
pause
exit /b 0

rem ------------------------------------------------------------
rem No changes
rem ------------------------------------------------------------

:NO_CHANGES

echo.
echo ============================================================
echo NO FILE CHANGES FOUND
echo ============================================================
echo.
echo Local public files already match the GitHub repository.
echo private was not uploaded.
echo.

if exist "%STAGE%\" (
    rmdir /s /q "%STAGE%"
)

pause
exit /b 0

rem ------------------------------------------------------------
rem Add one line to .gitignore only when missing
rem ------------------------------------------------------------

:ENSURE_IGNORE

findstr /L /X /C:"%~1" "%STAGE%\.gitignore" >nul 2>&1

if errorlevel 1 (
    >>"%STAGE%\.gitignore" echo %~1
)

exit /b 0

rem ------------------------------------------------------------
rem Failure cleanup
rem ------------------------------------------------------------

:FAILED

echo.
echo ============================================================
echo UPLOAD FAILED
echo ============================================================
echo.
echo private was not uploaded.
echo.

if exist "%STAGE%\" (
    rmdir /s /q "%STAGE%"
)

pause
exit /b 1