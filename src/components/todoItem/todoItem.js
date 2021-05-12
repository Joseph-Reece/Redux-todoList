import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import './todoItem.css'
import { useDispatch } from 'react-redux';
import { setCheck } from '../../features/todoSlice'

const TodoItem = ({ content, status, id }) => {
    const dispatch = useDispatch()

    const handleCheck = (event) => {

        dispatch(setCheck({id}))

    };

    return (
        <div className="todoItem" >
            <Checkbox
                checked={status}
                onChange={handleCheck}
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={status ? 'todoItem--done' : undefined}> {content} </p>
        </div>
    )
}

export default TodoItem
