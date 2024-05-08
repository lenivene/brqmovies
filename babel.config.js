module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@lib": "./src/lib",
            "@routers": "./src/routers",
            "@screens": "./src/screens",
            "@styles": "./src/styles",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          allowUndefined: false,
        },
      ],
      ["react-native-reanimated/plugin"],
    ],
  };
};
