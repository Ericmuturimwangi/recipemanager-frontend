import React, { useEffect, useState } from 'react';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/recipes/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRecipes();
  }, []);

  if (error) {
    return <div>Error fetching recipes: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id} className="my-2 p-4 border border-gray-300 rounded">
            <h2 className="text-xl">{recipe.title}</h2>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;