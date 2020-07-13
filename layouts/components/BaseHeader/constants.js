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
      path: 'shopping',
      iconName: '001-search',
    },
    {
      path: 'white-list',
      iconName: '002-heart',
    },
    {
      path: 'shopping',
      iconName: '003-shopping-cart',
    },
  ],
};
