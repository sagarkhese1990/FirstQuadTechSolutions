echo off
cls
echo Rebuild the project
call npm install
echo .
echo .

title :: FQTS - Build application distribution ::
echo Build the application and make it ready for deployment
call ng build --output-path=docs
pause