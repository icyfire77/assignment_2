export const addRecipe = async (recipe) => {
  const response = await fetch('https://dry-everglades-42811.herokuapp.com/recipes', {
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
  const response = await fetch('https://dry-everglades-42811.herokuapp.com/recipes', {
    method: 'GET'
  });
  return response.json();
};

export const delRecipe = async (title) => {
  const response = await fetch('https://dry-everglades-42811.herokuapp.com/recipes', {
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

export const editRecipe = async (recipe) => {
  const response = await fetch('https://dry-everglades-42811.herokuapp.com/recipes', {
    method: 'PUT',
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
