import { Avatar, Flex } from 'antd';
import { Dropdown, MenuProps } from 'antd/lib';

import './UserProfile.scss';
// import { keycloakClient, useAuth } from '../../contexts/auth-context';

const UserProfile = ({ classname }) => {
//   const { userInfo } = useAuth();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <div>Profile</div>,
    },
    {
      key: '2',
      label: <div>Settings</div>,
    },
    {
      key: '3',
      label: (
        <div
        //   onClick={() => {
        //     keycloakClient.logout();
        //   }}
        >
          Logout
        </div>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft">
      <div className={'user-profile-container'}>
        <Avatar />
        <Flex className={'user-profile-info'} vertical={true}>
          <div className={'username'} color={'black'}>
            {/* {userInfo?.name} */}
            Мухамеджанова Мадина
          </div>
          <div className={'position'} color={'#6C6C6C'}>
            {/* {userInfo?.position || ''} */}
            UX/UI дизайнер
          </div>
        </Flex>
      </div>
    </Dropdown>
  );
};

export default UserProfile;
