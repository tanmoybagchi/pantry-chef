const RECIPES = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    image: "images/garlic-pasta.svg",
    time: "25 min",
    difficulty: "Easy",
    servings: 2,
    diet: ["vegetarian"],
    ingredients: ["pasta", "garlic", "butter", "cream", "parmesan", "salt", "pepper", "parsley"],
    steps: [
      "Boil pasta in salted water until al dente.",
      "Melt butter in a pan over medium heat and sauté minced garlic for 1 minute.",
      "Pour in cream and simmer for 3 minutes until slightly thickened.",
      "Add grated parmesan and stir until melted.",
      "Toss with drained pasta, season with salt and pepper.",
      "Garnish with fresh parsley and serve immediately."
    ]
  },
  {
    id: 2,
    title: "Classic Tomato Soup",
    image: "images/tomato-soup.svg",
    time: "30 min",
    difficulty: "Easy",
    servings: 4,
    diet: ["vegetarian", "vegan"],
    ingredients: ["tomatoes", "onion", "garlic", "olive oil", "vegetable broth", "basil", "salt", "pepper", "sugar"],
    steps: [
      "Dice onion and mince garlic. Sauté in olive oil until soft.",
      "Add chopped tomatoes and cook for 5 minutes.",
      "Pour in vegetable broth and bring to a boil.",
      "Reduce heat, add basil, and simmer for 15 minutes.",
      "Blend until smooth with an immersion blender.",
      "Season with salt, pepper, and a pinch of sugar. Serve with crusty bread."
    ]
  },
  {
    id: 3,
    title: "Vegetable Stir-Fry",
    image: "images/stir-fry.svg",
    time: "20 min",
    difficulty: "Easy",
    servings: 2,
    diet: ["vegetarian", "vegan", "quick"],
    ingredients: ["bell pepper", "broccoli", "carrot", "garlic", "soy sauce", "sesame oil", "ginger", "cornstarch", "vegetable oil"],
    steps: [
      "Chop all vegetables into bite-sized pieces.",
      "Heat oil in a wok over high heat.",
      "Add garlic and ginger, stir for 30 seconds.",
      "Add carrots and broccoli, stir-fry for 3 minutes.",
      "Add bell peppers and cook 2 minutes more.",
      "Mix soy sauce, sesame oil, and cornstarch with 2 tbsp water. Pour over veg.",
      "Toss everything together until sauce thickens. Serve over rice."
    ]
  },
  {
    id: 4,
    title: "Shakshuka",
    image: "images/shakshuka.svg",
    time: "25 min",
    difficulty: "Medium",
    servings: 2,
    diet: ["vegetarian"],
    ingredients: ["eggs", "tomatoes", "onion", "bell pepper", "garlic", "cumin", "paprika", "olive oil", "salt", "pepper", "parsley"],
    steps: [
      "Dice onion and bell pepper. Sauté in olive oil until soft.",
      "Add minced garlic, cumin, and paprika. Cook 1 minute.",
      "Add crushed tomatoes. Simmer 10 minutes until sauce thickens.",
      "Make wells in the sauce and crack eggs into them.",
      "Cover and cook until egg whites are set (5–7 min).",
      "Season and garnish with parsley. Serve with pita or bread."
    ]
  },
  {
    id: 5,
    title: "Fresh Garden Salad",
    image: "images/garden-salad.svg",
    time: "10 min",
    difficulty: "Easy",
    servings: 2,
    diet: ["vegetarian", "vegan", "quick"],
    ingredients: ["lettuce", "tomatoes", "cucumber", "red onion", "olive oil", "lemon", "salt", "pepper"],
    steps: [
      "Wash and chop all vegetables.",
      "Combine lettuce, tomatoes, cucumber, and onion in a bowl.",
      "Whisk together olive oil, lemon juice, salt and pepper.",
      "Drizzle dressing over salad and toss gently.",
      "Serve immediately."
    ]
  },
  {
    id: 6,
    title: "Fried Rice",
    image: "images/fried-rice.svg",
    time: "20 min",
    difficulty: "Easy",
    servings: 2,
    diet: ["quick"],
    ingredients: ["rice", "eggs", "soy sauce", "garlic", "onion", "frozen peas", "carrot", "vegetable oil", "sesame oil"],
    steps: [
      "Cook rice and let it cool (day-old rice works best).",
      "Heat oil in a wok. Sauté garlic and onion until fragrant.",
      "Add carrot and peas, stir-fry 2 minutes.",
      "Push veg to the side, scramble eggs on the other side.",
      "Add rice and mix everything together.",
      "Add soy sauce and sesame oil. Stir-fry 2 more minutes and serve."
    ]
  },
  {
    id: 7,
    title: "Avocado Toast",
    image: "images/avocado-toast.svg",
    time: "10 min",
    difficulty: "Easy",
    servings: 1,
    diet: ["vegetarian", "quick"],
    ingredients: ["bread", "avocado", "lemon", "salt", "pepper", "red pepper flakes", "eggs"],
    steps: [
      "Toast bread until golden.",
      "Mash avocado with lemon juice, salt, and pepper.",
      "Spread avocado mixture on toast.",
      "Top with a fried or poached egg.",
      "Sprinkle red pepper flakes and serve."
    ]
  },
  {
    id: 8,
    title: "Lentil Soup",
    image: "images/lentil-soup.svg",
    time: "40 min",
    difficulty: "Easy",
    servings: 4,
    diet: ["vegan", "vegetarian"],
    ingredients: ["red lentils", "onion", "garlic", "carrot", "cumin", "turmeric", "olive oil", "vegetable broth", "lemon", "salt"],
    steps: [
      "Sauté diced onion and carrot in olive oil until soft.",
      "Add garlic, cumin, and turmeric. Cook 1 minute.",
      "Add rinsed lentils and vegetable broth. Bring to a boil.",
      "Reduce heat and simmer 20–25 minutes until lentils are tender.",
      "Blend partially for a creamy texture.",
      "Finish with a squeeze of lemon and salt to taste."
    ]
  },
  {
    id: 9,
    title: "Caprese Salad",
    image: "images/caprese.svg",
    time: "10 min",
    difficulty: "Easy",
    servings: 2,
    diet: ["vegetarian", "quick"],
    ingredients: ["tomatoes", "mozzarella", "basil", "olive oil", "salt", "pepper", "balsamic vinegar"],
    steps: [
      "Slice tomatoes and mozzarella into ½ inch rounds.",
      "Alternate tomato and mozzarella slices on a plate.",
      "Tuck fresh basil leaves between slices.",
      "Drizzle with olive oil and balsamic vinegar.",
      "Season with salt and pepper. Serve immediately."
    ]
  },
  {
    id: 10,
    title: "Spaghetti Aglio e Olio",
    image: "images/aglio-olio.svg",
    time: "20 min",
    difficulty: "Easy",
    servings: 2,
    diet: ["vegetarian", "quick"],
    ingredients: ["spaghetti", "garlic", "olive oil", "red pepper flakes", "parsley", "parmesan", "salt"],
    steps: [
      "Cook spaghetti in heavily salted water until al dente.",
      "Thinly slice 6 cloves of garlic.",
      "Heat olive oil over low heat, add garlic and pepper flakes.",
      "Cook until garlic is golden (not burned), about 3 minutes.",
      "Add a ladle of pasta water to the oil. Drain pasta and add to pan.",
      "Toss vigorously, adding parsley and parmesan. Serve hot."
    ]
  },
  {
    id: 11,
    title: "Banana Pancakes",
    image: "images/pancakes.svg",
    time: "15 min",
    difficulty: "Easy",
    servings: 2,
    diet: ["vegetarian", "quick"],
    ingredients: ["banana", "eggs", "flour", "baking powder", "milk", "butter", "salt", "vanilla"],
    steps: [
      "Mash ripe banana in a bowl.",
      "Beat in eggs, milk, and vanilla.",
      "Add flour, baking powder, and salt. Mix until just combined.",
      "Heat a buttered pan over medium heat.",
      "Pour ¼ cup batter per pancake. Cook 2 min per side.",
      "Serve with maple syrup or fresh fruit."
    ]
  },
  {
    id: 12,
    title: "Veggie Omelette",
    image: "images/omelette.svg",
    time: "12 min",
    difficulty: "Easy",
    servings: 1,
    diet: ["vegetarian", "quick"],
    ingredients: ["eggs", "bell pepper", "onion", "tomatoes", "cheese", "butter", "salt", "pepper"],
    steps: [
      "Whisk 3 eggs with salt and pepper.",
      "Sauté diced pepper, onion, and tomato in butter for 2 minutes.",
      "Pour eggs over the vegetables.",
      "Cook until edges set, then fold omelette in half.",
      "Add cheese inside, let melt, and slide onto plate."
    ]
  },
  {
    id: 13,
    title: "Chickpea Curry",
    image: "images/curry.svg",
    time: "35 min",
    difficulty: "Medium",
    servings: 3,
    diet: ["vegan", "vegetarian"],
    ingredients: ["chickpeas", "tomatoes", "onion", "garlic", "ginger", "curry powder", "coconut milk", "olive oil", "spinach", "salt"],
    steps: [
      "Sauté diced onion in oil until golden.",
      "Add garlic and ginger, cook 1 minute.",
      "Stir in curry powder and cook 30 seconds.",
      "Add tomatoes, chickpeas, and coconut milk.",
      "Simmer 20 minutes. Add spinach in the last 2 minutes.",
      "Season and serve with rice or naan."
    ]
  },
  {
    id: 14,
    title: "Tuna Pasta Salad",
    image: "images/tuna-pasta.svg",
    time: "20 min",
    difficulty: "Easy",
    servings: 3,
    diet: ["quick"],
    ingredients: ["pasta", "tuna", "mayonnaise", "cucumber", "red onion", "lemon", "celery", "salt", "pepper", "parsley"],
    steps: [
      "Cook pasta, drain and cool under cold water.",
      "Drain tuna and flake into a large bowl.",
      "Add diced cucumber, red onion, and celery.",
      "Mix in pasta, mayonnaise, and lemon juice.",
      "Season with salt and pepper, garnish with parsley.",
      "Refrigerate 15 min before serving for best flavor."
    ]
  },
  {
    id: 15,
    title: "Mushroom Risotto",
    image: "images/risotto.svg",
    time: "40 min",
    difficulty: "Medium",
    servings: 2,
    diet: ["vegetarian"],
    ingredients: ["arborio rice", "mushrooms", "onion", "garlic", "white wine", "vegetable broth", "parmesan", "butter", "olive oil", "thyme", "salt", "pepper"],
    steps: [
      "Sauté mushrooms in butter until golden. Set aside.",
      "In the same pan, cook diced onion in olive oil until soft.",
      "Add garlic and rice. Toast the rice for 2 minutes.",
      "Pour in wine and stir until absorbed.",
      "Add warm broth one ladle at a time, stirring constantly.",
      "After 20 min, stir in mushrooms, parmesan, and butter. Season and serve."
    ]
  },
  {
    id: 16,
    title: "Chicken Parmesan",
    image: "images/chicken-parmesan.svg",
    time: "35 min",
    difficulty: "Medium",
    servings: 2,
    diet: [],
    ingredients: ["chicken breast", "breadcrumbs", "parmesan", "eggs", "tomatoes", "mozzarella", "garlic", "basil", "olive oil", "salt", "pepper"],
    steps: [
      "Pound chicken breasts to even thickness.",
      "Set up breading station: flour, beaten eggs, breadcrumbs mixed with parmesan.",
      "Coat each chicken breast in flour, egg, then breadcrumb mixture.",
      "Pan-fry in olive oil over medium-high heat, 4 minutes per side until golden.",
      "Top with tomato sauce, mozzarella, and extra parmesan.",
      "Bake at 400°F (200°C) for 10 minutes until cheese is bubbly. Garnish with basil."
    ]
  },
  {
    id: 17,
    title: "Beef Tacos",
    image: "images/beef-tacos.svg",
    time: "25 min",
    difficulty: "Easy",
    servings: 3,
    diet: [],
    ingredients: ["ground beef", "taco shells", "onion", "garlic", "cumin", "paprika", "tomatoes", "lettuce", "cheese", "sour cream", "salt", "pepper"],
    steps: [
      "Brown ground beef in a skillet over medium-high heat, breaking it up as it cooks.",
      "Add diced onion and garlic, cook until softened.",
      "Stir in cumin, paprika, salt, and pepper. Cook 1 minute.",
      "Add diced tomatoes and simmer 5 minutes.",
      "Warm taco shells in the oven for 2 minutes.",
      "Fill shells with beef mixture, top with lettuce, cheese, and sour cream."
    ]
  },
  {
    id: 18,
    title: "Honey Garlic Chicken",
    image: "images/honey-garlic-chicken.svg",
    time: "30 min",
    difficulty: "Easy",
    servings: 3,
    diet: [],
    ingredients: ["chicken thighs", "garlic", "honey", "soy sauce", "butter", "olive oil", "red pepper flakes", "salt", "pepper", "parsley"],
    steps: [
      "Season chicken thighs with salt and pepper.",
      "Sear in olive oil over medium-high heat, 5 minutes per side. Set aside.",
      "In the same pan, melt butter and sauté minced garlic for 30 seconds.",
      "Stir in honey, soy sauce, and red pepper flakes.",
      "Return chicken to the pan and coat with the sauce.",
      "Simmer 8–10 minutes until chicken is cooked through and sauce is glossy. Garnish with parsley."
    ]
  },
  {
    id: 19,
    title: "Classic Beef Burger",
    image: "images/beef-burger.svg",
    time: "20 min",
    difficulty: "Easy",
    servings: 2,
    diet: ["quick"],
    ingredients: ["ground beef", "burger buns", "lettuce", "tomatoes", "onion", "cheese", "ketchup", "mustard", "salt", "pepper"],
    steps: [
      "Divide ground beef into two patties. Season generously with salt and pepper.",
      "Grill or pan-fry patties over high heat, 4 minutes per side for medium.",
      "Add a slice of cheese on top during the last minute of cooking.",
      "Toast burger buns lightly on the grill.",
      "Assemble burgers with lettuce, tomato, onion, ketchup, and mustard.",
      "Serve immediately with fries or a side salad."
    ]
  },
  {
    id: 20,
    title: "Pork Stir-Fry Noodles",
    image: "images/pork-noodles.svg",
    time: "25 min",
    difficulty: "Easy",
    servings: 2,
    diet: [],
    ingredients: ["pork loin", "noodles", "soy sauce", "garlic", "ginger", "bell pepper", "carrot", "sesame oil", "vegetable oil", "green onion"],
    steps: [
      "Cook noodles according to package directions. Drain and set aside.",
      "Slice pork loin into thin strips. Season with salt and pepper.",
      "Stir-fry pork in vegetable oil over high heat until browned, about 3 minutes. Remove.",
      "Add garlic, ginger, sliced bell pepper, and carrot to the wok. Stir-fry 2 minutes.",
      "Return pork and add noodles, soy sauce, and sesame oil. Toss together.",
      "Garnish with sliced green onion and serve hot."
    ]
  },
  {
    id: 21,
    title: "Lamb Kofta Kebabs",
    image: "images/lamb-kofta.svg",
    time: "30 min",
    difficulty: "Medium",
    servings: 4,
    diet: [],
    ingredients: ["ground lamb", "onion", "garlic", "cumin", "paprika", "parsley", "salt", "pepper", "olive oil", "lemon", "yogurt"],
    steps: [
      "Grate onion and squeeze out excess moisture.",
      "Mix ground lamb with grated onion, minced garlic, cumin, paprika, parsley, salt, and pepper.",
      "Shape mixture around skewers into oval kebabs.",
      "Brush with olive oil and grill over high heat, 4 minutes per side.",
      "Mix yogurt with a squeeze of lemon and a pinch of salt for dipping sauce.",
      "Serve kebabs with yogurt sauce, warm pita, and a fresh salad."
    ]
  }
];

// ─── State ───────────────────────────────────────────────────────────
let pantryItems = [];
let activeFilter = 'all';
let activeSort = 'match';
let openRecipeId = null;

// ─── Tag color cycling ────────────────────────────────────────────────
const TAG_COLORS = [
  { bg: 'rgba(255,107,107,0.2)', border: '#ff6b6b', text: '#ff6b6b' },
  { bg: 'rgba(255,217,61,0.18)', border: '#ffd93d', text: '#ffd93d' },
  { bg: 'rgba(107,203,119,0.18)', border: '#6bcb77', text: '#6bcb77' },
  { bg: 'rgba(77,150,255,0.18)', border: '#4d96ff', text: '#4d96ff' },
  { bg: 'rgba(199,125,255,0.18)', border: '#c77dff', text: '#c77dff' },
  { bg: 'rgba(255,159,67,0.18)', border: '#ff9f43', text: '#ff9f43' },
  { bg: 'rgba(72,219,251,0.18)', border: '#48dbfb', text: '#48dbfb' },
];

function getTagColor(index) {
  return TAG_COLORS[index % TAG_COLORS.length];
}

// ─── Matching logic ───────────────────────────────────────────────────
function scoreRecipe(recipe) {
  if (pantryItems.length === 0) return { pct: 0, have: [], missing: recipe.ingredients };
  const lower = pantryItems.map(i => i.toLowerCase());
  const have = recipe.ingredients.filter(ing =>
    lower.some(p => ing.toLowerCase().includes(p) || p.includes(ing.toLowerCase()))
  );
  const missing = recipe.ingredients.filter(ing => !have.includes(ing));
  const pct = Math.round((have.length / recipe.ingredients.length) * 100);
  return { pct, have, missing };
}

function getMatchClass(pct) {
  if (pct >= 70) return 'high';
  if (pct >= 40) return 'medium';
  return 'low';
}

// ─── Render tags ──────────────────────────────────────────────────────
function renderTags() {
  const container = document.getElementById('tags-container');
  container.innerHTML = '';
  if (pantryItems.length === 0) {
    container.innerHTML = '<span style="color:var(--text-secondary);font-size:0.85rem;padding:0.4rem 0;">Your pantry is empty — add some ingredients above!</span>';
    return;
  }
  pantryItems.forEach((item, i) => {
    const col = getTagColor(i);
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.style.cssText = `background:${col.bg};border-color:${col.border};color:${col.text}`;
    tag.innerHTML = `${item} <span class="remove-x" title="Remove">✕</span>`;
    tag.addEventListener('click', () => removeIngredient(i));
    container.appendChild(tag);
  });
}

// ─── Render recipes ───────────────────────────────────────────────────
function renderRecipes() {
  const grid = document.getElementById('recipes-grid');
  const countBadge = document.getElementById('recipe-count');

  let filtered = RECIPES.filter(r => {
    if (activeFilter === 'all') return true;
    return r.diet.includes(activeFilter);
  });

  const scored = filtered.map(r => ({ ...r, score: scoreRecipe(r) }));

  if (activeSort === 'match') {
    scored.sort((a, b) => b.score.pct - a.score.pct);
  } else if (activeSort === 'time') {
    scored.sort((a, b) => parseInt(a.time) - parseInt(b.time));
  } else if (activeSort === 'name') {
    scored.sort((a, b) => a.title.localeCompare(b.title));
  }

  const visible = pantryItems.length === 0 ? scored : scored.filter(r => r.score.pct > 0);
  countBadge.textContent = visible.length + ' recipes';

  if (visible.length === 0 && pantryItems.length > 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <span class="emoji">🤔</span>
        <h3>No matches yet</h3>
        <p>Try adding more ingredients — even partial matches will appear!</p>
      </div>`;
    return;
  }

  grid.innerHTML = visible.map((r, idx) => {
    const { pct, have, missing } = r.score;
    const matchClass = getMatchClass(pct);
    const dietBadge = r.diet.includes('vegan') ? 'vegan' : r.diet.includes('vegetarian') ? 'vegetarian' : r.diet.includes('quick') ? 'quick' : '';
    const dietLabel = r.diet.includes('vegan') ? '🌱 Vegan' : r.diet.includes('vegetarian') ? '🥦 Veg' : r.diet.includes('quick') ? '⚡ Quick' : '';

    const ingrChips = r.ingredients.map(ing => {
      const isHave = have.includes(ing);
      return `<span class="ingr-chip ${isHave ? 'have' : 'missing'}">${ing}</span>`;
    }).join('');

    const matchLabel = pantryItems.length > 0 ? `${pct}% match` : '✨ Recipe';

    return `
    <article class="recipe-card" style="animation-delay:${idx * 0.05}s" data-id="${r.id}">
      <div class="recipe-img-wrap">
        <img src="${r.image}" alt="${r.title}" loading="lazy" onerror="this.style='background:linear-gradient(135deg,#c77dff22,#4d96ff22)'">
        <span class="match-badge ${pantryItems.length === 0 ? 'medium' : matchClass}">${matchLabel}</span>
        ${dietBadge ? `<span class="diet-badge ${dietBadge}">${dietLabel}</span>` : ''}
      </div>
      <div class="recipe-body">
        <h3 class="recipe-title">${r.title}</h3>
        <div class="recipe-meta">
          <span>⏱ ${r.time}</span>
          <span>👨‍🍳 ${r.difficulty}</span>
          <span>🍽 ${r.servings} servings</span>
        </div>
        <div class="ingr-list">${ingrChips}</div>
        <button class="view-recipe-btn" onclick="openModal(${r.id})">View Recipe →</button>
      </div>
    </article>`;
  }).join('');
}

// ─── Add / Remove ingredients ─────────────────────────────────────────
function addIngredient(value) {
  value = value.trim();
  if (!value) return;
  const lower = value.toLowerCase();
  if (pantryItems.some(i => i.toLowerCase() === lower)) return;
  pantryItems.push(value);
  renderTags();
  renderRecipes();
}

function removeIngredient(index) {
  pantryItems.splice(index, 1);
  renderTags();
  renderRecipes();
}

// ─── Modal ────────────────────────────────────────────────────────────
function openModal(id) {
  const recipe = RECIPES.find(r => r.id === id);
  if (!recipe) return;
  const { have, missing } = scoreRecipe(recipe);

  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-img').src = recipe.image;
  document.getElementById('modal-title').textContent = recipe.title;
  document.getElementById('modal-meta').innerHTML = `
    <span>⏱ ${recipe.time}</span>
    <span>👨‍🍳 ${recipe.difficulty}</span>
    <span>🍽 ${recipe.servings} servings</span>
    <span>${recipe.diet.map(d => d.charAt(0).toUpperCase() + d.slice(1)).join(', ')}</span>
  `;

  document.getElementById('modal-ingredients').innerHTML = recipe.ingredients.map(ing => {
    const isHave = have.includes(ing);
    return `<li class="${isHave ? 'have' : 'miss'}">${ing} ${isHave ? '✓' : '(need to buy)'}</li>`;
  }).join('');

  document.getElementById('modal-steps').innerHTML = recipe.steps.map(s => `<li><span>${s}</span></li>`).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Push history state so the back button closes the modal
  history.pushState({ modal: true, recipeId: id }, '');
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay.classList.contains('open')) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ─── Init & event listeners ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('ingredient-input');
  const addBtn = document.getElementById('add-btn');

  addBtn.addEventListener('click', () => {
    addIngredient(input.value);
    input.value = '';
    input.focus();
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      addIngredient(input.value);
      input.value = '';
    }
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderRecipes();
    });
  });

  // Sort
  document.getElementById('sort-select').addEventListener('change', e => {
    activeSort = e.target.value;
    renderRecipes();
  });

  // Quick-add chips
  document.querySelectorAll('.quick-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      addIngredient(chip.dataset.ingr);
    });
  });

  // Modal close
  document.getElementById('modal-close').addEventListener('click', () => {
    history.back(); // triggers popstate → closeModal
  });
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) history.back();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.getElementById('modal-overlay').classList.contains('open')) {
      history.back();
    }
  });

  // Back button closes modal
  window.addEventListener('popstate', (e) => {
    closeModal();
  });

  // Initial render
  renderTags();
  renderRecipes();
});
