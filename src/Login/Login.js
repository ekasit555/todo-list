import React, { useState, useEffect } from 'react';
import ServiceAxios from '../Utils/AxiosService'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { colorTheme } from '../Utils/Constants'

const Login = () => {
    const axiosInstance = new ServiceAxios()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()

    const locateToHome = () => history.push('/home')

    const changeInput = (e) => {
        setUsername(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = async () => {
        const url = '/users/auth'
        const params = {
            username: username,
            password: password
        }
        // setLoading(true)
        const [err, data] = await axiosInstance.post(url, params)
        // setLoading(false)
        if (err) {
            alert(err.data.error)
        } else {
            var token = 'Bearer ' + data.data.token
            localStorage.setItem('auth_token', token)
            locateToHome()
        }

    }

    return (
        <ContainerLogin>
            <Input
                type="text"
                onChange={(e) => changeInput(e)}
                value={username}
                placeholder="Username" />
            <Input
                type="password"
                onChange={(e) => changePassword(e)}
                value={password}
                placeholder="Password" />
            <LoginButton onClick={login}>
                LOG IN
            </LoginButton>
        </ContainerLogin>
    )
}

export default Login

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5rem;
  border: 1px solid ${colorTheme.grey};
  box-shadow: 3px 3px 1.3rem rgba(0,0,0,0.3);
  width: 50rem;
`;

const Input = styled.input`
  font-size: 1.8rem;
  border: 2px solid ${colorTheme.grey}
  border-radius: 3px;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  width: 80%;
  color: ${colorTheme.darkGrey}
  
  &:focus {
    border: 2px solid ${colorTheme.blue}
  };

  &::placeholder {
    color: ${colorTheme.grey}
    font-size: 1.6rem;
  }
`;

const LoginButton = styled.button`
  margin: 3rem auto;
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  width: 80%;
  color: white;
`;