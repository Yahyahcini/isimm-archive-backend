export default ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 10000000,
      },
      breakpoints: {
        large: 1000,
        medium: 750,
        small: 500,
      },
    },
  },
});