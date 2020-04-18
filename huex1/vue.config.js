module.exports = {
  pwa: {
    name: "Hypermedia Whiteboard",
    manifestPath: 'manifest.json',
    themeColor: '#009688',
    msTileColor: '#009688',
    manifestOptions: {
      name: 'Hypermedia Whiteboard',
      background_color: '#009688',
      icons: [
        {
          'src': './icons/android-chrome-192x192.png',
          'sizes': '192x192',
          'type': 'image/png'
        },
        {
          'src': './icons/android-chrome-512x512.png',
          'sizes': '512x512',
          'type': 'image/png'
        },
        {
          'src': './icons/android-chrome-maskable-192x192.png',
          'sizes': '192x192',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': './icons/android-chrome-maskable-512x512.png',
          'sizes': '512x512',
          'type': 'image/png',
          'purpose': 'maskable'
        }
      ]
    }
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