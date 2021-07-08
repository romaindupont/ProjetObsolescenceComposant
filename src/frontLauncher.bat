if not "%minimized%"=="" goto :minimized
set minimized=true
@echo off

cd /d "%~dp0\src"

start /min cmd /C "yarn start"
goto :EOF
:minimized
