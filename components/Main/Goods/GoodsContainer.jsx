import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Goods from './Goods';
import NoGoods from './NoGoods/NoGoods';

const GoodsContainer = (props) => {
    const [isFetching, setIsFetching] = useState(false)
    const [goods, setGoods] = useState([])

    const arrayIsEqual = (arr1, arr2) => 
        (arr1 === arr2) || ((arr1.length === arr2.length) && arr1.every((f,i) => 
        (f.id === arr2[i].id) &&
        (f.title === arr2[i].title))
    )

    useEffect(() => {
        setIsFetching(true)
        const getGoods = async () => {
            const userCollectionRef = await getDocs(collection(db, "goods"));
            const data = []
            userCollectionRef.forEach((el) => {
                data.push({...el.data(), id: el.id})
            });
            if(!arrayIsEqual(data, goods)){
                setGoods(data)
            }
            setIsFetching(false)
        }
        getGoods()
    }, [goods])
    
    return(
        <>
            {!isFetching ? <Goods {...props} goods={goods}/> : <NoGoods {...props}/>}
        </>
    )
}

export default GoodsContainer
