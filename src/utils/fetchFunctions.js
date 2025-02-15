export async function fetchRecipes() {
  try {
    const res = await fetch("/data/recipes.json");
    if (!res.ok)
      throw new Error(
        `Failed to fetch recipes: ${res.status} ${res.statusText}`
      );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching recipes:", err);
    return [];
  }
}

export async function fetchRecipe(id) {
  try {
    const res = await fetch("/data/recipes.json");
    if (!res.ok)
      throw new Error(
        `Failed to fetch recipes: ${res.status} ${res.statusText}`
      );
    const data = await res.json();
    const recipe = data.filter((rec) => rec.id === +id);
    return recipe[0];
  } catch (err) {
    console.error(("Error fetching recipes:", err));
    return [];
  }
}
