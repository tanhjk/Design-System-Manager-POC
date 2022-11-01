const StyleDictionary = require("style-dictionary")
const tokens = require("./tokens")
const path = require("path")

const kebabize = str => {
  return str
    .split("")
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter
    })
    .join("")
}

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

        return `$${token.name} : ${value};`
      })
      .join(`\n`)
  },
})

StyleDictionary.registerFormat({
  name: "ctBase",
  formatter: function ({ dictionary }) {
    const objToken = dictionary.tokens.colorTokens.mysph.light
    var tokenList = ""

    for (let tokenNm in objToken) {
      dictionary.allTokens.map(tkn => {
        if (tkn.name === objToken[tokenNm].name) {
          let styles = tkn.value
          if (styles !== "") {
            if (dictionary.usesReference(tkn.original.value)) {
              // Note: make sure to use `token.original.value` because
              // `token.value` is already resolved at this point.
              const refs = dictionary.getReferences(tkn.original.value)
              refs.forEach(ref => {
                styles = styles.replace(ref.value, function () {
                  return `$${ref.name}`
                })
              })
            }
            // console.log(objToken[tokenNm].name)
            tokenList += `$${kebabize(tokenNm)}: '${kebabize(tokenNm)}'; \n`
          }
        }
      })
    }
    return tokenList
  },
})

StyleDictionary.registerFormat({
  name: "ctFormat",
  formatter: function ({ dictionary }) {
    const objToken = dictionary.tokens.colorTokens.mysph.standard
    let tokenList = ``
    for (let tokenNm in objToken) {
      console.log(tokenNm)
      tokenList += `$${kebabize(tokenNm)}: '${kebabize(tokenNm)}';\n`
    }
    var strTokens = `$ctheme: ( \n`
    const obj = dictionary.tokens.colorTokens

    for (let x in obj) {
      // console.log(x, "- ", obj[x])
      let brands = obj[x]

      for (let theme in brands) {
        let cts = brands[theme]
        strTokens += `\t${x}-${theme}: (\n`
        for (let ctk in cts) {
          // console.log(cts[ctk].name)
          dictionary.allTokens.map(tkn => {
            if (tkn.name === cts[ctk].name) {
              let styles = tkn.value

              if (styles !== "") {
                if (dictionary.usesReference(tkn.original.value)) {
                  // Note: make sure to use `token.original.value` because
                  // `token.value` is already resolved at this point.
                  const refs = dictionary.getReferences(tkn.original.value)
                  refs.forEach(ref => {
                    styles = styles.replace(ref.value, function () {
                      return `$${ref.name}`
                    })
                  })
                }
                strTokens += `\t\t ${kebabize(
                  tkn.attributes.subitem
                )} : ${styles}, \n`
              }
            }
          })
        }
        strTokens += `  ), \n`
      }
    }
    strTokens += `); \n`
    return tokenList + "\n\n" + strTokens
  },
})

StyleDictionary.registerFormat({
  name: "ttFormat",
  formatter: function ({ dictionary }) {
    var strTokens = `$tThemes: ( \n`
    const obj = dictionary.tokens.tt

    for (let x in obj) {
      // console.log(x, "- ", obj[x])
      strTokens += `\t${x}: (\n`
      dictionary.allTokens.map(tkn => {
        if (tkn.path[1] === x) {
          strTokens += `\t\t'${tkn.attributes.item}' :( \n`
          let styles = tkn.value
          for (let style in styles) {
            let styleVal = styles[style]

            if (styleVal !== "") {
              if (dictionary.usesReference(tkn.original.value)) {
                // Note: make sure to use `token.original.value` because
                // `token.value` is already resolved at this point.
                const refs = dictionary.getReferences(tkn.original.value)
                refs.forEach(ref => {
                  styleVal = styleVal.replace(ref.value, function () {
                    return `$${ref.name}`
                  })
                })
              }

              strTokens += `\t\t\t ${kebabize(style)} : ${styleVal}, \n`
            }
          }
          strTokens += `    ), \n`
        }
      })
      strTokens += `  ), \n`
    }
    strTokens += `); \n`
    // console.log(strTokens)
    return strTokens
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
    "scss/colorBaseToken": {
      transformGroup: "scss",
      buildPath: "src/scss/",
      files: [
        {
          destination: `_color-base-tokens.scss`,
          format: "ctBase",
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
          format: "ctFormat",
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
