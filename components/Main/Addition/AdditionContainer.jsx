import React, { useState } from 'react'
import { withRouter } from 'react-router';
import { compose } from 'redux'
import { db } from '../../../firebase/firebase';
import { addDoc, collection } from "firebase/firestore";
import Addition from './Addition';

const AdditionContainer = (props) => {
    const [status, setStatus] = useState(false)

    const submit = async (product) => {
        await addDoc(collection(db, "goods"), product );
        setStatus(true)
    }
    
    return (
        <>
            <Addition {...props} submit={submit} status={status}/>
        </>
    )
}


export default compose(
    withRouter)(AdditionContainer)
