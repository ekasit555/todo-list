import React, { useState, useEffect, useReducer } from 'react'
import ServiceAxios from '../Utils/AxiosService'
import styled from 'styled-components'
import { colorTheme } from '../Utils/Constants'

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
            <Title>Title</Title>
            <InputTitle
                type="text"
                onChange={(e) => changeTitle(e)}
                value={title}
                placeholder="title" />

            <Description>Description</Description>
            <InputDescription
                type="text"
                onChange={(e) => changeDiscription(e)}
                value={description}
                placeholder="description" />

            <div>
                <Button onClick= {props.handleCloseCreate}>Cancel</Button>
                <Button onClick = {handleCreateTodo}>Create</Button>
            </div>
        </div>    
    )
}

export default TodoCreate


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

const InputTitle = styled.input`
  font-size: 1.5rem;
  border: 2px solid ${colorTheme.grey}
  border-radius: 3px;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  width: 80%;
  color: ${colorTheme.darkGrey}
`;

const InputDescription = styled.textarea`
  font-size: 1.5rem;
  border: 2px solid ${colorTheme.grey}
  border-radius: 3px;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  width: 80%;
  height: 20rem;
  color: ${colorTheme.darkGrey};
  resize: none;
`;

const Button = styled.button`
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    font-size: 1rem;
`