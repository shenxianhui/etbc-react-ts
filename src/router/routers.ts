/*
 * @Author: shenxh
 * @Date: 2020-06-22 16:55:43
 * @LastEditors: shenxh
 * @LastEditTime: 2022-06-02 16:20:10
 * @Description: 路由配置
 */

const routes = [
  {
    label: '小程序',
    path: '/app',
    value: 'app',
    children: [
      {
        label: '商品管理',
        path: '/app/goods-manage',
        value: 'goods-manage',
        icon: 'HomeOutlined',
        component: getComponent('app/goods-manage/GoodsManage')
      },
      {
        label: '新增商品',
        path: '/app/goods-add',
        value: 'goods-add',
        icon: 'HomeOutlined',
        hide: true,
        component: getComponent('app/goods-manage/goods-det/GoodsAdd')
      },
      {
        label: '商品详情',
        path: '/app/goods-det/:goodsId',
        value: 'goods-det',
        icon: 'HomeOutlined',
        hide: true,
        component: getComponent('app/goods-manage/goods-det/GoodsDet')
      },
      {
        label: '分类管理',
        path: '/app/type-manage',
        value: 'type-manage',
        icon: 'HomeOutlined',
        component: getComponent('app/type-manage/TypeManage')
      },
      {
        label: '小程序码',
        path: '/app/qr-code',
        value: 'qr-code',
        component: getComponent('app/qr-code/QRCode')
      }
    ]
  },
  {
    label: '订单',
    path: '/order',
    value: 'order',
    children: [
      {
        label: '订单管理',
        path: '/order/order-manage',
        value: 'order-manage',
        component: getComponent('order/order-manage/OrderManage')
      },
      {
        label: '订单详情',
        path: '/order/order-det/:orderId',
        value: 'order-det',
        icon: 'HomeOutlined',
        hide: true,
        component: getComponent('order/order-manage/order-det/OrderDet')
      }
    ]
  },
  {
    label: '点餐系统',
    path: '/ordering-system',
    value: 'ordering-system',
    children: [
      {
        label: '即时菜单',
        path: '/ordering-system/instant-menu',
        value: 'instant-menu',
        component: getComponent('ordering-system/instant-menu/InstantMenu')
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

export { routes };
