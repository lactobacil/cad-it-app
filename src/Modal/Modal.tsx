import React from "react";
import { useState } from "react";
import Button from "../Components/Button/button";
import './modal.css';
import useModalStore from "../zustandStore";
import axios from "axios";


const Modal: React.FC = () => {

  const {idState, setModal, setId} = useModalStore();

  const confirmDelete = () => {
      const Posts = async () => {
        try {
          const res = await axios.post('http://localhost:8080/currency/delete', {
            number_id: idState,
          })
          setId(0);
        } catch (e) {
          console.log(e);
        }
      };
      Posts();
    setModal(false);
  };

  return (
    <div className="Modal">
        <div className="ModalBox">
            <div className="ModalTitle" color="white"> Are you sure? </div>
            <div className="ModalToolbox">
                <Button border="1px solid white" color="rgb(6, 77, 122)" onClick={() => confirmDelete()} height = "20px" radius = "4px" width = "80px" children = "Confirm" />
                <Button border="1px solid white" color="rgb(6, 77, 122)" onClick={() => setModal(false)} height = "20px" radius = "4px" width = "80px" children = "Cancel" />
            </div>
        </div>
    </div>
  )
}

export default Modal;