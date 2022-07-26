export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
// https://daveceddia.com/where-fetch-data-redux/

export function recipeCaller() {
		fetch('https://dry-everglades-42811.herokuapp.com/recipes')
	  .then(response => response.json())
	  .then((data) => {
			console.log(data);
			return data;
		});
};

export function fetchRecipes() {
  return dispatch => {
    dispatch(fetchRecipesBegin());
    return fetch("https://dry-everglades-42811.herokuapp.com/recipes")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchRecipesSuccess(json.products));
				console.log(json.products)
        return json.products;
      })
      .catch(error => dispatch(fetchRecipesFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchRecipesBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchRecipesSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchRecipesFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export const addRecipe = recipe => {
	return {
		type: 'ADD_RECIPE',
		payload: recipe
	};
};

export const delRecipes = recipe => {
	return {
		type: 'DEL_RECIPE',
		payload: recipe
	};
}

export const deleteOne = recipe => {
	return {
		type: 'DEL_ONE',
		payload: recipe
	};
}
