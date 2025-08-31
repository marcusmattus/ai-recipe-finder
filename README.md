# AI‑Powered Recipe Finder

This project is inspired by popular **AI‑powered recipe applications** that generate meal ideas based on ingredients you have on hand【191241741022925†L52-L69】.  It provides a simple Express API and a basic front‑end form for entering ingredients.  While the current implementation returns static recipes, you can extend it to call real recipe APIs (like Spoonacular) and integrate natural language models to suggest creative dishes.

## Features

* **Ingredient input** – users enter a comma‑separated list of ingredients via the front‑end form.
* **Recipe suggestions** – the back‑end returns a JSON list of sample recipes matching the ingredients.  In this stub these recipes are hard coded.
* **Node/Express server** – serves static files from the `frontend/` directory and exposes a `/api/recipes` endpoint.

## Getting started

1. Install dependencies: `npm install`.
2. Run the server: `npm start`.
3. Open `http://localhost:3000` in your browser and enter ingredients to see sample recipes.

## Ideas for improvement

* Fetch real recipes from a third‑party API and filter them based on dietary preferences【191241741022925†L64-L69】.
* Use an AI service to generate unique recipe descriptions or adapt ingredient substitutions.
* Add a favourites list so users can save and revisit recipes【191241741022925†L64-L69】.

This project serves as a lightweight starting point for exploring API integration and front‑end form handling.
