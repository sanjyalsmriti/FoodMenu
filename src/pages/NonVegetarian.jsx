import React from 'react';
import { getItemsByType } from '../data/menuData.js';
import MenuPage from '../components/MenuPage.jsx';

const NonVegetarian = () => {
  const nonVegetarianItems = getItemsByType('non-vegetarian');

  return (
    <MenuPage
      type="non-vegetarian"
      title="Non-Vegetarian Menu"
      icon="🍗"
      items={nonVegetarianItems}
    />
  );
};

export default NonVegetarian; 