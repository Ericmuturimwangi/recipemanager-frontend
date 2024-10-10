
import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-5">
        <Button label="Add Recipe" onClick={() => alert('Button Clicked!')} />
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Spaghetti Bolognese" description="A classic Italian pasta dish." />
        <Card title="Chicken Curry" description="A spicy and flavorful dish." />
        <Card title="Caesar Salad" description="A fresh and healthy salad." />
      </div>
    </div>
  );
};

export default App;