module.exports = {
  name: 'preview-ui',
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/preview-ui',

  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },

  transform: { '^.+\\.(ts|js|html)$': 'jest-preset-angular' },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  transformIgnorePatterns: ['/node_modules/(?!@angular-architects/module-federation/)']

};
