
const titles = {
  DASHBOARD: 'Dashboard',
  ACCOUNTMANAGMENT: 'Application',
};

export default [
  {
    component: 'Application',
    path: '/application',
    title: titles.DASHBOARD,
    menu: 'Dashbaord',
    icon: 'Apps',
    parent: true,
  },
  {
    icon: 'Graph',
    component: 'Application',
    path: '/account-management',
    title: titles.ACCOUNTMANAGMENT,
    menu: 'Account Managment',
    parent: true,
  },
  {
    icon: 'Monitor',
    component: 'Members',
    path: '/members',
    title: titles.MEMBERMANAGMENT,
    key: 'member_managment',
    menu: 'Member Managment',
    parent: true,
  },
  {
    icon: 'Pie',
    component: 'Members',
    path: '/',
    title: titles.MEMBERMANAGMENT,
    key: 'report_managment',
    menu: 'Reports',
    parent: true,
  },
  {
    icon: 'Switch',
    component: 'Switch',
    path: '/account',
    title: titles.MEMBERMANAGMENT,
    key: 'account',
    menu: 'Switch',
    parent: true,
  },
];
