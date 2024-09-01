import { ConfigProvider, Flex } from 'antd';
import 'antd/dist/reset.css';
import ru_Ru from 'antd/lib/locale/ru_RU';
import 'dayjs/locale/ru';
// import dayjs from 'dayjs';
// import utc from 'dayjs/plugin/utc'; // Import the UTC plugin for dayjs
// import timezone from 'dayjs/plugin/timezone';
// import updateLocale from 'dayjs/plugin/updateLocale';
// import customParseFormat from 'dayjs/plugin/customParseFormat';
// import localizedFormat from 'dayjs/plugin/localizedFormat';
// import LocaleProvider from 'antd/lib/locale';

// import { useAuth } from './contexts/auth-context';
import { NoDataIcon } from '../../assets/icons/SvgIcons';
import { mainTheme } from '../../constants/MainTheme';
import MainLayout from '../../layouts/MainLayout';
import './App.scss';

// dayjs.extend(updateLocale);
// dayjs.extend(customParseFormat);
// dayjs.extend(localizedFormat);
// dayjs.extend(utc);
// dayjs.extend(timezone);

// dayjs.updateLocale('ru_Ru', { weekStart: 0 });
// dayjs.locale('ru');
// dayjs.tz.guess();

const App = () => {
  // const {token} = useAuth();

  return (
    <>
      {
        // token &&
        <ConfigProvider
          locale={ru_Ru}
          renderEmpty={() => (
            <>
              <Flex
                vertical={true}
                justify={'center'}
                align={'center'}
                style={{ height: '150px' }}
              >
                <NoDataIcon />
                <div style={{ fontSize: '14px' }}>Нет данных</div>
              </Flex>
            </>
          )}
          theme={mainTheme}
        >
          <MainLayout />
        </ConfigProvider>
      }
    </>
  );
};

export default App;
