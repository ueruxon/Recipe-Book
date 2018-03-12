import React from 'react'
import { connect } from 'react-redux';

import * as actionCreators from "../store/actions/actionCreators";


class Sidebar extends React.Component {

    createRecipe = (event) => {
        event.preventDefault();
        const recipe = {
            name: this.nameInput.value,
            ingredients: this.ingredientsInput.value,
            instructions: this.inctructionsArea.value
        }

        if (this.nameInput.value === "" || this.ingredientsInput.value === "") return false;
        
        this.props.addRecipe(recipe);
        this.resetField();
    }

    resetField = () => {
        this.nameInput.value = "";
        this.ingredientsInput.value = "";
        this.inctructionsArea.value = "";
    }    

    render() {
        
        return (
            <aside className="sidebar">
                <h1>Add Recipe</h1>
                <form className="form">
                    <input type="text" required placeholder="Name" className="form-input"
                        ref={input => this.nameInput = input} />
                    <input type="text" required placeholder="Ingredients" className="form-input" 
                        ref={input => this.ingredientsInput = input} />
                    <textarea className="form-area" placeholder="Instructions" 
                        ref={area => this.inctructionsArea = area} />
                    <button type="submit" className="form-button__add" 
                        onClick={(event) => this.createRecipe(event)}>
                        Add
                    </button>
                </form>
            </aside>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        recipes: state.recipes,
    }
}

const mapDispatchToProps = dispatch => ({
    addRecipe: recipeData => dispatch(actionCreators.addRecipe(recipeData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)