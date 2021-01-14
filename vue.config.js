module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
				@import "@/assets/css/_variable.scss";
                `,
      },
    },
  },
};
