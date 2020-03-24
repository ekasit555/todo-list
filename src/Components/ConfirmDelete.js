import React, { useState, useEffect, useReducer } from 'react'
import ServiceAxios from '../Utils/AxiosService'

const ConfirmDelete = (props) => {
    const axiosInstance = new ServiceAxios()

    const handleDeleteTodo = async () => {
        const delUrl = "/todos/" + props.id
        const getUrl = "/todos"

        const [err, data] = await axiosInstance.delete(delUrl)
        if (err) {
            alert(err)
        } else {
            const [err, data] = await axiosInstance.get(getUrl)
            if (err) {
                alert(err)
            } else {
                props.handleTodoListChange(data.data)
                props.handleCloseConfirmDelete()
            }
        }
    }

    return (
        <div>
            <div>
                <button onClick={props.handleCloseConfirmDelete}>Cancel</button>
                <button onClick={handleDeleteTodo}>Delete</button>
            </div>
        </div>
    )
}

export default ConfirmDelete