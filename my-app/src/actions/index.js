export const addRecipe = recipe => {
	return {
		type: 'ADD_RECIPE',
		payload: recipe
	};
};

export const delRecipe = recipe => {
	return {
		type: 'DEL_RECIPE',
		payload: recipe
	};
}
