import React from 'react';

const Form = () => {
    return (
        <form className="form">
            <input type="text" placeholder="Name" className="form-input"/>
            <input type="text" placeholder="Ingredients" className="form-input"/>
            <textarea className="form-area" placeholder="Instructions" ></textarea>
            <button type="submit" className="form-button__add">Add</button>
        </form>
    )
}

export default Form;