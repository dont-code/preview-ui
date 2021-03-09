cd ..\plugins
call nx run common:build --prod
call nx run basic:build --prod
call nx run screen:build --prod
call nx run fields:build --prod
call npm pack dist/libs/common
call npm pack dist/libs/basic
call npm pack dist/libs/screen
call npm pack dist/libs/fields
cd ..\preview-ui
del dontcode-plugin-*.tgz
move ..\plugins\dontcode-plugin-common-*.tgz .
move ..\plugins\dontcode-plugin-basic-*.tgz .
move ..\plugins\dontcode-plugin-screen-*.tgz .
move ..\plugins\dontcode-plugin-fields-*.tgz .
rem forfiles /M dontcode-plugin-*.tgz /C "cmd /c npm install @file"
call npm install dontcode-plugin-common-1.31.tgz
call npm install dontcode-plugin-basic-1.31.tgz
