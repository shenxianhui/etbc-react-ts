import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import files from './modules';

let routeArr: any = [];

getRoute(files);
function getRoute(routes: any, parentPath: string = '') {
  if (!routes.length) return;

  routes.forEach((route: any, index: number) => {
    const parentPathTmp = parentPath ? parentPath + '/' + route.path : route.path;

    if (route.children && route.children.length) {
      getRoute(route.children, parentPathTmp);
    } else {
      routeArr.push(<Route path={parentPathTmp} component={route.component} key={index} />);
    }
  });
}

const Router = () => {
  return (
    <HashRouter>
      {/* 重定向 */}
      <Redirect to="/home" />
      <Switch>{routeArr}</Switch>
    </HashRouter>
  );
};

export default Router;
