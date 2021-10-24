
import React from 'react'
import styled from 'styled-components';
import Form from './Form/Form';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
`
const Text = styled.div`
`
const Status = styled.div`
`
const Addition = (props) => {
    
    return (
        <Div>
            <Text>Добавление товара</Text>
            {props.status ? <Status>Товар добавлен</Status> : null}
            <Form {...props}/>
        </Div>
    )
}

export default Addition;