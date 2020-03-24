import React, { useState, useEffect, useReducer } from 'react'
import ServiceAxios from '../Utils/AxiosService'
import styled from 'styled-components'
import { colorTheme } from '../Utils/Constants'

import TodoCreate from "../Components/TodoCreate"
import TodoList from "../Components/TodoList"
import Modal from "../Components/Modal"

const Home = () => {

    const axiosInstance = new ServiceAxios()
    const [todoList, setTodoList] = useState([])
    const [openCreate, setOpenCreate] = useState(false)

    const url = '/todos'
    const fetchData = async () => {
        const [err, data] = await axiosInstance.get(url)
        if (err) {
            alert(err)
        } else {
            setTodoList(data.data)
        }
    }


    useEffect(() => {
        fetchData()
    }, []);


    const handleTodoListChange = (data) => {
        setTodoList(data)
    }

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div>
            <HomeContainer>
            <div>
                <Button onClick={() => setOpenCreate(true)}>+ Create</Button>
            </div>

            {todoList.length == 0 ? <div style={{fontSize: '2rem', fontWeight: 500}}>Empty press create for add new todo</div> : null}

            <TodoList
                todoList={todoList}
                handleTodoListChange={handleTodoListChange}
            />

            <button onClick={handleLogout}>
                Logout
            </button>

            <Modal
                openModal={openCreate}
                >
                <TodoCreate
                    handleTodoListChange={handleTodoListChange}
                    handleCloseCreate={() => setOpenCreate(false)}
                    />
            </Modal>
            </HomeContainer>
        </div>
    )
}

export default Home


const HomeContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5rem;
  border: 1px solid ${colorTheme.grey};
  box-shadow: 3px 3px 1.3rem rgba(0,0,0,0.3);
  width: 50rem;
  height: 80vh
`;

const Button = styled.button`
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
`;