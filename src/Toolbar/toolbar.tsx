import useModalStore from "../zustandStore";
import React from "react";
import { useState } from "react";
import Button from "../Components/Button/button";
import Input from "../Components/Input/Input";
import axios from "axios";
import create from 'zustand';
import './toolbar.css';

type Props = {
    currentId : number;
}

const Toolbar: React.FC<Props> = ({currentId}) => {
  const [country, setCountry] = useState("");
  const [value, setValue] = useState("");
  const [mode, setMode] = useState("");

  const {setModal, setDelete, deleteState, setAdd, idState} = useModalStore();
  
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (mode === "add") {
      setAdd(true);
      const Posts = async () => {
        try{
          const res = await axios.post('http://localhost:8080/currency/add', {
            country: country,
            value: Number(value),
          })
        } catch (e) {
          console.log(e);
        }
        setAdd(false);
      };
      Posts();
    } else if (mode === "delete" && idState !== 0) {
      setModal(true);
    }

    console.log(currentId);
    console.log(country);
    console.log(value);
    console.log(mode);
  }

  return (
    <div className="ToolbarContainer">
      <form onSubmit={submitForm}>
        <div className="ToolbarContainer">
        <Input value={country} onChange={(e) => setCountry(e.target.value)} text="Country: " width={7} height={10}/>
        <Input value={value} onChange={(e) => setValue(e.target.value)} text="Value: " width={7} height={10}/>
        <Button border="none" color="rgb(6, 77, 122)" height = "20px" onClick={() => setMode("add")} radius = "4px" width = "80px" children = "Add" />
        <Button border="none" color="rgb(6, 77, 122)" height = "20px" onClick={() => setMode("delete")} radius = "4px" width = "80px" children = "Delete" />
        </div>
      </form>
    </div>
  )
}

export default Toolbar;


