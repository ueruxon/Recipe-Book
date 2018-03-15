import * as actionTypes from '../actions/actionTypes';

export const initialState = {
    currentRecipe: null,
    recipes: [
    ],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_RECIPE:
            return {
                ...state,
                recipes: [
                    ...state.recipes,
                    action.recipeData,
                ]
            }
        case actionTypes.REMOVE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.id),
            }

        case actionTypes.EDIT_RECIPE: 
            return {
                ...state,
                currentRecipe: action,
            }

        case actionTypes.CANCEL_EDITING: 
            return {
                ...state,
                currentRecipe: action.currentRecipe,
            }
        case actionTypes.CONFIRMED_EDIT: 
            return {
                ...state,
                currentRecipe: null,
                recipes: state.recipes.map(recipe => {
                    return recipe.id === action.newRecipe.id ? action.newRecipe: recipe;
                })
            }
        
        default:
            return state;
    }
}

export default rootReducer;