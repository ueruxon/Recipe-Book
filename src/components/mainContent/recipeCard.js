import React from 'react'


class Item extends React.Component {

    state = {
        isOpen: false,
    }

    openRecipe = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }))
    }

    render() {
        const { nameRecipe, ingredients, instructions, deleteRecipe, recipeId, onEditingRecipe, disabled} = this.props;
        const contentOpen = this.state.isOpen ? `content-open` : ``;
        const disabledButton = disabled ? `disabled` : ``;

        return (
            <li className="main-list__item">
                <div className="main-list__item-header">
                    <div className="main-list__item-header-title" onClick={this.openRecipe}>
                        {nameRecipe}
                    </div>
                    <div className={`main-list__item-header-editing ${disabledButton}`} onClick={() => onEditingRecipe(recipeId)}>
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

export default Item;