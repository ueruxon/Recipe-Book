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
        isEditing: false,
        currentRecipeId: "",
    }

    componentWillReceiveProps = ({currentRecipe}) => {
        if (currentRecipe !== null) {
            const editRecipe = currentRecipe.recipe;
            this.setState(prevState => {
                return {
                    nameRecipe: editRecipe.nameRecipe,
                    ingredients: editRecipe.ingredients,
                    instructions: editRecipe.instructions,
                    isEditing: true,
                    currentRecipeId: editRecipe.id,
                }
            })
        }
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
        };
    }

    onFieldChange = (value, name) => {
        this.setState({
            [name]: value,
        })
    }

    onCancelEdit = () => {
        this.setState(prevState => ({
            isEditing: !prevState.isEditing,
            currentRecipeId: "",           
        }))
        this.resetField();
        this.props.cancelEditing();
    }

    onConfirmedEdit = (event, value) => {
        event.preventDefault();
        const { nameRecipe, ingredients, instructions, currentRecipeId} = value;
        const newRecipe = {
            nameRecipe,
            ingredients,
            instructions,
            id: currentRecipeId,
        }
        this.props.confimredEdit(newRecipe);
        this.setState(prevState => ({
            isEditing: !prevState.isEditing,
            currentRecipeId: "",
        }))
        this.resetField();
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
                    value={this.state}
                    onCancelEdit={this.onCancelEdit}
                    onConfirmedEdit={this.onConfirmedEdit} />
            </Sidebar>
        )
    };
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

const mapDispatchToProps = dispatch => ({
    addRecipe: recipeData => dispatch(actionCreators.addRecipe(recipeData)),
    cancelEditing: () => dispatch(actionCreators.cancelEditing()),
    confimredEdit: newRecipe => dispatch(actionCreators.confirmedEdit(newRecipe)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeControls);