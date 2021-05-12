import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../../features/todoSlice'
import './input.css'

const Input = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))
        setInput('')
    }
    return (
        <div className="input">
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button type="button" onClick={addTodo} >Add</button>

        </div>
    )
}

export default Input
