/*
 * @Author: shenxh
 * @Date: 2021-10-25 15:40:01
 * @LastEditors: shenxh
 * @LastEditTime: 2021-10-25 15:43:32
 * @Description: 首页
 */

import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  static defaultProps = {};

  constructor(props: object) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <Fragment>首页</Fragment>
    );
  }
}

// @ts-ignore
export default withRouter(Home);
