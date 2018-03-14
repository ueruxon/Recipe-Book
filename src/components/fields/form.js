import React from 'react';

import Button from "./button"

const Form = ({ onFieldChange, createRecipe, value, onCancelEdit, onConfirmedEdit}) => {
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
            <Button value={value} 
                createRecipe={createRecipe}
                onCancelEdit={onCancelEdit}
                onConfirmedEdit={onConfirmedEdit}
            />    
        </form>
    )
}

export default Form;