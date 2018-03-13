import React from 'react'
import { connect } from 'react-redux';

import * as actionCreators from "../store/actions/actionCreators";

import Sidebar from '../components/sidebar/sidebar'
import Form from '../components/fields/form'

class RecipeControls extends React.Component {

    state = {
        nameRecipe: "",
        ingredients: "",
        instructions: "",
    }

    onFieldChange = (value, name) => {
        this.setState({
            [name]: value,
        })
    }

    createRecipe = (event) => {
        event.preventDefault();

        if (this.state.nameRecipe !== "" && this.state.ingredients !== "") {
            const recipe = {
                nameRecipe: this.state.nameRecipe,
                ingredients: this.state.ingredients,
                instructions: this.state.instructions,
            }

            this.props.addRecipe(recipe);
            this.resetField();
        }

        return false;
    }

    resetField = () => {
        this.setState({
            nameRecipe: "",
            ingredients: "",
            instructions: "",
        })
    }    

    render() {
        return (
            <Sidebar>
                <Form onFieldChange={this.onFieldChange}
                      createRecipe={this.createRecipe} 
                      value={this.state}/>
            </Sidebar>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeControls)