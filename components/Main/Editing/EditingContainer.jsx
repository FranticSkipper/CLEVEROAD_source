import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router';
import { compose } from 'redux'
import { doc, getDoc, setDoc } from "firebase/firestore";
import Editing from './Editing'
import { db } from '../../../firebase/firebase';
import NoGood from './NoGood/NoGood';

const EditingContainer = (props) => {
    const [good, setGood] = useState({})
    const [isFetching, setIsFetching] = useState(false)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        setIsFetching(true)
        const getGood = async () => {
            const productId = props.match.params.productid
            const docRef = doc(db, "goods", productId);
            const docSnap = await getDoc(docRef);
            setGood(docSnap.data())
            setIsFetching(false)
        }
        getGood()
    }, [props.match.params.productid])

    const submit = async (product) => {
        await setDoc(doc(db, "goods", props.match.params.productid), product );
        setStatus(true)
    }   
    
    return (
        <>
            {!isFetching && Object.keys(good).length ? <Editing {...props} good={good} submit={submit} status={status}/> : <NoGood/>}
        </>
    )
}


export default compose(
    withRouter)(EditingContainer)
