import React, { useState, useMemo } from 'react';
import MenuCard from './MenuCard.jsx';

const MenuPage = ({ type, title, icon, items }) => {
  const [selectedOffer, setSelectedOffer] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get unique offers and categories for filtering
  const offers = useMemo(() => {
    const uniqueOffers = [...new Set(items.map(item => item.offer))];
    return ['all', ...uniqueOffers];
  }, [items]);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(items.map(item => item.category))];
    return ['all', ...uniqueCategories];
  }, [items]);

  // Filter items based on selected filters
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const offerMatch = selectedOffer === 'all' || item.offer === selectedOffer;
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
      return offerMatch && categoryMatch;
    });
  }, [items, selectedOffer, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-4xl">{icon}</span>
          <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our delicious {title.toLowerCase()} menu with amazing offers and fresh ingredients.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Offer Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Offer
            </label>
            <select
              value={selectedOffer}
              onChange={(e) => setSelectedOffer(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {offers.map((offer) => (
                <option key={offer} value={offer}>
                  {offer === 'all' ? 'All Offers' : offer}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedOffer !== 'all' || selectedCategory !== 'all') && (
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedOffer !== 'all' && (
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                Offer: {selectedOffer}
                <button
                  onClick={() => setSelectedOffer('all')}
                  className="ml-2 text-primary-600 hover:text-primary-800"
                >
                  ×
                </button>
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Category: {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="ml-2 text-green-600 hover:text-green-800"
                >
                  ×
                </button>
              </span>
            )}
            <button
              onClick={() => {
                setSelectedOffer('all');
                setSelectedCategory('all');
              }}
              className="text-gray-600 hover:text-gray-800 text-sm underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing {filteredItems.length} of {items.length} items
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => {
              setSelectedOffer('all');
              setSelectedCategory('all');
            }}
            className="btn-secondary text-sm"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Menu Items Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🍽️</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No items found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your filters to see more items.
          </p>
          <button
            onClick={() => {
              setSelectedOffer('all');
              setSelectedCategory('all');
            }}
            className="btn-primary"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuPage; 