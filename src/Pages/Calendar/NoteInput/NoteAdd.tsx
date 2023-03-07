import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../../../Components/Button/button";
import './NoteInput.scss';
import axios from "axios";
import InputNote from "../../../Components/Input/InputNote";
import moment from "moment";
  
type Props = {
    currentDate : Date,
    setModal: (val: boolean) => void,
    handleRender: (val: boolean) => void,
    renderStatus: boolean,
}

const NoteAdd: React.FC<Props> = ({
    currentDate,
    setModal,
    handleRender,
    renderStatus,
}) => {
  
const [title, setTitle] = useState("");
const [note, setNote] = useState("");
const [priority, setPriority] = useState("High");
const [dateThis, setDateThis] = useState(currentDate);
const [requestState, setRequestState] = useState(false);

function handleRequest() {
  const AddNote = async () => {
    try {
      const res = await axios.post('http://localhost:8080/calendar/add', {
          title: title,
          note: note,
          priority: priority,
          note_date: moment(currentDate).format("YYYY-MM-DD"),
      })
      setRequestState(false);
      handleRender(!renderStatus);
    } catch (e) {
      console.log(e);
    }
  }
  AddNote();
}

const dateString = moment(currentDate).format("YYYY-MM-DD")

  const changePriority = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setPriority(value);
  };

  return (
    <div className="Modal">
        <div className="NoteBorder">
            <div className="NoteInputBox">
              <div className="InputBoxHeader">
                <div className="Date"> Title </div>
                <div className="Date"> Date:  <span className="DateBox"> {dateString} </span> </div>
              </div>
            <InputNote  placeholder={""} value={title} onChange={(e) => setTitle(e.target.value)} text="" width={7} height={10}/>
            <InputNote placeholder={""} value={note} onChange={(e) => setNote(e.target.value)} text="Note" width={7} height={10}/>
                 <form>
                    <label> Priority: </label>
                    <select onChange={changePriority}>
                        <option value="High">High</option>
                        <option value="Med">Low</option>
                        <option value="Low">Med</option>
                    </select>
                  </form>
                <div className="ModalToolbox">
                    <Button border="1px solid white" color="rgb(6, 77, 122)" onClick={() => handleRequest()} height = "20px" radius = "4px" width = "80px" children = "Submit" />
                    <Button border="1px solid white" color="rgb(6, 77, 122)" onClick={() => setModal(false)} height = "20px" radius = "4px" width = "80px" children = "Close" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default NoteAdd;