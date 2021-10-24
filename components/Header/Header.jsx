import React from 'react'
import Menu from './Menu/Menu';
import styled from 'styled-components';

const Row = styled.div`
    background: #293358;
`
const Inner = styled.div`
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;

    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Header = () => {
    return (
        <Row>
            <Inner>
                <Menu/>
            </Inner>
        </Row>
    )
}

export default Header;