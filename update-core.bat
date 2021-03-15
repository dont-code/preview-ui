cd ..\core\node
call nx run core:build
call npm pack dist/libs/core
cd ..\..\preview-ui
call npm uninstall @dontcode/core
call npm install "..\core\node\dist\libs\core"
