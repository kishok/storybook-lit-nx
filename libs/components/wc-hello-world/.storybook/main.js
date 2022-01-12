const rootMain = require('../../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../stories/*.stories.@(js|ts)',
  ],
  addons: [...rootMain.addons],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // find web-components rule for extra transpilation
    const webComponentsRule = config.module.rules.find(
      (rule) => rule.use && rule.use.options && rule.use.options.babelrc === false
    );
    // add your own library
    webComponentsRule.test.push(new RegExp(`node_modules(\\/|\\\\)lit(.*)\\.js$`));
    webComponentsRule.test.push(new RegExp(`node_modules(\\/|\\\\)@lit(.*)\\.js$`));

    return config;
  },
};
