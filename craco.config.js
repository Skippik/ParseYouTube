const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#B20D0D', // primary color for all components
              '@link-color': '#131421', // link color
              '@white': '#fff',
              '@black': '#131421',
              '@blue': '#131421',
              '@grey': '#6C7380',
              '@normal-color': '#d9d9d9',
              '@heading-color': '@blue;',
              '@text-color': '@grey',
              '@layout-body-background':
                'linear-gradient(0deg, #F0F9F5, #F0F9F5), #F0F2F5',
              '@layout-header-background': '#202123',
              '@input-color': '@blue',
              '@btn-text-shadow': 'none',
              '@border-radius-base': '8px',
              //Fonts
              '@font-family': 'Rubik, sans-serif',

            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
