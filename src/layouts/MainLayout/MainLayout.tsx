import React from 'react';
import { Divider, Layout } from 'antd';

import UserProfile from '../../components/UserProfile/UserProfile';
import MainSection from '../../components/MainSection';
import NavBar from '../../components/NavBar';
import './MainLayout.scss';

const MainLayout: React.FC = () => {
  const { Header, Sider, Content } = Layout;

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider className={'aside-bar'} theme={'light'}>
        <NavBar />
      </Sider>
      <Layout>
        <Header>
          <Divider className={'user-profile-divider'} type={'vertical'} />
          <UserProfile />
        </Header>
        <Content className={'content'}>
          <MainSection />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
