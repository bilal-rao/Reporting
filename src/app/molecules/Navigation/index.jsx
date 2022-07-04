import React, { useState, useEffect } from 'react';
import { Row, Col, Menu, Card, Image } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Routing List
import RoutingList from '../../../routing/config/RoutingList';

//Assets
import Apps from '../../../assets/images/apps.svg';
import Graph from '../../../assets/images/graph.svg';
import Monitor from '../../../assets/images/monitor.svg';
import Pie from '../../../assets/images/pie.svg';
import Switch from '../../../assets/images/switch.svg';

//Actions
import { updateDrawerMenu } from '../../modules/Dashboard/ducks/actions';

const IconList = {
  Apps,
  Graph,
  Monitor,
  Pie,
  Switch,
};
export default (props) => {
  const dispatch = useDispatch();
  const [menuList, setMenuList] = useState([]);
  const location = useLocation().pathname;

  useEffect(() => {
    ModifyJson(RoutingList);
  }, []);

  const ModifyJson = (data) => {
    var result = data.reduce(function (r, a) {
      if (a.parent) {
        r[a['menu']] = r[a['menu']] || [];
        if (a.submenu) {
          r[a['menu']].push(a);
        } else {
          r[a['menu']] = a;
        }
      }
      return r;
    }, Object.create(null));
    setMenuList(result);
  };

  return (
    <Card bordered={false} className="navBar">
      <Row gutter={[30, 24]}>
        <Col span={24}>
          <Card bordered={false} className="transparent-card" style={{ height: 'calc(100vh - 127px)' }}>
            <Menu mode="inline" className="main-menu">
              {RoutingList.map((val, key) => {
                return (
                  <Menu.Item
                    key={val.path}
                    className="menu-item"
                    icon={<Image width={20} src={IconList[val.icon]} />}
                    onClick={() => dispatch(updateDrawerMenu(false))}
                  >
                    <Link to={val.path}>{val.menu}</Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};
