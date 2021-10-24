import React from 'react'
import { connect } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from '../../../firebase/firebase';
import Login from './Login';
import {
    GoogleAuthProvider,
    signInWithPopup
        } from "firebase/auth";
import {
    isAuthActionCreator,
    getUserActionCreator
        } from "../../../redux/login-reducer"

const LoginContainer = (props) => {
    const login = async () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                if(user){
                    props.getUserActionCreator(user)
                    props.isAuthActionCreator(true)
                }
            }).catch((error) => {});     
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                    props.getUserActionCreator({})
                    props.isAuthActionCreator(false)
            })
            .catch((error) => {}); 
    }
    
    return(
        <>
           <Login {...props} login={login} logout={logout}/>
        </>
        
    )
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.login.isAuth,
        user: state.login.user
    }
}
export default connect(mapStateToProps, {
    isAuthActionCreator,
    getUserActionCreator
})(LoginContainer)
