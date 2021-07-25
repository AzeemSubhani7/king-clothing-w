import React from 'react';

import FormInput from '../forminput/formInput';
import CustomButton from '../button/button';
import GoogleButton from '../button/googleButton';
import './signIn.scss';
import { signInWithGoogle, auth } from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handerSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
        }
        catch(error){
            console.error(error)
        }

        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handerSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='Email'
                    required />
                    
                    <FormInput 
                    name='password' 
                    type='password'
                    label='Password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    required />
                    
                    <div className='button-container' style={{ display: 'flex', justifyContent: 'center' }} >
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <GoogleButton 
                    type='submit'
                    onClick={signInWithGoogle} ><i className="fab fa-google"></i>   Sign In with Google</GoogleButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;