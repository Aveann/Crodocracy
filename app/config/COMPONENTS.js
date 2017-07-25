const COMPONENTS = '../components/';
//HEADERS
const HEADERS = COMPONENTS + 'Headers/';

const HeaderGeneral = HEADERS + 'HeaderGeneral';
const HeaderNotifications = HEADERS + 'HeaderNotifications';

//TabBarIcon
const TabBarIcon = COMPONENTS + 'TabBarIcon';

module.exports = {
  HeaderGeneral : require('../components/Headers/HeaderGeneral'),
  HeaderNotifications : require('../components/Headers/HeaderNotifications'),
  TabBarIcon : require('../components/TabBarIcon'),
};
