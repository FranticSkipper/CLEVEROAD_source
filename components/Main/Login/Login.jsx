import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
    margin-bottom: 20px;
`
const Username = styled.div`
    
    margin-bottom: 50px;
    & span{
        text-transform: uppercase;
     }
`
const Button = styled.button`
    width: 600px;
    height: 30px;
    border: none;
    border-radius: 15px;
    background-color: #e95d2a;
    cursor: pointer;

    color: #fff;
    &:not(:last-child){
        margin-bottom: 5px;
    }
`
const Login = (props) => {
    return (
        <Div>
            {props.isAuth ? <Username>С подключением <span>{props.user.displayName}</span></Username> : null}
            <Title>Авторизация</Title>    
            {!props.isAuth ? <Button onClick={props.login}>Авторизоваться через Google</Button> : null}
            {props.isAuth ? <Button onClick={props.logout}>Выйти</Button> : null}
            
        </Div>
    )
}

export default Login;