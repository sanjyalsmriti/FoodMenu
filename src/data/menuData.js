export const menuData = [
  // Vegetarian Items
  {
    id: 1,
    name: "Paneer Tikka",
    type: "vegetarian",
    offer: "20% off on Thursdays",
    description: "Spicy grilled paneer served with mint chutney.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    price: "RS 120.99",
    category: "appetizer"
  },
  {
    id: 2,
    name: "Dal Makhani",
    type: "vegetarian",
    offer: "Buy 1 Get 1 Free on Weekends",
    description: "Creamy black lentils slow-cooked with aromatic spices.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    price: "RS 100.99",
    category: "main"
  },
  {
    id: 3,
    name: "Palak Paneer",
    type: "vegetarian",
    offer: "15% off for Students",
    description: "Fresh spinach curry with soft paneer cubes.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    price: "RS 110.99",
    category: "main"
  },
  {
    id: 4,
    name: "Vegetable Biryani",
    type: "vegetarian",
    offer: "Free Dessert with Order",
    description: "Fragrant basmati rice cooked with fresh vegetables and spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d4a9?w=400&h=300&fit=crop",
    price: "RS 140.99",
    category: "main"
  },
  {
    id: 5,
    name: "Gulab Jamun",
    type: "vegetarian",
    offer: "30% off on Diwali",
    description: "Sweet milk dumplings soaked in rose-flavored syrup.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    price: "RS 6.099",
    category: "dessert"
  },

  // Non-Vegetarian Items
  {
    id: 6,
    name: "Chicken Tikka Masala",
    type: "non-vegetarian",
    offer: "25% off on Mondays",
    description: "Tender chicken in rich tomato-based curry sauce.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    price: "RS 160.99",
    category: "main"
  },
  {
    id: 7,
    name: "Butter Chicken",
    type: "non-vegetarian",
    offer: "Free Naan with Order",
    description: "Creamy tomato-based curry with tender chicken pieces.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    price: "RS 170.99",
    category: "main"
  },
  {
    id: 8,
    name: "Lamb Rogan Josh",
    type: "non-vegetarian",
    offer: "20% off for Seniors",
    description: "Slow-cooked lamb in aromatic Kashmiri spices.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    price: "RS 190.99",
    category: "main"
  },
  {
    id: 9,
    name: "Fish Curry",
    type: "non-vegetarian",
    offer: "Buy 2 Get 1 Free",
    description: "Fresh fish cooked in tangy coconut-based curry.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    price: "RS 180.99",
    category: "main"
  },
  {
    id: 10,
    name: "Chicken Biryani",
    type: "non-vegetarian",
    offer: "Free Raita with Order",
    description: "Layered rice dish with tender chicken and aromatic spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d4a9?w=400&h=300&fit=crop",
    price: "RS 150.99",
    category: "main"
  },

  // Drinks
  {
    id: 11,
    name: "Mango Lassi",
    type: "drinks",
    offer: "50% off on Happy Hours (3-6 PM)",
    description: "Sweet and creamy mango yogurt drink.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
    price: "RS 4.099",
    category: "beverage"
  },
  {
    id: 12,
    name: "Masala Chai",
    type: "drinks",
    offer: "Free Refill",
    description: "Traditional Indian spiced tea with milk.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
    price: "RS 3.099",
    category: "beverage"
  },
  {
    id: 13,
    name: "Rose Milk",
    type: "drinks",
    offer: "Buy 1 Get 1 Free on Weekends",
    description: "Refreshing milk flavored with rose essence.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
    price: "RS 5.099",
    category: "beverage"
  },
  {
    id: 14,
    name: "Thandai",
    type: "drinks",
    offer: "30% off on Holi",
    description: "Traditional cold milk drink with nuts and spices.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
    price: "RS 6.099",
    category: "beverage"
  },
  {
    id: 15,
    name: "Coconut Water",
    type: "drinks",
    offer: "Free with Any Main Course",
    description: "Fresh and natural coconut water.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
    price: "RS 3.099",
    category: "beverage"
  }
];

export const getItemsByType = (type) => {
  return menuData.filter(item => item.type === type);
};

export const getOffersByType = (type) => {
  const items = getItemsByType(type);
  const offers = [...new Set(items.map(item => item.offer))];
  return offers;
}; 