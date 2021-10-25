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

const Editing = (props) => {
    const getDateFromTimestamp = (timestamp) => {
        if(timestamp){
            const date = timestamp.toDate()
            return {
                date: date.toLocaleDateString('fr-CA'),
                time: date.toLocaleTimeString()
            }
        }else{
            return false
        }
    }     
    return (
        <Div>
            <Text>Редактирование товара</Text>
            {props.status ? <Status>Товар изменен</Status> : null}
            <Form {...props} date={getDateFromTimestamp(props.good.discount_end_date)}/>
        </Div>
    )
}

export default Editing;