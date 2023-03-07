import React, { useState } from 'react';
import Button from '../../../Components/Button/button';
import './Memo.scss'
import NoteInput from '../NoteInput/NoteInput'
import ReactDOM from 'react-dom'

type Note = {
  note_id: string,
  note: string,
  title: string,
  priority: string,
  note_date: string,
};

type Props = {
    title: string,
    note: string,
    noteDate: string,
    priority: string,
    noteID: string,
    renderDelete: boolean,
    setRenderDelete: (renderDelete: boolean) => void;
}

const Memo: React.FC<Props> = (
  {
    title,
    note,
    noteDate,
    priority,
    noteID,
    renderDelete,
    setRenderDelete,
  }
) => {

  const[isModalTrue, setIsModalTrue] =  useState(false);

  function setNotesModal(isModal: boolean, notes: Note) {
    setIsModalTrue(isModal)
  }

  const currentNote: Note = {
    title: title,
    note: note,
    note_date: noteDate,
    priority: priority, 
    note_id: noteID,    
  }

  return (
    <>
    {isModalTrue && ReactDOM.createPortal(<NoteInput currentNote={currentNote} setModal={setIsModalTrue} renderDelete={renderDelete}  setRenderDelete={setRenderDelete} />, document.body)}
    {priority === "High" && <div className='MemoHigh'>
        <div className='MemoTitle' onClick= {() => setNotesModal(true, currentNote)}>{title}</div>
    </div>}
    {priority === "Low" && <div className='MemoLow'>
        <div className='MemoTitle' onClick= {() => setNotesModal(true, currentNote)}>{title}</div>
    </div>}
    {priority === "Med" && <div className='MemoMed'>
        <div className='MemoTitle' onClick= {() => setNotesModal(true, currentNote)}>{title}</div>
    </div>}
    </>
  )
}

export default Memo;