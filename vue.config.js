const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// Generate pages object
const pagesObj = {};

const chromeName = ["popup", "options"];

chromeName.forEach((name) => {
  pagesObj[name] = {
    entry: `src/${name}/index.ts`,
    template: "public/index.html",
    filename: `${name}.html`,
  };
});

const plugins =
  process.env.NODE_ENV === "production"
    ? [
        {
          from: path.resolve("src/manifest.production.json"),
          to: `${path.resolve("dist")}/manifest.json`,
        },
      ]
    : [
        {
          from: path.resolve("src/manifest.development.json"),
          to: `${path.resolve("dist")}/manifest.json`,
        },
      ];

module.exports = {
  pages: pagesObj,
  configureWebpack: {
    plugins: [
      CopyWebpackPlugin(plugins),
      CopyWebpackPlugin([
        {
          from: path.resolve("src/assets/64jira.png"),
          to: `${path.resolve("dist")}/64jira.png`,
        },
      ]),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
};
