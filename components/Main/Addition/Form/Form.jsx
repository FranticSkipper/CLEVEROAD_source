import React, { useState } from 'react'
import styled from 'styled-components';
import { Timestamp } from '@firebase/firestore';

const FormField = styled.form`
    width: 600px;
    display: flex;
    flex-direction: column;
`
const Row = styled.div`
    &:not(:last-child){
        margin-bottom: 10px;
    }
`
const Input = styled.input`
    height: 40px;
    width: 100%;
    border-radius: 15px;    
    padding: 0 15px;
`
const Img = styled.div`
    min-height: 200px;
    min-width: 200px;
    max-height: 4000px;
    max-width: 4000px;
    & img{
        display: block;
        width: 100%;
        object-fit: cover;
    }
`
const Text = styled.div`
    margin-bottom: 5px;
`
const Button = styled.button`
    height: 30px;
    border: none;
    border-radius: 15px;
    background-color: #e95d2a;
    cursor: pointer;
    &:not(:last-child){
        margin-bottom: 5px;
    }
`

const Form = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [discont, setDiscont] = useState('')
    const [cost, setCost] = useState('')
    const [image, setImage] = useState('')

    const checkTitle = () => {
        const titleLen = title.length
        if(title){
            if(titleLen >= 20 && titleLen <= 60)
                return true
            else
                return false
        }else{
            return false
        }
        
    }
    const checkImage = () => {
        if(image)
            return true
        else
            return false
    }
    const checkDescription = () => {
        if(description){
            if(description.length <= 200)
                return true
            else
                return false
        }else{
            return true
        }
    }
    const checkCost = () => {
        const MAX_COST_VALUE = 99999999.99
        if(cost){
            if(cost > 0 && cost <= MAX_COST_VALUE)
                return true
            else
                return false
        }else{
            return false
        }
        
    }
    const checkDiscount = () => {
        if(discont){
            if(discont >= 10 && discont <= 90 && date && time)
                return true
            else
                return false
        }else{
            return true
        }
    }
    const checkDate = () => {
        const nowDate = new Date()
        const deadlineDate = new Date(date + ',' + time)
        if(discont && date && time){
            if(deadlineDate > nowDate)
                return true
            else
                return false
        }else if(!discont && !date && !time){
            return true
        }else{
            return false
        }
        
    }
    const delDiscont = (e) => {
        e.preventDefault()
        setDate('')
        setTime('')
        setDiscont('')
    }
    const checkSubmit = () => {
        if( checkTitle() &&
            checkImage() &&
            checkDescription() &&
            checkCost() &&
            checkDiscount() &&
            checkDate() 
            ) {
                const product = {
                        title: title,
                        image_url: image,
                        description : description ? description : null,
                        cost: Number(cost),
                        discont : discont ? Number(discont): null,
                        discount_end_date: discont ? Timestamp.fromDate(new Date(date + ',' + time)) : null
                }
                props.submit(product)
            }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
            <FormField onSubmit={handleSubmit}>
                <Row>
                    <Text>Заголовок</Text>
                    <Input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} minLength="20" maxLength="60" required/>
                </Row>
                <Row>
                    <Text>Ссылка на фото</Text>
                    <Input type="text" onChange={(e)=>setImage(e.target.value)} value={image} required/>
                    {image ? <Img><img src={image} alt={image}/></Img> : null}
                    
                </Row>
                <Row>
                    <Text>Описание товара</Text>
                    <Input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} maxLength="200" />
                </Row>
                <Row>
                    <Text>Цена</Text>
                    <Input type="number" onChange={(e)=>setCost(e.target.value)} value={cost} step="any" min='0.01' max='99999999.99' required/>
                </Row>
                <Row>
                    <Text>Процент скидки</Text>
                    <Input type="number" onChange={(e)=>setDiscont(e.target.value)} value={discont} step="1" min='10' max='90'/>
                </Row>
                <Row>
                    <Text>Дата окончания скидки</Text>
                    <Input type="date" onChange={(e)=>setDate(e.target.value)} value={date} />
                </Row>
                <Row>
                    <Text>Время окончания скидки</Text>
                    <Input type="time" onChange={(e)=>setTime(e.target.value)} value={time} />
                </Row>
                <Button onClick={delDiscont}>Удалить скидку</Button>
                <Button onClick={checkSubmit}>Применить</Button>
            </FormField>
    )
}

export default Form;