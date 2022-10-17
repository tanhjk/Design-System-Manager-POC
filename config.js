const StyleDictionary = require("style-dictionary")
const tokens = require("./tokens")
const path = require("path")

StyleDictionary.registerFileHeader({
  name: "mySPHHeader",
  fileHeader: defaultMessage => {
    // defaultMessage are the 2 lines above that appear in the default file header
    // you can use this to add a message before or after the default message 👇

    // the fileHeader function should return an array of strings
    // which will be formatted in the proper comment style for a given format
    return [...defaultMessage, ``, `mySPH tokens generated do not edit`]
  },
})
StyleDictionary.registerFilter({
  name: "baseFilter",
  matcher: function (token) {
    return token.attributes.category === "size"
  },
})
const myStyleDictionary = StyleDictionary.extend({
  // configuration
  source: ["tokens/**/*.json"],
  platforms: {
    "scss/base": {
      transformGroup: "scss",
      buildPath: "src/scss/",
      files: [
        {
          destination: `_base.scss`,
          format: "scss/variables",
          filter: "baseFilter",
          options: {
            outputReferences: true,
            fileHeader: "mySPHHeader",
          },
        },
      ],
    },

    // "scss/category": {
    //   transformGroup: "scss",
    //   buildPath: `src/scss/`,
    //   files: tokens.map(filename => ({
    //     destination: `_${path.parse(filename).name}.scss`,
    //     format: "scss/variables",
    //     // filter: {
    //     //   attributes: {
    //     //     category: "colorTokens",
    //     //   },
    //     // },
    //     options: {
    //       outputReferences: true,
    //       fileHeader: "mySPHHeader",
    //     },
    //   })),
    // },
    // "scss/transform": {
    //   transforms: ["attribute/cti", "name/cti/kebab", "color/hex", "size/px"],
    //   buildPath: `src/scss/`,
    //   files: [
    //     {
    //       destination: "transform.scss",
    //       format: "scss/variables",
    //       filter: {
    //         attributes: {
    //           category: "color",
    //         },
    //       },
    //       options: {
    //         outputReferences: true,
    //         fileHeader: "mySPHHeader",
    //       },
    //     },
    //   ],
    // },
  },
})

StyleDictionary.registerFormat({
  name: "custom/cjsmodule",
  formatter: function ({ dictionary }) {
    return `module.exports = {${dictionary.allTokens.map(
      token => `\n\t${token.name}: "${token.value}"`
    )}\n};`
  },
})

myStyleDictionary.buildAllPlatforms()
