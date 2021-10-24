import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Nav = styled.nav`
`
const List = styled.ul`
    display: flex;
`
const Item = styled.li`
    &:not(:last-child){
        margin-right: 25px;
    }
    & a{
        display: block;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        transition: .3s linear;
        &:hover{
            color: rgb(184, 52, 15);
        }
    }
`
const Menu = () => {
    return (
        <Nav>
            <List>
                <Item>
                    <NavLink to="/auth">Авторизация</NavLink>
                </Item>
                <Item>
                    <NavLink to="/goods">Список товаров</NavLink>
                </Item>
                <Item>
                    <NavLink to="/add">Добавить новый товар</NavLink>
                </Item>
            </List>
        </Nav>
    )
}

export default Menu;