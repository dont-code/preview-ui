const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: 'dontCodePreviewer',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      // name: "previewUi",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './apps/preview-ui/src/app/app.component.ts',
      // },

      // For hosts (please adjust)
      remotes: {},

      shared: share({
        '@angular/core': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
          eager: true,
        },
        '@angular/common': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
          eager: true,
        },
        '@angular/common/http': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
          eager: true,
        },
        '@angular/router': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
          eager: true,
        },
        '@angular/forms': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
          eager: true,
        },
        '@dontcode/core': { singleton: true, strictVersion: true },
        '@dontcode/plugin-common': { singleton: true, strictVersion: true },
        '@dontcode/sandbox': { singleton: true, strictVersion: true },
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
