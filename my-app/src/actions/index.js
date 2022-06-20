export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
// https://daveceddia.com/where-fetch-data-redux/

export function fetchRecipes() {
  return dispatch => {
    dispatch(fetchRecipesBegin());
    return fetch("http://localhost:3001/recipes")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchRecipesSuccess(json.products));
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

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
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
