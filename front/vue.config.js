const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		},
    chainWebpack: config => {
      // ajouter le chargeur gltf-webpack-loader
      config.module
        .rule('gltf')
        .test(/\.gltf$/)
        .use('gltf-webpack-loader')
        .loader('gltf-webpack-loader')
        .end()
    },
  }
})