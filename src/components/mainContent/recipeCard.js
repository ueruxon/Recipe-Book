import React from 'react';
import { connect } from 'react-redux';



class Item extends React.Component {

    state = {
        isOpen: false,
        disabled: false,
    }

    componentWillReceiveProps = ({currentRecipe}) => {
        if (currentRecipe === null) {
            this.setState({ disabled: false,})
        }
    }

    toggleDisabled = () => {
        this.setState(prevState => ({
            disabled: !prevState.disabled,
        }))
    }

    openRecipe = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }))
    }

    render() {
        const { nameRecipe, ingredients, instructions, deleteRecipe, recipeId, onEditingRecipe} = this.props;
        const contentOpen = this.state.isOpen ? `content-open` : ``;
        const disabledButton = this.state.disabled ? `disabled` : ``;
        
        return (
            <li className="main-list__item">
                <div className="main-list__item-header">
                    <div className="main-list__item-header-title" onClick={this.openRecipe}>
                        {nameRecipe}
                    </div>
                    <div className={`main-list__item-header-editing ${disabledButton}`} 
                        onClick={() => {onEditingRecipe(recipeId); this.toggleDisabled()}}>
                        <i className="fas fa-pencil-alt" />
                    </div>
                    <div className="main-list__item-header-delete" onClick={() => deleteRecipe(recipeId)}>
                        <i className="fas fa-trash-alt"/>
                    </div>
                </div>
                <div className={`main-list__item-content ${contentOpen}`}>
                    <h5>Inrgidients:</h5>
                    <p>{ingredients}</p>
                    <h5>How to cook:</h5>
                    <p>{instructions}</p>
                </div>
            </li>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps)(Item);