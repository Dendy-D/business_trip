import { ThemeConfig } from 'antd';

export const mainTheme: ThemeConfig = {
  cssVar: true,
  components: {
    Layout: {
      lightSiderBg: 'white',
      // HEADER THEME
      headerPadding: 0,
      headerBg: 'white',
      headerHeight: 61,
    },
    Menu: {
      subMenuItemBg: 'white',
      itemBorderRadius: 20,
      itemBg: 'white',
      itemSelectedColor: '#2A2A2A',
      itemActiveBg: '#B6DAB2',
      itemHoverBg: '#B6DAB270',
      itemSelectedBg: '#B6DAB2',
    },
    Table: {
      headerBg: 'transparent',
      rowHoverBg: '#B6DAB2',
    },
    Input: {
      colorBgBase: '#F9F9F9',
      colorBgContainerDisabled: 'white',
    },
    Select: {
      colorBgBase: '#F9F9F9',
      selectorBg: '#F9F9F9',
      optionSelectedBg: '#B6DAB240',
      colorBgContainerDisabled: 'white',
    },
    Tabs: {
      itemSelectedColor: '#000000',
      itemColor: '#2A2A2A',
      itemHoverColor: '#000000',
    },
  },
  token: {},
};
