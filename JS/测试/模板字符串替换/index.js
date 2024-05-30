function parserStr(str, obj) {
  let keys = Object.keys(obj)

  keys.forEach((key) => {
    str = str.replace(new RegExp(`{{${key}}}`, "g"), obj[key])
  })
  return str
}
const str = "{{name}}很厉name害{{name}}，才{{age}}岁"
const obj = { name: "jawil", age: "15" }
console.log(parserStr(str, obj))
