import React from 'react'


class Item extends React.Component {

    state = {
        isOpen: false,
    }

    openRecipe = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { nameRecipe, ingredients, instructions} = this.props
        const contentOpen = this.state.isOpen ? `content-open` : ``;
        return (
            <li className="main-list__item">
                <div className="main-list__item-title" onClick={this.openRecipe}>{nameRecipe}</div>
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