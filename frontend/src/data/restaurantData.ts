export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

// Initial static menu data
export const restaurantMenus: { [key: string]: MenuItem[] } = {
  '1': [ // KK Green
    {
      id: '1-1',
      name: 'Mnchet wot',
      description: 'Juicy chicken stew with spiced berbere sauce',
      price: 88.99,
      image: '../public/1-1.jfif',
      category: 'MAIN'
    },
    {
      id: '1-2',
      name: 'Tibs',
      description: 'Spicy sautéed meat with onions and peppers',
      price: 12.99,
      image: '../public/1-2.jfif',
      category: 'APPETIZER'
    },
    {
      id: '1-3',
      name: 'Dirkosh Firfif',
      description: 'Crispy Injera slices with seasoning',
      price: 4.99,
      image: '../public/1-3.jfif',
      category: 'SIDE'
    }
  ],
  '2': [ // KK Yellow
    {
      id: '2-1',
      name: 'Shiro',
      description: 'Spiced chickpea stew served with injera',
      price: 9.99,
      image: '../public/2-1.jfif',
      category: 'MAIN'
    },
    {
      id: '2-2',
      name: 'Atkilt Alicha Wot',
      description: 'Mildly spiced cabbage, carrots, and potatoes',
      price: 11.99,
      image: '../public/2-2.jfif',
      category: 'MAIN'
    }
  ],
  '3': [ // Sew Sabi
    {
      id: '3-1',
      name: 'Dulet',
      description: 'Minced raw beef seasoned with spices and butter',
      price: 14.99,
      image: '../public/3-1.jfif',
      category: 'MAIN'
    },
    {
      id: '3-2',
      name: 'Fetira',
      description: 'Traditional pan-baked Ethiopian flatbread with honey',
      price: 3.99,
      image: '../public/3-2.jfif',
      category: 'SIDE'
    }
  ],
  '4': [ // Kibnesh
    {
      id: '4-1',
      name: 'Chechebsa',
      description: 'Spiced shredded flatbread with butter and berbere',
      price: 12.99,
      image: '../public/4-1.jfif',
      category: 'MAIN'
    },
    {
      id: '4-2',
      name: 'Pasta Be Siga',
      description: 'Spaghetti with Ethiopian-style meat sauce',
      price: 13.99,
      image: '../public/4-2.jfif',
      category: 'MAIN'
    }
  ],
  '5': [ // Teachers lounge
    {
      id: '5-1',
      name: 'Gomen Besiga',
      description: 'Collard greens cooked with spiced meat',
      price: 8.99,
      image: '../public/5-1.jfif',
      category: 'MAIN'
    },
    {
      id: '5-2',
      name: 'Misir Wat',
      description: 'Red lentil stew with a rich berbere flavor',
      price: 4.99,
      image: '../public/5-2.jfif',
      category: 'APPETIZER'
    }
  ],
  '6': [ // Workers Lounge
    {
      id: '6-1',
      name: 'Firfir',
      description: 'Shredded injera mixed with spicy stew',
      price: 7.99,
      image: '../public/6-1.jfif',
      category: 'MAIN'
    },
    {
      id: '6-2',
      name: 'Azifa',
      description: 'Lentil salad with mustard, onions, and chili',
      price: 5.99,
      image: '../public/6-2.jfif',
      category: 'SIDE'
    }
  ]
};

// Function to add a new menu item
export const addMenuItem = (restaurantId: string, item: Omit<MenuItem, 'id'>) => {
  const restaurantMenu = restaurantMenus[restaurantId] || [];
  const newId = `${restaurantId}-${restaurantMenu.length + 1}`;
  const newItem = { ...item, id: newId };
  restaurantMenus[restaurantId] = [...restaurantMenu, newItem];
  return newItem;
};

// Function to get menu items for a restaurant
export const getMenuItems = (restaurantId: string) => {
  return restaurantMenus[restaurantId] || [];
}; 