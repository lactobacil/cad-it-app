import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../../../Components/Button/button";
import './NoteInput.scss';
import axios from "axios";
import Input from "../../../Components/Input/Input";
import InputNote from "../../../Components/Input/InputNote";
import moment from "moment";

type Note = {
    note_id: string,
    note: string,
    title: string,
    priority: string,
    note_date: string,
};
  
type Props = {
    currentNote:  Note,
    setModal: (val: boolean) => void,
    renderDelete: boolean,
    setRenderDelete: (renderDelete: boolean) => void;
}

const NoteInput: React.FC<Props> = ({
    currentNote,
    setModal,
    renderDelete,
    setRenderDelete,
}) => {
  
const [title, setTitle] = useState(currentNote.title);
const [note, setNote] = useState(currentNote.note);
const [priority, setPriority] = useState(currentNote.priority);
const [note_id, setNoteID] = useState(currentNote.note_id);
const [dateThis, setDateThis] = useState(currentNote.note_date);
const [requestState, setRequestState] = useState(false);
const [deleteState, setDeleteState] = useState(false);
const [initialFetch, setInitialFetch] = useState(false);

useEffect(() => {
  if (initialFetch) {
    const AddNote = async () => {
      try {
        const res = await axios.post('http://localhost:8080/calendar/update', {
            title: title,
            note: note,
            priority: priority,
            note_id: Number(note_id)
        })

        setRequestState(false);
      } catch (e) {
        console.log(e);
      }
    }
    AddNote();
  } else {
    setInitialFetch(true);
  }
},[requestState]);

useEffect(() => {
  if (initialFetch) {
    const AddNote = async () => {
      try {
        const res = await axios.post('http://localhost:8080/calendar/delete', {
              note_id: Number(note_id)
        })

        setRequestState(false);
      } catch (e) {
        console.log(e);
      }
    }
    AddNote();
  } else {
    setInitialFetch(true);
  }
},[deleteState]);


function handleRequest() {
  setDateThis(dateString);
  setRequestState(true);
  setRenderDelete(!renderDelete)
}

function handleDelete() {
  setDateThis(dateString);
  setDeleteState(true);
  setRenderDelete(!renderDelete)
}

let date = new Date(currentNote.note_date);
const dateString = moment(date).format("YYYY-MM-DD")

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
            <InputNote  placeholder={currentNote.title} value={title} onChange={(e) => setTitle(e.target.value)} text="" width={7} height={10}/>
            <InputNote placeholder={currentNote.note} value={note} onChange={(e) => setNote(e.target.value)} text="Note" width={7} height={10}/>
                 <form>
                    <label> Priority: </label>
                    <select onChange={changePriority}>
                        <option value="High">High</option>
                        <option value="Med">Low</option>
                        <option value="Low">Med</option>
                    </select>
                  </form>
                <div className="ModalToolbox">
                    <Button border="1px solid white" color="rgb(6, 77, 122)" onClick={() => handleRequest()} height = "20px" radius = "4px" width = "80px" children = "Update" />
                    <Button border="1px solid white" color="rgb(6, 77, 122)" onClick={() => handleDelete()} height = "20px" radius = "4px" width = "80px" children = "Delete" />
                    <Button border="1px solid white" color="rgb(6, 77, 122)" onClick={() => setModal(false)} height = "20px" radius = "4px" width = "80px" children = "Close" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default NoteInput;