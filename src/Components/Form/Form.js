import React from 'react';

export const Form = ({ userInput, onFormChange, onFormSubmit }) => {

    const handleChange = (event) => {
        onFormChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userInput} onChange={handleChange} required></input>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}