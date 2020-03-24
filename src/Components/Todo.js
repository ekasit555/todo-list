import React, { useState, useEffect, useReducer } from 'react'
import TodoEdit from "../Components/TodoEdit"
import Modal from "../Components/Modal"
import ConfirmDelete from "../Components/ConfirmDelete"

import styled from 'styled-components'
import { colorTheme } from '../Utils/Constants'

const Todo = ({ title, description, id, handleTodoListChange }) => {
    const [openEdit, setOpenEdit] = useState(false)
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false)

    const handleOpenEdit = () => {
        setOpenEdit(true)
    }

    const handleCloseEdit = () => {
        setOpenEdit(false)
    }

    const handleOpenConfirmDelete = () => {
        setOpenConfirmDelete(true)
    }

    const handleCloseConfirmDelete = () => {
        setOpenConfirmDelete(false)
    }

    return (
        <div>
            <ListContainer>
                <div style={{width: '60%'}}>
                    <Title>{title}</Title>
                    <Description readonly>{description}</Description>
                </div>
                <div style={{marginLeft: 'auto'}}>
                    <Button onClick={handleOpenEdit}>Edit</Button>
                    <Button onClick={handleOpenConfirmDelete}>Delete</Button>
                </div>
            </ListContainer>

            <Modal
                openModal={openEdit}
            >
                <TodoEdit
                    title={title}
                    description={description}
                    id={id}
                    handleCloseEdit={handleCloseEdit}
                    handleTodoListChange={handleTodoListChange}
                />
            </Modal>

            <Modal
                openModal={openConfirmDelete}
            >
                <ConfirmDelete
                    id={id}
                    handleTodoListChange={handleTodoListChange}
                    handleCloseConfirmDelete={handleCloseConfirmDelete}
                />
            </Modal>

            
        </div>
    )
}

export default Todo

const ListContainer = styled.div`
    border: 1px solid ${colorTheme.grey};
    background: #fff;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
    padding: 3px 10px;
    font-size: 12px;
    margin-bottom: 6px;
    border-radius: 3px;
    display: flex;
    align-items: center;

`

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 6px;
    word-wrap: break-word;
`
const Description = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 6px;
    word-wrap: break-word;
`
const Button = styled.button`
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    font-size: 1rem;
`