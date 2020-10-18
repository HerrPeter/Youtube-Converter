export const _SERVER = {
  SSL_DOMAIN: process.env.SSL_SERVER, //'https://4a85fe8dfb29.ngrok.io', // Need to update when new domain is created from ngrok backend.
  DOMAIN: process.env.SSL_SERVER,
  REQUESTS: {
    SINGLE_DOWNLOAD: 'single',
    PLAYLIST_DOWNLOAD: 'playlist',
    VALIDATE_URL: 'validate',
  },
};
