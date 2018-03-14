import * as actionTypes from './actionTypes';

export const addRecipe = recipeData => ({
    type: actionTypes.ADD_RECIPE,
    recipeData: {
        id: Date.now().toString(),
        ...recipeData,
    },
});

export const deleteRecipe = id => ({
    type: actionTypes.REMOVE_RECIPE,
    id,
})

export const editingRecipe = recipe => ({
    type: actionTypes.EDIT_RECIPE,
    recipe
})

export const cancelEditing = () => ({
    type: actionTypes.CANCEL_EDITING,
    currentRecipe: null,
})

export const confirmedEdit = newRecipe => ({
    type: actionTypes.CONFIRMED_EDIT,
    newRecipe,
})