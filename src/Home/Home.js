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
                <Header>TO DO App</Header>
                <div>
                    <Button onClick={() => setOpenCreate(true)}>+ Create</Button>
                    <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
                </div>

                {todoList.length == 0 ? <Header2>Empty press create for add new todo</Header2> : null}

                <TodoList
                    todoList={todoList}
                    handleTodoListChange={handleTodoListChange}
                />

  

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
    height: 80vh;
    overflow: auto;
`;

const Header = styled.div`
    text-align: center;
    font-size: 2.5rem;
    margin: 0.5rem auto;
`;

const Header2 = styled(Header)`
    font-size: 1.5rem;
    margin: 30% auto;
`
const Button = styled.button`
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
`;

const LogoutButton = styled(Button)`
    float: right
`;