module.exports = function (api) {
    api.cache.using(() => "development");

    return {
        presets: ["babel-preset-expo"],
    };
};
