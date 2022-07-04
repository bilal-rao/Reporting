import React from 'react';
import { Layout, Card, Spin, Drawer, Space } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { CloseCircleFilled } from '@ant-design/icons';

//Components
import Navigation from '../../molecules/Navigation';
import ResponsiveNav from '../../molecules/ResponsiveNav';
import CHeader from '../../atoms/CHeader';
import { updateDrawerMenu } from '../../modules/Dashboard/ducks/actions';

const { Content, Sider } = Layout;
const antIcon = <LoadingOutlined spin />;

export default (props) => {
  const dispatch = useDispatch();
  const isBigScreen = useMediaQuery({ query: '(min-width: 1650px)' });
  const isSmallScreen = useMediaQuery({ query: '(min-width:1170px)' });
  const isMobile = useMediaQuery({ query: `(min-width: 480px)` });
  const menuStat = useSelector((state) => state.global.menu);
  const drawerMenu = useSelector((state) => state.global.drawer_menu);
  return (
    <Spin indicator={antIcon} size="large" spinning={props.load}>
      <Layout>
        <CHeader title="John Doe" />
        <Layout>
          {isSmallScreen ? (
            <Sider trigger={null} width={isBigScreen ? 280 : 240} collapsedWidth={90} collapsible collapsed={menuStat}>
              <Card className="side-card" bordered={false}>
                <Card className="sidePanel" bordered={false}>
                  {menuStat ? <ResponsiveNav /> : <Navigation />}
                </Card>
              </Card>
            </Sider>
          ) : (
            <Drawer
              className="drawer-style"
              placement="left"
              visible={drawerMenu}
              closeIcon={null}
              width={isMobile ? '40%' : '100%'}
              extra={
                <Space size={10}>
                  <CloseCircleFilled
                    onClick={() => dispatch(updateDrawerMenu(false))}
                    style={{
                      position: 'absolute',
                      top: '6px',
                      right: '7px',
                      justifyContent: 'center',
                      fontSize: '22px',
                      display: 'block',
                      zIndex: 1,
                    }}
                  />
                </Space>
              }
            >
              <Navigation />
            </Drawer>
          )}

          <Layout className="base-layout">
            <Content>
              <Card
                bordered={false}
                style={{ overflowX: 'hidden', background: 'transparent', height: 'calc(100vh - 145px)' }}
                bodyStyle={{ padding: 0 }}
              >
                {props.children}
              </Card>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Spin>
  );
};
