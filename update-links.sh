#!/bin/sh
cd ../core/node
nx run core:build
cd ../../plugins
nx run sandbox:build --prod
nx run common:build --prod
#nx run basic:build --prod
#nx run screen:build --prod
#nx run fields:build --prod

cd ../preview-ui
npm link ../core/node/dist/libs/core ../plugins/dist/libs/common ../plugins/dist/libs/sandbox #../plugins/dist/libs/basic ../plugins/dist/libs/screen ../plugins/dist/libs/fields
