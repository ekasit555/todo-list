import React, { useState, useEffect, useReducer } from 'react'
import ServiceAxios from '../Utils/AxiosService'

const TodoCreate = (props) => {
    const axiosInstance = new ServiceAxios()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    const changeDiscription = (e) => {
        setDescription(e.target.value)
    }

    const handleCreateTodo = async () => {
        let url = '/todos'
        const params = {
            title,
            description
        }

        if (title == ""){
            alert("Fill title")
            return
        }

        const [err, data] = await axiosInstance.post(url, params)
        if (err) {
            alert(err)
        } else {
            const [err, data] = await axiosInstance.get(url)
            if (err) {
                alert(err)
            } else {
                props.handleTodoListChange(data.data)
                props.handleCloseCreate()
                setTitle("")
                setDescription("")
            }
        }
    }

    return (
        <div>
            <div>Title</div>
            <input
                type="text"
                onChange={(e) => changeTitle(e)}
                value={title}
                placeholder="title" />

            <div>Description</div>
            <input
                type="text"
                onChange={(e) => changeDiscription(e)}
                value={description}
                placeholder="description" />

            <div>
                <button onClick= {props.handleCloseCreate}>Cancel</button>
                <button onClick = {handleCreateTodo}>Create</button>
            </div>
        </div>    
    )
}

export default TodoCreate