cd ..\plugins
call nx run screen:build
call nx run basic:build
call npm pack dist/libs/screen
call npm pack dist/libs/basic
cd ..\preview-ui
move ..\plugins\dontcode-plugin-screen-*.tgz .
move ..\plugins\dontcode-plugin-basic-*.tgz .
del dontcode-plugin-screen-dev.tgz
del dontcode-plugin-basic-dev.tgz
ren dontcode-plugin-screen-*.tgz dontcode-plugin-screen-dev.tgz
ren dontcode-plugin-basic-*.tgz dontcode-plugin-basic-dev.tgz
call npm install dontcode-plugin-screen-dev.tgz
call npm install dontcode-plugin-basic-dev.tgz
