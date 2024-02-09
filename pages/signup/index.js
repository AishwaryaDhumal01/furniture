import NoAuthLayout from '@/component/noAuthLayout';
import SignupPage from '@/component/signupPage'
import React from 'react'

const Signup = () => {
  return (
    <SignupPage/>
  )
}
Signup.getLayout = function getLayout(page) {
  return <NoAuthLayout>{page}</NoAuthLayout>;
};

export default Signup
