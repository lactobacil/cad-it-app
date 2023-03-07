import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/index';
import '../Currency/style.scss'
import Title from '../../Title/title';
import Dates from '../Calendar/Notes/Dates'
import NoteInput from './NoteInput/NoteInput'

type Note = {
  note_id: string,
  note: string,
  title: string,
  priority: string,
  note_date: string,
};

const EmptyNote: Note = {
  note_id: "",
  note: "",
  title: "",
  priority: "",
  note_date: "",
}

const Calendar: React.FC = () => {

  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [noteDate, setNoteDate] = useState("");
  //const [notes, setNotes] = useState<Note>(EmptyNote);

  return (
    <>
      <Dates setModal={setModal} />
    </>
  )
}

export default Calendar;