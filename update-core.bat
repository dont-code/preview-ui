cd ..\core\node
call nx run core:build
call npm pack dist/libs/core
cd ..\..\preview-ui
del dontcode-core-*.tgz
move ..\core\node\dontcode-core-*.tgz .
forfiles /M dontcode-core-*.tgz /C "cmd /c npm install @file"

