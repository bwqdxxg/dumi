const glob = require("glob-promise");
const fs = require("fs");

/** 将lib中所有css合并到dist */
async function cssPush() {
  const outDir = "lib";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  const files = await glob.promise("lib/**/*.css");
  const outList = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i].replace(/\\/g, "/");
    const fileContent = fs.readFileSync(file);
    if (fileContent) outList.push(fileContent);
  }
  await fs.promises.writeFile(outDir + "/index.css", outList.join("\n"));
}

/** 删除/恢复 指定样式表第一行 */
function cssRemove(notes) {
  const filePath = __dirname + '/../src/Editor/core/style/index.less';
  const file = fs.readFileSync(filePath);
  if (!file) return;
  let fileContent = file.toString();
  if (notes) fileContent = '// ' + fileContent;
  else fileContent = fileContent.slice(3, fileContent.length);
  fs.writeFileSync(filePath, fileContent);
}

/** 修改tsConfig */
function setTsConfig(es5) {
  const filePath = __dirname + '/../tsconfig.json';
  const file = fs.readFileSync(filePath);
  if (!file) return;
  let fileContent = file.toString();
  if (es5) {
    fileContent = fileContent.replace(/"target": "ESNext"/g, '"target": "ES5"')
    fileContent = fileContent.replace(/"module": "ESNext"/g, '"module": "CommonJS"')
  } else {
    fileContent = fileContent.replace(/"target": "ES5"/g, '"target": "ESNext"')
    fileContent = fileContent.replace(/"module": "CommonJS"/g, '"module": "ESNext"')
  }
  fs.writeFileSync(filePath, fileContent);
}

/** 将lib中所有js引入样式的行删除 */
async function cssRequireRemove() {
  const files = await glob.promise("lib/**/*.js");
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    let fileContent = fs.readFileSync(file);
    if (fileContent) {
      fileContent = fileContent.toString().replace(/(require\(\"\.\/)([\/a-z]+)(\.less\"\)\;)/g, '// less');
      fs.writeFileSync(file, fileContent);
    }
  }
}

function start() {
  const methods = { cssPush, cssRemove, setTsConfig, cssRequireRemove };
  const arguments = process.argv.splice(2);
  const type = arguments[0];
  if (!methods[type]) return;
  methods[type](arguments[1]);
}

start();
