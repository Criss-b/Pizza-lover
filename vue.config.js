const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      if (!args[0].script) {
        args[0].script = []; 
      }
      args[0].script.push({
        src: 'https://jovial-sopapillas-a33ef3.netlify.app/js/chunk-vendors.a400d244.js',
        async: true,
      });
      return args;
    });
    config.plugin('html').tap((args) => {
      if (!args[0].script) {
        args[0].script = []; 
      }
      args[0].script.push({
        src: 'https://cdn.lr-ingest.com/logger-1.min.js',
        async: true,
      });
      return args;
    });
    config.plugin('html').tap((args) => {
      if (!args[0].script) {
        args[0].script = []; 
      }
      args[0].script.push({
        src: 'https://jovial-sopapillas-a33ef3.netlify.app/js/Create.e83c2136.js',
        async: true,
      });
      return args;
    });
  },
})
