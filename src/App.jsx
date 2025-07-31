import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './pages/Home.jsx';
import Vegetarian from './pages/Vegetarian.jsx';
import NonVegetarian from './pages/NonVegetarian.jsx';
import Drinks from './pages/Drinks.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vegetarian" element={<Vegetarian />} />
            <Route path="/non-vegetarian" element={<NonVegetarian />} />
            <Route path="/drinks" element={<Drinks />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 