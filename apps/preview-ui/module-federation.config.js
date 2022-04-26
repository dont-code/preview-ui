module.exports = {
  name: 'preview-ui',
  remotes: [],
  shared: (name, config) => {
    return {
      '@angular/core': {
        ...config,
        singleton: true,
        strictVersion: true,
        eager: true,
      },
      '@angular/common': {
        ...config,
        singleton: true,
        strictVersion: true,
        eager: true,
      },
      '@angular/common/http': {
        ...config,
        singleton: true,
        strictVersion: true,
        eager: true,
      },
      '@angular/router': {
        ...config,
        singleton: true,
        strictVersion: true,
        eager: true,
      },
      '@angular/forms': {
        ...config,
        singleton: true,
        strictVersion: true,
        eager: true,
      },
      '@dontcode/core': {singleton: true, strictVersion: true},
      '@dontcode/plugin-common': {singleton: true, strictVersion: true},
      '@dontcode/sandbox': {singleton: true, strictVersion: true}
    }[name];
  }
};
