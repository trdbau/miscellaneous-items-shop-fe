export default {
  ROUTES: {
    SHOP: {
      label: 'Shop',
      value: '/shop',
      children: [
        { label: 'Quần áo' },
        { label: 'Quần áo' },
        { label: 'Quần áo' },
        { label: 'Quần áo' },
        { label: 'Quần áo' },
      ],
    },
    ABOUT: {
      label: 'About',
      value: '/about',
    },
  },
  UNAUTH_ICON_LIST: [
    {
      path: 'white-list',
      iconName: 'heart',
    },
    {
      path: 'shopping',
      iconName: 'shopping-cart',
    },
  ],
};
