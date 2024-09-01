import React from 'react';
import { Tabs } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';
import './MainApplicationLayout.scss';
import History from '../../components/History';

const MainApplicationLayout: React.FC = ({ mainSection, applicationId }) => {
  return (
    <>
      <Tabs type={'card'} size={'large'}>
        <TabPane tab={'Основная информация'} key={'application'}>
          {mainSection}
        </TabPane>
        <TabPane tab={'История процесса'} key={'history'}>
          <History applicationId={applicationId} />
        </TabPane>
      </Tabs>
    </>
  );
};

export default MainApplicationLayout;
