cd ..\plugins
call nx run common:build --prod
call nx run screen:build --prod
call nx run basic:build --prod
call npm pack dist/libs/common
call npm pack dist/libs/screen
call npm pack dist/libs/basic
cd ..\preview-ui
move ..\plugins\dontcode-plugin-common-*.tgz .
move ..\plugins\dontcode-plugin-screen-*.tgz .
move ..\plugins\dontcode-plugin-basic-*.tgz .
del dontcode-plugin-common-dev.tgz
del dontcode-plugin-screen-dev.tgz
del dontcode-plugin-basic-dev.tgz
ren dontcode-plugin-common-*.tgz dontcode-plugin-common-dev.tgz
ren dontcode-plugin-screen-*.tgz dontcode-plugin-screen-dev.tgz
ren dontcode-plugin-basic-*.tgz dontcode-plugin-basic-dev.tgz
call npm install dontcode-plugin-common-dev.tgz dontcode-plugin-screen-dev.tgz dontcode-plugin-basic-dev.tgz
