export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'chart',
  },
  {
    text: 'API Data',
    icon: 'columnchooser',
    items: [
      {
        text: 'Fish Profiles',
        icon: 'card',
        path: '/profile',
      },
      {
        text: 'US Cities',
        icon: 'map',
        path: '/cities',
      },
    ],
  },
];
