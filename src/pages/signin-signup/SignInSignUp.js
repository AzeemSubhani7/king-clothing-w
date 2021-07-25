import React, { useEffect } from 'react';
import './SignInSignUp.scss';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signup/signup';

const SignInSignUp = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    } ,[])
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUp;