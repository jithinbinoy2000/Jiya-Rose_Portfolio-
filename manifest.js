export default function manifest() {
  return {
    name: 'Jiya Portfolio',
    short_name: 'Jiya',
    description: 'My portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/me.jpg',
        sizes: '192x192',
        type: 'image/jpg',
      },
      {
        src: '/me.jpg',
        sizes: '512x512',
        type: 'image/jpg',
      },
    ],
  }
}