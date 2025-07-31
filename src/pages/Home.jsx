import React from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menuData.js';
import MenuCard from '../components/MenuCard.jsx';

const Home = () => {
  // Get featured items (first 3 from each category)
  const featuredVegetarian = menuData.filter(item => item.type === 'vegetarian').slice(0, 3);
  const featuredNonVeg = menuData.filter(item => item.type === 'non-vegetarian').slice(0, 3);
  const featuredDrinks = menuData.filter(item => item.type === 'drinks').slice(0, 3);

  const categories = [
    {
      title: 'Vegetarian',
      icon: '🥬',
      path: '/vegetarian',
      items: featuredVegetarian,
      color: 'green'
    },
    {
      title: 'Non-Vegetarian',
      icon: '🍗',
      path: '/non-vegetarian',
      items: featuredNonVeg,
      color: 'red'
    },
    {
      title: 'Drinks',
      icon: '🥤',
      path: '/drinks',
      items: featuredDrinks,
      color: 'blue'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Food Menu
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Discover delicious dishes from around the world
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <span className="text-2xl">{category.icon}</span>
              <span>{category.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Featured Categories
        </h2>
        
        {categories.map((category) => (
          <div key={category.path} className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              <Link
                to={category.path}
                className="btn-primary"
              >
                View All
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Special Offers Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          🎉 Special Offers Available!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">🥬</div>
            <h3 className="text-xl font-semibold mb-2">Vegetarian</h3>
            <p className="opacity-90">Up to 30% off on selected items</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🍗</div>
            <h3 className="text-xl font-semibold mb-2">Non-Vegetarian</h3>
            <p className="opacity-90">Buy 2 Get 1 Free on weekends</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🥤</div>
            <h3 className="text-xl font-semibold mb-2">Drinks</h3>
            <p className="opacity-90">50% off during happy hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 