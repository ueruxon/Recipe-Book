import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from "../store/actions/actionCreators";

import Main from '../components/mainContent/main';
import RecipeCard from '../components/mainContent/recipeCard';

class RecipeList extends React.Component {

    deleteRecipe = id => {
        this.props.deleteRecipe(id);
    }

    onEditingRecipe = id => {
        const currentRecipe = this.props.recipes.find(recipe => {
            return recipe.id === id;
        });
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
                onEditingRecipe={this.onEditingRecipe}  />
        ));

        const plug = <div className="main-list__plug">There are no recipe yet... Please add some.</div>;

        return (
            <Main>
                <ul className="main-list">
                    {this.props.recipes.length > 0 ?
                        recipeList : 
                        plug
                    }
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