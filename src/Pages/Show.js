import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

import { Delete } from '../Components/Delete/Delete'

export const Show = () => {
    const { id } = useParams()
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch(`/api/${id}`)
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [id])

    return (
        <div>
            {todo.length > 0 && todo.map(data => <div key={data.id}>{data.content}</div>)}
            <Delete id={id} />
            <hr /> <hr />
            <Link to="/">Back to todos</Link>
        </div>
    )
}