export const addRecipe = async (recipe) => {
  const response = await fetch('http://localhost:3001/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }

  return data;
};

export const getRecipe = async () => {
  const response = await fetch('http://localhost:3001/recipes', {
    method: 'GET'
  });
  return response.json();
};

export const delRecipe = async (title) => {
  const response = await fetch('http://localhost:3001/recipes', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(title)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }

  return data;
};
