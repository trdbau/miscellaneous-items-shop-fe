export const SHOPPING_LIST_ITEMS = [
  {
    _id: '5f127565cab3ee1acec29264',
    name: 'Frye',
    price: '95.377',
    discountRate: '00.90',
    thumbnail: 'https://picsum.photos/200/300',
    images: [],
    stock: 10, // cái này là tồn kho nha
    category: [],
    rating: '',
    comments: [],
    memo: '',
    detail: '',
  },
  {
    _id: '5f1275652896fe1af9455933',
    name: 'Ball',
    price: '71.758',
    discountRate: '00.99',
    thumbnail: 'https://picsum.photos/200/300',
  },
  {
    _id: '5f127565676c06c14b052208',
    name: 'Delia',
    price: '69.675',
    discountRate: '00.93',
    thumbnail: 'https://picsum.photos/200/300',
  },
  {
    _id: '5f127565cccf8b1b1eb01906',
    name: 'Elisa',
    price: '54.509',
    discountRate: '00.97',
    thumbnail: 'https://picsum.photos/200/300',
  },
  {
    _id: '5f1275658ee4ca3993daf932',
    name: 'Holland',
    price: '87.396',
    discountRate: '00.98',
    thumbnail: 'https://picsum.photos/200/300',
  },
  {
    _id: '5f1275652e9c075abf23c0c9',
    name: 'Hamilton',
    price: '74.636',
    discountRate: '00.93',
    thumbnail: 'https://picsum.photos/200/300',
  },
  {
    _id: '5f127565869673a51f0f13ac',
    name: 'Knapp',
    price: '64.527',
    discountRate: '00.85',
    thumbnail: 'https://picsum.photos/200/300',
  },
];

export const CATEGORIES = [
  {
    title: 'Đồ chơi',
    query: 'do-choi-14135',
    children: [
      {
        title: 'Medicum Toy',
        query: 'medicum-toy',
      },
    ],
  },
  {
    title: 'Gấu bông - Gối',
    query: 'gau-bong-goi-47893',
    children: [
      {
        title: 'Gối chữ u',
        query: 'goi-chu-u-1234',
      },
    ],
  },
  {
    title: 'Văn phòng phẩm',
    query: 'van-phong-pham',
  },
  {
    title: 'Đồ gia dụng',
    query: 'do-da-dung',
  },
  {
    title: 'Du lịch',
    query: 'du-lich',
  },
  {
    title: 'Trang trí',
    query: 'trang-tri',
  },
];

export const ROUTES = {
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
};

export const UNAUTH_ICON_LIST = [
  {
    path: 'white-list',
    iconName: 'heart',
  },
  {
    path: 'shopping-cart',
    iconName: 'shopping-cart',
  },
];

export const COST_RANGE_SELECT = [
  {
    label: 'Giá dưới 100.000₫',
    range: {
      from: 0,
      to: 100000,
    },
  },
  {
    label: '100.000₫-200.000₫',
    range: {
      from: 100000,
      to: 200000,
    },
  },
  {
    label: '200.000₫-300.000₫',
    range: {
      from: 200000,
      to: 300000,
    },
  },
  {
    label: '300.000₫-500.000₫',
    range: {
      from: 300000,
      to: 500000,
    },
  },
  {
    label: 'Giá trên 500.000₫',
    range: {
      from: 500000,
    },
  },
];

export const SORT_BY_LIST = [
  {
    label: 'Tên A-Z',
    value: 'A-Z',
  },
  {
    label: 'Tên Z-A',
    value: 'Z-A',
  },
  {
    label: 'Giá thấp đến cao',
    value: '',
  },
  {
    label: 'Giá cao đến thấp',
    value: '',
  },
  {
    label: 'Hàng mới',
    value: 'new',
  },
];

export const LIST_IMAGES = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
];

export const LIST_COLOR = [
  'màu đỏ',
  'màu xanh',
  'màu vàng',
  'màu tím',
  'màu đen',
  'màu xanh lá cây',
  'màu vàng chuối',
];
