import React, { useState, useEffect } from 'react';
import { Row, Col, Menu, Card, Image } from 'antd';
import { useLocation } from 'react-router-dom';


//Assets
import Apps from '../../../assets/images/apps.svg';
import Graph from '../../../assets/images/graph.svg';
import Monitor from '../../../assets/images/monitor.svg';
import Pie from '../../../assets/images/pie.svg';
import Switch from '../../../assets/images/switch.svg';


// Routing List
import RoutingList from '../../../routing/config/RoutingList';


export default (props) => {
  const [menuList, setMenuList] = useState([]);
  const location = useLocation().pathname;
  const selected = location.split('/').length > 2 ? `/${location.split('/')[1]}/${location.split('/')[2]}` : location;
  const IconList = {
    Apps,
    Graph,
    Monitor,
    Pie,
    Switch,
  };


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
    <Card bordered={false} className="navBar navBarResponse">
      <Row gutter={[20, 15]}>
        <Col span={24}>
          <Card bordered={false} className="transparent-card" style={{ height: 'calc(100vh - 127px)' }}>
            <Menu mode="vertical" defaultSelectedKeys={[selected]} className="main-menu">
              {RoutingList.map((val, key) => (
                <Menu.Item
                  key={val.path}
                  className=""
                  icon={<Image preview={false} width={20} src={IconList[val.icon]} />}
                ></Menu.Item>
              ))}
            </Menu>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};
