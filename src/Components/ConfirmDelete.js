import React, { useState, useEffect, useReducer } from 'react'
import ServiceAxios from '../Utils/AxiosService'
import styled from 'styled-components'
import { colorTheme } from '../Utils/Constants'

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
            <ConfirmContainer>
                <Button onClick={props.handleCloseConfirmDelete}>Cancel</Button>
                <Button onClick={handleDeleteTodo}>Delete</Button>
            </ConfirmContainer>
        </div>
    )
}

export default ConfirmDelete

const ConfirmContainer = styled.div`
    display: flex;

`
const Button = styled.button`
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    flex: 1
`