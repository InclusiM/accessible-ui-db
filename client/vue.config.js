const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      css: {
        // This helps with CSS processing
        importLoaders: 1
      }
    }
  }
})
