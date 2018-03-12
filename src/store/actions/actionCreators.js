import * as actionTypes from './actionTypes';

export const addRecipe = recipeData => ({
    type: actionTypes.ADD_RECIPE,
    recipeData: {
        id: Date.now().toString(),
        ...recipeData,
    },
});