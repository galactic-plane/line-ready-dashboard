export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'chart',
  },
  {
    text: 'Client',
    path: '/client',
    icon: 'user',
  },
  {
    text: 'API Data',
    icon: 'columnchooser',
    items: [
      {
        text: 'Profiles',
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
