import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from "../store/actions/actionCreators";

import Main from '../components/mainContent/main';
import RecipeCard from '../components/mainContent/recipeCard';

class RecipeList extends React.Component {

    state = {
        isDisabled: false,
    }

    deleteRecipe = id => {
        this.props.deleteRecipe(id);
    }

    onEditingRecipe = id => {
        const currentRecipe = this.props.recipes.find(recipe => {
            return recipe.id === id;
        })
        // this.setState((prevState) => ({
        //     isDisabled: !prevState.isDisabled,
        // }))
        this.props.editingRecipe(currentRecipe);
    }

    render() {
        const recipeList = this.props.recipes.map(recipe => (
            <RecipeCard key={recipe.id} 
                nameRecipe={recipe.nameRecipe}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
                deleteRecipe={this.deleteRecipe}
                recipeId={recipe.id}
                onEditingRecipe={this.onEditingRecipe} 
                disabled={this.state.isDisabled} />
        ));

        return (
            <Main>
                <ul className="main-list">
                    {recipeList}
                </ul>
            </Main>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
    }
}

const mapDispatchToProps = dispatch => ({
    deleteRecipe: recipeId => dispatch(actionCreators.deleteRecipe(recipeId)),
    editingRecipe: recipe => dispatch(actionCreators.editingRecipe(recipe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);