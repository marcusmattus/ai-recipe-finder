const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static front‑end assets
app.use(express.static('frontend'));

/**
 * GET /api/recipes
 * Returns a list of sample recipes based on a comma‑separated list of ingredients.
 * In a production system you would call a third‑party recipe API and possibly
 * integrate with an AI service to generate personalised suggestions.  For now
 * we return a static response to demonstrate the API structure.
 */
app.get('/api/recipes', (req, res) => {
  const ingredients = (req.query.ingredients || '').split(',').map(i => i.trim()).filter(Boolean);
  // Create dummy recipes – in a real app you would fetch from Spoonacular or
  // another API using the supplied ingredients.
  const recipes = [
    {
      id: 1,
      title: 'Simple Stir Fry',
      ingredients: ['broccoli', 'carrots', 'soy sauce'],
      instructions: 'Heat oil in a pan, add vegetables, stir fry and season.'
    },
    {
      id: 2,
      title: 'Pasta Primavera',
      ingredients: ['pasta', 'bell peppers', 'tomatoes'],
      instructions: 'Cook pasta; sauté vegetables; combine and season.'
    }
  ];
  res.json({ ingredients, recipes });
});

// Start the server
app.listen(PORT, () => {
  console.log(`AI Recipe Finder server running on port ${PORT}`);
});
