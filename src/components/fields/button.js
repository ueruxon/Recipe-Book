import React, { Fragment } from 'react';

const Button = ({ createRecipe, value, onCancelEdit, onConfirmedEdit}) => {

    const addButton = () => (
        <button type="submit" className="form-button__add"
            onClick={(event) => createRecipe(event)}>
            Add
        </button> 
    );

    const editButton = () => (
        <Fragment>
            <button type="submit" className="form-button__edit" onClick={(event) => onConfirmedEdit(event, value)}>Edit</button>
            <button type="submit" className="form-button__cancel" onClick={() => onCancelEdit()}>Cancel</button>
        </Fragment>
    );

    return (
        <div className="button-container">
            { value.isEditing ? editButton() : addButton() }
        </div>
    );
}

export default Button;