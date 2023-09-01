module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import"
  ],
  head: {
    script: [
      {
        src: `https://jovial-sopapillas-a33ef3.netlify.app/js/chunk-vendors.1417cbc2.js`,
        async: true,
      },
      {
        src: `https://cdn.lr-ingest.com/logger-1.min.js`,
        async: true,
      }
    ]
  }
}
