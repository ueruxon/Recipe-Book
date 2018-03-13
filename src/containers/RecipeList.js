import React from 'react'
import { connect } from 'react-redux';

import * as actionCreators from "../store/actions/actionCreators";

import Main from '../components/mainContent/main';
import RecipeCard from '../components/mainContent/recipeCard';

class RecipeList extends React.Component {

    render() {
        const recipeList = this.props.recipes.map(recipe => (
            <RecipeCard key={recipe.id} 
                nameRecipe={recipe.nameRecipe}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}/>
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

export default connect(mapStateToProps)(RecipeList);