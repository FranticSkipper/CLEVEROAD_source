import React from 'react'

import styled from 'styled-components';
import Item from './Item/Item';

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
`
const Goods = (props) => {
    const goodsArr = props.goods.map((el, index)=> 
        <Item 
            key={index}
            id={el.id}
            title={el.title}
            description={el.description}
            cost={el.cost}
            discont={el.discont}
            deadline={el.discount_end_date}
            image={el.image_url}
        />
    )
    return (
        <Row>
            {goodsArr.length === 0 ? 'Товаров нет!' : null}
            { goodsArr }
        </Row>
    )
}

export default Goods;