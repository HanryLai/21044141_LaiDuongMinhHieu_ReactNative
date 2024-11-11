const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);

    config.plugins.push(new ReactRefreshWebpackPlugin({ disableRefreshCheck: true }));

    return config;
};
