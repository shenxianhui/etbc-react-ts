/*
 * @Author: shenxh
 * @Date: 2021-10-25 11:35:32
 * @LastEditors: shenxh
 * @LastEditTime: 2021-10-25 15:29:39
 * @Description: 信息
 */

import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class MyInfo extends Component {
  static defaultProps = {};

  constructor(props: object) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return <Fragment>信息</Fragment>;
  }
}

// @ts-ignore
export default withRouter(MyInfo);
