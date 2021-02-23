import React from 'react';

import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SingUp from '../../components/sign-up/sign-up.component';

const SignInAndSingUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SingUp />
    </div>
)

export default SignInAndSingUpPage;