import React from 'react';
import { getItemsByType } from '../data/menuData.js';
import MenuPage from '../components/MenuPage.jsx';

const Drinks = () => {
  const drinksItems = getItemsByType('drinks');

  return (
    <MenuPage
      type="drinks"
      title="Drinks Menu"
      icon="🥤"
      items={drinksItems}
    />
  );
};

export default Drinks; 