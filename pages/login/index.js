import LayoutPage from '@/component/layout';
import LoginPage from '@/component/loginPage'
import NoAuthLayout from '@/component/noAuthLayout';
import React from 'react'

const Login = () => {
  return (
   <LoginPage/>
  )
}

Login.getLayout = function getLayout(page) {
  return <NoAuthLayout>{page}</NoAuthLayout>;
};

export default Login;
