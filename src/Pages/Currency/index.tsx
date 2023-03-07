import React, { useState } from 'react';
import Header from '../../Components/Header/index';
import Table from '../../Table';
import '../Currency/style.scss'
import Title from '../../Title/title';
import Toolbar from '../../Toolbar/toolbar';
import Modal from '../../Modal/Modal';
import useModalStore from "../../zustandStore"
import Chart from '../../Components/Chart/Chart';


const Currency: React.FC = () => {
  
  const { currentValue, currencyArea, modalState, chartState } = useModalStore();

  const renderModal = () => {
    if(modalState) {
      return <Modal/>
    }
  } 

  const renderChart = () => {
    if(chartState) {
      return <Chart Currency={currentValue} Country={currencyArea}/>
    }
  } 

  return (
    <>
    {renderModal()}
    {renderChart()}
    <div className="Container">
        <Header/>
        <Title title='Historical Currency'/>
      <div className="PageContainer">
        <div className="TableContainer">
          <Table/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Currency;