/*
 * @Author: shenxh
 * @Date: 2021-11-10 09:22:00
 * @LastEditors: shenxh
 * @LastEditTime: 2021-11-10 09:32:15
 * @Description: 路由
 */

const routes = [
  {
    label: '首页',
    path: '/home',
    value: 'home',
    icon: 'HomeOutlined',
    component: getComponent('home/Home')
  },
  {
    label: '我的',
    path: '/mine',
    value: 'mine',
    children: [
      {
        label: '收藏',
        path: 'star',
        value: 'star',
        icon: 'StarOutlined',
        component: getComponent('mine/star/Star')
      },
      {
        label: '信息',
        path: 'info/:userId',
        value: 'order-det',
        icon: 'IdcardOutlined',
        hide: true,
        component: getComponent('mine/info/Info')
      }
    ]
  }
];

function getComponent(path: string) {
  // babel@5 及之前的版本可以把 export 和 import 转成 node 的 module.exports 和 require
  // 但是 babel@6 版本开始不再把 export default 转成 node 的 module.exports
  // 所以使用 `require().default`
  return require(`../views/${path}`).default;
}

export default routes;
