import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Config
import { ROOT } from '../configs/routeNames';

//Styles
import '../assets/styles/antd.less';
import '../assets/styles/styles.scss';

//Store
import store from '../redux/store';

//Pages
import Pages from './Pages';

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path={ROOT} component={Pages} />
      </Switch>
    </Router>
  </Provider>
);
export default Root;
