import React, { useState } from 'react';
import Header from '../../Components/Header/index'
import '../Currency/style.css'
import Title from '../../Title/title';
import Modal from '../../Modal/Modal';
import useModalStore from "../../zustandStore"
import Chart from '../Currency/index';
import '../Login/login.css'
import LoginBox from '../../LoginBox/LoginBox'


const Login: React.FC = () => {

  return (
    <>
    <div className="Container">
        <Header/>
        <div className='LoginContainer'>
            <LoginBox/>
        </div>
    </div>
    </>
  )
}

export default Login;