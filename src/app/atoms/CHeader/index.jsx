import React from 'react';
import { Row, Col, Space, Button, Image, Avatar, Dropdown, Typography, Menu, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LogoutOutlined, AlignLeftOutlined } from '@ant-design/icons';
import { updateMenu, updateDrawerMenu } from '../../modules/Dashboard/ducks/actions';

import Logo from '../../../assets/images/logo.svg';
import { getInitials } from '../../../utils/Helpers';

const { Text } = Typography;

export default ({ title }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  //redux state
  const menuStat = useSelector((state) => state.global?.menu);

  const logoutHandler = () => {
    history.push('/');
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={logoutHandler} type="link" className="btn-link" icon={<LogoutOutlined />}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  const onOverallMenuHandler = () => {
    dispatch(updateMenu(!menuStat));
    dispatch(updateDrawerMenu(true));
  };

  return (
    <Card bordered={false} className="c-header">
      <Row gutter={[24, 15]} align="middle">
        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
          <Space size={20} align="center" className="w-100 text-center pl-0">
            <Image className="logo" preview={false} alt="logo" src={Logo} onClick={() => history.push('/')} />
            <AlignLeftOutlined
              style={{ fontSize: '18px', paddingTop: '10px', color: 'cornflowerblue' }}
              onClick={onOverallMenuHandler}
            />
          </Space>
        </Col>
        <Col span={12} className="text-right" xs={24} sm={24} md={24} lg={12} xl={12}>
          <Space size={30} className="pl-0">
            <Dropdown className="userDropdown" overlay={menu} placement="bottomRight">
              <Space size={8}>
                <Avatar shape="square" className="user-image" size={35}>
                  {getInitials(title)}
                </Avatar>
                <Text className="user-text">{title}</Text>
              </Space>
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};
