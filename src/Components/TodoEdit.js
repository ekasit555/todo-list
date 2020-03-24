import React, { useState, useEffect } from 'react'
import ServiceAxios from '../Utils/AxiosService'


const TodoEdit = (props) => {
    const axiosInstance = new ServiceAxios()
    const [title, setTitle] = useState(props.title)
    const [description, setDescription] = useState(props.description)

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    const changeDiscription = (e) => {
        setDescription(e.target.value)
    }

    const handleEditTodo = async () => {
        let url = '/todos/' + props.id
        let getUrl = '/todos/'

        const params = {
            title,
            description
        }

        const [err, data] = await axiosInstance.put(url, params)
        if (err) {
            alert(err)
        } else {
            const [err, data] = await axiosInstance.get(getUrl)
            if (err) {
                alert(err)
            } else {
                props.handleTodoListChange(data.data)
                props.handleCloseEdit()
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
                <button onClick={props.handleCloseEdit}>Cancel</button>
                <button onClick={handleEditTodo}>Edit</button>
            </div>
        </div>
    )
}

export default TodoEdit