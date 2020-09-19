import React from 'react'
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../components/signin/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp