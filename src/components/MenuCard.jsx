import React from 'react';

const MenuCard = ({ item }) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop';
          }}
        />
        <div className="absolute top-2 right-2">
          <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {item.price}
          </span>
        </div>
        <div className="absolute bottom-2 left-2">
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {item.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-600 text-sm">🎉</span>
            <span className="text-yellow-800 text-sm font-medium">{item.offer}</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MenuCard; 