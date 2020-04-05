module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/static/openhab-scheduler/" : "/",
  transpileDependencies: ["vuetify"]
}
