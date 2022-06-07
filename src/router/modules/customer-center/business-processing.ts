/*
 * @Author: shenxh
 * @Date: 2021-10-25 10:48:37
 * @LastEditors: shenxh
 * @LastEditTime: 2022-06-07 10:23:59
 * @Description: 业务处理
 */

const routes = [
  {
    label: '业务处理',
    path: '/customer-center',
    value: 'customer-center',
    children: [
      {
        label: '收藏',
        path: 'business-processing',
        value: 'business-processing',
        icon: 'StarOutlined',
        component: getComponent('customer-center/business-processing')
      }
    ]
  }
];

function getComponent(path: string) {
  // babel@5 及之前的版本可以把 export 和 import 转成 node 的 module.exports 和 require
  // 但是 babel@6 版本开始不再把 export default 转成 node 的 module.exports
  // 所以使用 `require().default`
  return require(`../../../views/${path}`).default;
}

export default routes;
