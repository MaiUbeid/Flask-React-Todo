import React, { useState, useEffect } from 'react';
import { Card } from '../Components/Card/Card';
import { Form } from '../Components/Form/Form';


export const TodoPage = () => {

    const [todo, setTodo] = useState([]);
    const [addTodo, setAddTodo] = useState('');

    useEffect(() => {
        fetch('/api').then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => setTodo(data))
    }, [])

    const handleFormChange = (inputValue) => {
        setAddTodo(inputValue)
    }

    const handleFormSubmit = () => {
        fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({ content: addTodo }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(res => res.json())
            .then(message => {
                setAddTodo('')
                getLatestTodos()
            })
    }

    const getLatestTodos = () => {
        fetch('/api').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(data => setTodo(data))
    }

    return (
        <>
            <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit} />
            <Card listOfTodos={todo} />
        </>
    )
}

