import * as actionTypes from '../actions/actionTypes';

const initialState = {
    recipes: [
        {
            id: "2132321",
            name: "Пирожки",
            ingredients: "Мука, соль, яйца, вода",
            instructions: "Взбить яйца, добавить соли и вылить в муку. Размешать и добавить воды"
        },
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
        default:
            return state;
    }
}

export default rootReducer;