module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV !== "production") {
      config.devtool = "source-map"
    }
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/static/openhab-scheduler/" : "/",
  transpileDependencies: ["vuetify"]
}
