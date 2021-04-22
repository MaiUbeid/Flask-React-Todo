import React from 'react';
import { Link } from 'react-router-dom'

export const Card = ({ listOfTodos }) => {
    return (
        <>
            {listOfTodos.map(todo => {
                return (
                    <ul key={todo.id}>
                        <li>
                            <Link to={`${todo.id}`}>{todo.content}</Link>
                        </li>
                    </ul>
                )
            })}
        </>)
}