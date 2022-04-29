import React from 'react';
import { SignUpForm } from '../components/SignUpForm';

function SignUp() {
  return (
    <div className='container-fluid big-cart'>
        <div className='row'>
            <div className='col-12 mx-auto text-center my-5'>
                <h1 className='mb-4'>Sign Up</h1>
                <SignUpForm/>
            </div>
        </div>
    </div>
  )
}

export default SignUp