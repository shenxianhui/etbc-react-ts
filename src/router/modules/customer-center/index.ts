/*
 * @Description: 客户中心
 * @Author: shenxh
 * @Date: 2022-06-02 14:49:05
 * @LastEditors: shenxh
 * @LastEditTime: 2022-06-07 10:25:16
 */

const files: any = require.context('.', true, /\.ts$/);

let modules: any[] = [];

files.keys().forEach((key: string) => {
  if (key === './index.ts') return;

  modules = modules.concat(files(key).default); // 读取出文件中的default模块
});

export default modules; // 抛出一个期待的结构的数组
