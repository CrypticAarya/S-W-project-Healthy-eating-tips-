document.addEventListener("DOMContentLoaded", () => {
    const recipes = [
        {
            title: "Avocado Salad",
            ingredients: ["1 ripe avocado", "1 cup cherry tomatoes", "¼ cup red onion", "1 tbsp olive oil", "Salt and pepper to taste"],
            nutrition: "Calories: 300 kcal | Protein: 4g | Carbs: 12g | Fat: 28g",
            process: ["Dice avocado, tomatoes, and onion.", "Mix with olive oil, salt, and pepper.", "Toss gently and serve fresh."]
        },
        {
            title: "Quinoa & Chickpea Bowl",
            ingredients: ["1 cup quinoa", "½ cup chickpeas", "1 tbsp olive oil", "½ lemon (juice)", "1 tbsp tahini"],
            nutrition: "Calories: 350 kcal | Protein: 15g | Carbs: 45g | Fat: 12g",
            process: ["Cook quinoa.", "Mix with chickpeas, olive oil, lemon juice, and tahini.", "Stir and serve."]
        },
        {
            title: "Greek Yogurt & Berries",
            ingredients: ["1 cup Greek yogurt", "½ cup mixed berries", "1 tbsp honey", "1 tbsp chia seeds"],
            nutrition: "Calories: 250 kcal | Protein: 12g | Carbs: 35g | Fat: 4g",
            process: ["Add Greek yogurt in a bowl.", "Top with berries, honey, and chia seeds.", "Mix and enjoy!"]
        },
        {
            title: "Peanut Butter & Banana Toast",
            ingredients: ["1 slice whole grain bread", "1 tbsp peanut butter", "½ banana (sliced)", "1 tsp chia seeds"],
            nutrition: "Calories: 290 kcal | Protein: 9g | Carbs: 38g | Fat: 12g",
            process: ["Toast the bread.", "Spread peanut butter evenly.", "Place banana slices and sprinkle chia seeds."]
        },
        {
            title: "Lentil Soup",
            ingredients: ["1 cup lentils", "1 tomato (chopped)", "½ onion (chopped)", "1 tsp cumin powder", "1 tbsp olive oil", "Salt to taste"],
            nutrition: "Calories: 320 kcal | Protein: 18g | Carbs: 55g | Fat: 5g",
            process: ["Sauté onion and tomato in olive oil.", "Add lentils, cumin, salt, and water.", "Simmer for 20 minutes.", "Serve warm."]
        },
        {
            title: "Sweet Potato & Black Bean Tacos",
            ingredients: ["1 small sweet potato (cubed)", "½ cup black beans", "1 whole wheat tortilla", "1 tbsp salsa", "½ avocado"],
            nutrition: "Calories: 350 kcal | Protein: 10g | Carbs: 55g | Fat: 10g",
            process: ["Roast sweet potato cubes.", "Heat black beans and mash slightly.", "Fill tortilla with beans, sweet potato, salsa, and avocado."]
        },
        {
            title: "Spinach & Mushroom Omelette",
            ingredients: ["2 eggs", "½ cup spinach", "¼ cup mushrooms", "1 tsp olive oil"],
            nutrition: "Calories: 250 kcal | Protein: 18g | Carbs: 5g | Fat: 17g",
            process: ["Beat eggs and season with salt.", "Sauté spinach and mushrooms in olive oil.", "Pour eggs over the veggies and cook until set."]
        },
        {
            title: "Oatmeal with Nuts & Fruits",
            ingredients: ["½ cup oats", "1 cup almond milk", "1 tbsp honey", "1 tbsp walnuts", "½ apple (sliced)"],
            nutrition: "Calories: 280 kcal | Protein: 7g | Carbs: 50g | Fat: 7g",
            process: ["Cook oats in almond milk.", "Top with apple slices, walnuts, and honey."]
        },
        {
            title: "Hummus & Veggie Wrap",
            ingredients: ["1 whole wheat tortilla", "3 tbsp hummus", "½ cucumber", "½ bell pepper", "½ carrot"],
            nutrition: "Calories: 280 kcal | Protein: 8g | Carbs: 40g | Fat: 9g",
            process: ["Spread hummus on tortilla.", "Layer veggies and roll tightly."]
        },
        {
            title: "Grilled Salmon & Quinoa",
            ingredients: ["1 salmon fillet", "½ cup quinoa", "1 tbsp olive oil", "1 tbsp lemon juice"],
            nutrition: "Calories: 400 kcal | Protein: 35g | Carbs: 30g | Fat: 18g",
            process: ["Grill salmon with olive oil and lemon juice.", "Serve with cooked quinoa."]
        },
        {
            title: "Greek Salad",
            ingredients: ["1 cup lettuce", "½ cup feta cheese", "½ cup olives", "1 tomato", "Olive oil"],
            nutrition: "Calories: 220 kcal | Protein: 6g | Carbs: 10g | Fat: 18g",
            process: ["Chop lettuce, tomato, and mix with feta and olives.", "Drizzle with olive oil."]
        },
        {
            title: "Berry Smoothie",
            ingredients: ["1 banana", "½ cup blueberries", "1 cup almond milk"],
            nutrition: "Calories: 180 kcal | Protein: 3g | Carbs: 40g | Fat: 2g",
            process: ["Blend banana, blueberries, and almond milk until smooth."]
        },
        {
            title: "Zucchini Noodles with Pesto",
            ingredients: ["2 zucchinis", "2 tbsp pesto sauce", "1 tbsp olive oil"],
            nutrition: "Calories: 150 kcal | Protein: 5g | Carbs: 12g | Fat: 10g",
            process: ["Spiralize zucchinis.", "Toss with pesto and olive oil."]
        },
        {
            title: "Brown Rice Stir-Fry",
            ingredients: ["1 cup brown rice", "½ cup tofu", "½ cup broccoli", "Soy sauce"],
            nutrition: "Calories: 330 kcal | Protein: 15g | Carbs: 50g | Fat: 5g",
            process: ["Cook rice and mix with sautéed tofu and broccoli.", "Add soy sauce."]
        },
        {
            title: "Baked Chicken with Veggies",
            ingredients: ["1 chicken breast", "½ cup bell peppers", "1 tbsp olive oil"],
            nutrition: "Calories: 300 kcal | Protein: 40g | Carbs: 10g | Fat: 8g",
            process: ["Bake chicken with veggies and olive oil."]
        },
        {
            title: "Cottage Cheese & Pineapple Bowl",
            ingredients: ["½ cup cottage cheese", "½ cup pineapple chunks"],
            nutrition: "Calories: 200 kcal | Protein: 20g | Carbs: 30g | Fat: 2g",
            process: ["Mix cottage cheese with pineapple chunks."]
        },
        {
            title: "Chia Pudding with Mango",
            ingredients: ["3 tbsp chia seeds", "1 cup almond milk", "½ mango"],
            nutrition: "Calories: 250 kcal | Protein: 6g | Carbs: 30g | Fat: 10g",
            process: ["Soak chia seeds in almond milk overnight.", "Top with mango slices."]
        },
        {
            title: "Egg & Avocado Sandwich",
            ingredients: ["1 whole grain bread", "1 boiled egg", "½ avocado"],
            nutrition: "Calories: 320 kcal | Protein: 15g | Carbs: 30g | Fat: 18g",
            process: ["Toast bread.", "Mash avocado and place boiled egg slices on top."]
        },
        {
            title: "Mushroom & Spinach Stir-fry",
            ingredients: ["1 cup mushrooms", "½ cup spinach", "1 tbsp soy sauce"],
            nutrition: "Calories: 180 kcal | Protein: 8g | Carbs: 15g | Fat: 5g",
            process: ["Sauté mushrooms and spinach with soy sauce."]
        },
        {
            title: "Dark Chocolate & Almond Trail Mix",
            ingredients: ["¼ cup dark chocolate", "¼ cup almonds"],
            nutrition: "Calories: 250 kcal | Protein: 6g | Carbs: 20g | Fat: 18g",
            process: ["Mix dark chocolate pieces with almonds."]
        }
    ];

    const recipeContainer = document.querySelector(".recipe-list");

    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe");

        recipeCard.innerHTML = `<h2>${recipe.title}</h2><h3>Ingredients:</h3><ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}</ul><h3>Nutrition:</h3><p>${recipe.nutrition}</p><h3>Process:</h3><ol>${recipe.process.map(step => `<li>${step}</li>`).join("")}</ol>`;

        recipeContainer.appendChild(recipeCard);
    });
});
