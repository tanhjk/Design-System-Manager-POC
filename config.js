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

StyleDictionary.registerFileHeader({
  name: "TTHeader",
  fileHeader: defaultMessage => {
    // defaultMessage are the 2 lines above that appear in the default file header
    // you can use this to add a message before or after the default message 👇

    // the fileHeader function should return an array of strings
    // which will be formatted in the proper comment style for a given format
    return [
      `/* type token */`,
      `mySPH tokens generated do not edit`,
      `$themes: ( `,
    ]
  },
})

StyleDictionary.registerFilter({
  name: "baseFilter",
  matcher: function (token) {
    return (
      token.attributes.category === "color" ||
      token.attributes.category === "size" ||
      token.attributes.category === "spacing"
    )
  },
})

StyleDictionary.registerFormat({
  name: "shadowFormat",
  formatter: function ({ dictionary }) {
    return dictionary.allTokens
      .map(token => {
        let value = JSON.stringify(token.value)
        // the `dictionary` object now has `usesReference()` and
        // `getReferences()` methods. `usesReference()` will return true if
        // the value has a reference in it. `getReferences()` will return
        // an array of references to the whole tokens so that you can access their
        // names or any other attributes.
        // console.log(token.value)
        const ttVal = token.value
        value =
          ttVal.x +
          "px " +
          ttVal.y +
          "px " +
          ttVal.blur +
          "px " +
          ttVal.spread +
          "px " +
          ttVal.color

        if (dictionary.usesReference(token.original.value)) {
          // Note: make sure to use `token.original.value` because
          // `token.value` is already resolved at this point.
          const refs = dictionary.getReferences(token.original.value)
          refs.forEach(ref => {
            value = value.replace(ref.value, function () {
              return `$${ref.name}`
            })
          })
        }
        return `$${token.name} : ${value};`
      })
      .join(`\n`)
  },
})

StyleDictionary.registerFormat({
  name: "ttFormat",
  formatter: function ({ dictionary }) {
    return (
      `$theme: ( \n` +
      dictionary.allTokens
        .map(token => {
          let value = JSON.stringify(token.value)
          // the `dictionary` object now has `usesReference()` and
          // `getReferences()` methods. `usesReference()` will return true if
          // the value has a reference in it. `getReferences()` will return
          // an array of references to the whole tokens so that you can access their
          // names or any other attributes.
          // console.log(token.value)

          const ttVal = token.value
          console.dir(token.name)

          value = `{
          font-family: ${ttVal.fontFamily};
          font-weight: ${ttVal.fontWeight};
          font-size: ${ttVal.fontSize};
          line-height: ${ttVal.lineHeight}; 
        }`

          if (dictionary.usesReference(token.original.value)) {
            // Note: make sure to use `token.original.value` because
            // `token.value` is already resolved at this point.
            const refs = dictionary.getReferences(token.original.value)
            refs.forEach(ref => {
              value = value.replace(ref.value, function () {
                return `$${ref.name}`
              })
            })
          }
          return `.${token.name} ${value}`
        })
        .join(`\n`) +
      `\n)`
    )
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
          filter: "baseFilter",
          format: "scss/variables",
          options: {
            outputReferences: true,
            fileHeader: "mySPHHeader",
          },
        },
      ],
    },
    "scss/type": {
      transformGroup: "scss",
      buildPath: "src/scss/",
      files: [
        {
          destination: `_typography.scss`,
          format: "scss/variables",
          filter: {
            attributes: {
              category: "type",
            },
          },
          options: {
            outputReferences: true,
            fileHeader: "mySPHHeader",
          },
        },
      ],
    },
    "scss/shadow": {
      transformGroup: "scss",
      buildPath: "src/scss/",
      files: [
        {
          destination: `_shadow.scss`,
          format: "shadowFormat",
          options: {
            outputReferences: true,
            fileHeader: "mySPHHeader",
          },
          filter: {
            attributes: {
              category: "shadow",
            },
          },
        },
      ],
    },
    "scss/ctokens": {
      transformGroup: "scss",
      buildPath: "src/scss/",
      files: [
        {
          destination: `_ctokens.scss`,
          format: "scss/variables",
          options: {
            outputReferences: true,
            fileHeader: "mySPHHeader",
          },
          filter: {
            attributes: {
              category: "colorTokens",
            },
          },
        },
      ],
    },
    "scss/ttoken": {
      transformGroup: "scss",
      buildPath: "src/scss/",
      files: [
        {
          destination: `_ttokens.scss`,
          format: "ttFormat",
          filter: {
            attributes: {
              category: "tt",
            },
          },
          options: {
            outputReferences: true,
            fileHeader: "TTHeader",
          },
        },
      ],
    },
    "scss/all": {
      transformGroup: "scss",
      buildPath: "src/scss/",
      files: [
        {
          destination: `all.scss`,
          format: "scss/variables",
          options: {
            outputReferences: true,
            fileHeader: "mySPHHeader",
          },
        },
      ],
    },
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
