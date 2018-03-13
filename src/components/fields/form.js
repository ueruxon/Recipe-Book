import React from 'react';

const Form = ({ onFieldChange, createRecipe, value }) => {
    return (
        <form className="form">
            <input type="text" value={value.nameRecipe} 
                name="nameRecipe" placeholder="Name" className="form-input"
                onChange={(event) => onFieldChange(event.target.value, event.target.name)} />
            <input type="text" value={value.ingredients} 
                name="ingredients" placeholder="Ingredients" className="form-input"
                onChange={(event) => onFieldChange(event.target.value, event.target.name)} />
            <textarea className="form-area" value={value.instructions}
                name="instructions" placeholder="Instructions"
                onChange={(event) => onFieldChange(event.target.value, event.target.name)} />
            <button type="submit" className="form-button__add"
                onClick={(event) => createRecipe(event)}>
                Add
            </button>
        </form>
    )
}

export default Form;