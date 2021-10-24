import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Timestamp } from '@firebase/firestore';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../../../firebase/firebase';

const Wrapper = styled.div`
    flex: 0 1 25%;
    padding: 0 10px;
`
const Body = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid gold;
`
const Top = styled.div`
    margin-bottom: 20px;
    max-width: 100%;
`
const Image = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
`
const Footer = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    margin-bottom: 5px;
    text-align: center;
    font-weight: 700;

`
const Description = styled.div`
    margin-bottom: 10px;
`
const Row = styled.div`
    display: flex;
    justify-content: space-between;

`
const Action = styled.div`
`
const ShowCost = styled.div`
    display: flex;
    flex-direction: column;
`
const Cost = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
`
const Text = styled.div`

`
const NewCost = styled.div`
    color: rgb(2, 121, 45);
`
const OldCost = styled.div`
    text-decoration: ${props => props.discont && props.deadline ? 'line-through' : 'none'};
    color: ${props => props.discont && props.deadline ? 'rgb(255, 67, 70)' : 'none'};
`
const Button = styled.button`
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 15px;
    background-color: #e95d2a;
    cursor: pointer;
    &:not(:last-child){
        margin-bottom: 5px;
    }
`
const Link = styled(NavLink)`
    display: block;
    width: 100%;
`

const Item = (props) => {
    const getCostWithDiscont = (cost, discont) => {
        return Math.round(cost - (cost * (discont / 100)));
    }
    const isDeadline = (deadline) => {
        const nowTimestamp = Timestamp.now()
        if(nowTimestamp < deadline ){
            return true
        }
        else{
            return false
        }
    }
    const getActionDuration = (deadline) => {
        if(isDeadline(deadline)){
            const now = new Date()
            const deadlineDate = deadline.toDate()
            const daysLeft = Math.floor((deadlineDate.getTime() - now.getTime())/(1000*60*60*24));
            
            return "Дней до окончания акции - " + daysLeft
        }
    }
    const delGood = async () => {
        await deleteDoc(doc(db, "goods", props.id));
        window.location.reload();
    }
    return (
        <Wrapper>
            <Body>
                <Top>
                    <Image src={props.image} alt="#" />
                </Top>
                <Footer>
                    <Title>{props.title}</Title>
                    <Description>{props.description}</Description>
                    <Cost>
                        <Row>
                            <Text>Цена</Text>
                            <ShowCost>
                                {props.discont && isDeadline(props.deadline) ? <NewCost>{getCostWithDiscont(props.cost, props.discont)}</NewCost>: null}
                                <OldCost {...props} deadline={isDeadline(props.deadline)} >{props.cost}</OldCost>
                            </ShowCost>
                        </Row>
                        <Action>{getActionDuration(props.deadline)}</Action> 
                    </Cost>
                    <Button onClick={delGood}>Удалить</Button>
                    <Link to={"/edit/"+props.id}>
                        <Button>Редактировать</Button>
                    </Link>
                    
                </Footer>
            </Body>
        </Wrapper>
    )
}

export default Item;
