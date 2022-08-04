const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.target('electron-renderer');
    config.plugin('css').use(MiniCssExtractPlugin, [{
      filename: '[name].css',
      chunkFilename: '[id].css',
    }]);
    const cssRule = config.module.rule('css');
    cssRule.uses.clear();
    cssRule
      .use(MiniCssExtractPlugin.loader)
      .loader(MiniCssExtractPlugin.loader)
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('postcss-loader')
      .loader('postcss-loader')
      .end();
    const cssMRule = config.module.rule('css-module');
    cssMRule.uses.clear();
    cssMRule
      .use(MiniCssExtractPlugin.loader)
      .loader(MiniCssExtractPlugin.loader)
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('postcss-loader')
      .loader('postcss-loader')
      .end();
    const scssMRule = config.module.rule('scss');
    scssMRule.uses.clear();
    scssMRule
      .use(MiniCssExtractPlugin.loader)
      .loader(MiniCssExtractPlugin.loader)
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('postcss-loader')
      .loader('postcss-loader')
      .end()
      .use('unicode-loader')
      .loader('unicode-loader')
      .end()
      .use('sass-loader')
      .loader('sass-loader')
      .end();
    const scssMSRule = config.module.rule('scss-module');
    scssMSRule.uses.clear();
    scssMSRule
      .use(MiniCssExtractPlugin.loader)
      .loader(MiniCssExtractPlugin.loader)
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('postcss-loader')
      .loader('postcss-loader')
      .end()
      .use('unicode-loader')
      .loader('unicode-loader')
      .end()
      .use('sass-loader')
      .loader('sass-loader')
      .end();
    console.error(config.toString());
  });
};
