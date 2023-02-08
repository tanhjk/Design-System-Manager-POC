const StyleDictionary = require("style-dictionary")
const tokens = require("./tokens")
const path = require("path")
const fs = require("fs")
var AdmZip = require("adm-zip")

var dsm_dir = "src/scss/dsm/"

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
      token.attributes.category === "spacing" ||
      token.attributes.category === "gradients"
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
        const ttVal = token.value
        value =
          ttVal.x +
          " " +
          ttVal.y +
          " " +
          ttVal.blur +
          " " +
          ttVal.spread +
          " " +
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
            // console.log(style)

            let styleVal = styles[style]

            // console.log(styleVal)
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
              style = style.replace("textCase", "textTransform")

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

StyleDictionary.registerFormat({
  name: "ttmFormat",
  formatter: function ({ dictionary }) {
    var strTokens = `$tmThemes: ( \n`
    const obj = dictionary.tokens.ttm

    for (let x in obj) {
      // console.log(x, "- ", obj[x])
      strTokens += `\t${x}: (\n`
      dictionary.allTokens.map(tkn => {
        if (tkn.path[1] === x) {
          strTokens += `\t\t'${tkn.attributes.item}' :( \n`
          let styles = tkn.value
          for (let style in styles) {
            // console.log(style)

            let styleVal = styles[style]

            // console.log(styleVal)
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
              style = style.replace("textCase", "textTransform")

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
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/px",
        "color/css",
      ],
      buildPath: dsm_dir,
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
      buildPath: dsm_dir,
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
      buildPath: dsm_dir,
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
      buildPath: dsm_dir,
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
      buildPath: dsm_dir,
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
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/px",
        "color/css",
      ],
      buildPath: dsm_dir,
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
    "scss/tmtoken": {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/px",
        "color/css",
      ],
      buildPath: dsm_dir,
      files: [
        {
          destination: `_tmtokens.scss`,
          format: "ttmFormat",
          filter: {
            attributes: {
              category: "ttm",
            },
          },
          options: {
            outputReferences: true,
            fileHeader: "TTHeader",
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
packageDSM()

// creating archives
function packageDSM() {
  var zip = new AdmZip()

  var dirPath = path.join(__dirname, dsm_dir)
  fs.readdir(dirPath, (err, files) => {
    files.forEach(item => {
      // add local file
      zip.addLocalFile(dsm_dir + item)

      // console.log("filename", item)
    })

    // get everything as a buffer
    var willSendthis = zip.toBuffer()

    if (fs.existsSync("static/dl/luna-v1.zip")) {
      fs.unlinkSync("static/dl/luna-v1.zip")
    }
    zip.writeZip(/*target file name*/ "static/dl/luna-v1.zip")
  })
}
