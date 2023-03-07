import React from "react";
import { useState } from "react";
import './LoginBox.css'
import Button from '../Components/Button/button';
import Input from "../Components/Input/Input";
import axios from "axios";



const Toolbar: React.FC = () => {
  const [id, setId] = useState("");

  const Posts = async () => {
    try{
      const res = await axios.post('http://localhost:8080/login', {

      })
    } catch (e) {
      console.log(e);
    }
  };
  
    return (
      <div className="LoginToolbox">
          <div className="LoginTitle">Login</div>
          <div className="LoginInputBox">
            <div className="InputComponent">
              <Input value={id} onChange={(e) => setId(e.target.value)} text="" width={14} height={10}/>
            </div>
            <div className="InputComponent">
              <Input value={id} onChange={(e) => setId(e.target.value)} text="" width={14} height={10}/>
            </div>
            <div className="InputComponent">
              <Input value={id} onChange={(e) => setId(e.target.value)} text="" width={14} height={10}/>
            </div>
            <div className="InputComponent">
              <Input value={id} onChange={(e) => setId(e.target.value)} text="" width={14} height={10}/>
            </div>
          </div>
          <div className="LoginButtonBox">
            <Button border='none' color="rgb(6, 77, 122)" height="20px" width="80px" radius="4px"> Confirm </Button>
            <Button border='none' color="rgb(6, 77, 122)" height="20px" width="80px" radius="4px"> Cancel </Button>
          </div>
      </div>
    )
  }
  
  export default Toolbar;