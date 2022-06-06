/*
 * @Author: shenxh
 * @Date: 2021-10-25 10:48:37
 * @LastEditors: shenxh
 * @LastEditTime: 2021-10-25 16:47:01
 * @Description: 首页
 */

const routes = [
  {
    label: '首页',
    path: '/home',
    value: 'home',
    icon: 'HomeOutlined',
    component: getComponent('home/Home')
  }
];

function getComponent(path: string) {
  // babel@5 及之前的版本可以把 export 和 import 转成 node 的 module.exports 和 require
  // 但是 babel@6 版本开始不再把 export default 转成 node 的 module.exports
  // 所以使用 `require().default`
  return require(`../../views/${path}`).default;
}

export default routes;
