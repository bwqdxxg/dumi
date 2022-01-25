export default {
  target: 'node',
  cjs: { type: 'babel', lazy: true },
  disableTypeCheck: false, // 是否禁用类型检测。注意，该配置开启后 babel 模式下将不会生成 TypeScript 类型定义
  // extractCSS: true, // 配置是否提取 css 为单独文件
  lessInBabelMode: true // 在 babel 模式下做 less 编译，基于 gulp-less，默认不开启
};
