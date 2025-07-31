import React from 'react';
import { getItemsByType } from '../data/menuData.js';
import MenuPage from '../components/MenuPage.jsx';

const Vegetarian = () => {
  const vegetarianItems = getItemsByType('vegetarian');

  return (
    <MenuPage
      type="vegetarian"
      title="Vegetarian Menu"
      icon="🥬"
      items={vegetarianItems}
    />
  );
};

export default Vegetarian; 