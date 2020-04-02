module.exports = {
  "pwa": {
    "name": "Hypermedia Whiteboard"
  },
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: `@use "@/styles";`
      }
    }
  }
}