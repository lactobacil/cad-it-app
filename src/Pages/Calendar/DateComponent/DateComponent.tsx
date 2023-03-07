import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Button from '../../../Components/Button/button';
import './DateComponent.scss';
import Memo from '../Memo/Memo';
import ReactDOM from 'react-dom'
import NoteAdd from '../NoteInput/NoteAdd';
import axios from 'axios';

type Note = {
    note_id: string,
    noteContent: string,
    title: string,
    priority: string,
    note_date: string,
};

type Props = {
    date: string;
    day:  number;
    dateMonth: Date;
    notes: Note[];
}

const DateIcon: React.FC<Props> = ({
    date,
    day,
    notes,
    dateMonth,
}) => {
    const[isModalTrue, setIsModalTrue] = useState(false);
    const[render, setRender] = useState(false);
    const[initFetch, setInitFetch] = useState(false);
    const [renderDelete, setRenderDelete] = useState(false);
    const [statusRender, setRenderForce] = useState(false);
    const monthString = ["01","02","03","04","05","06","07","08","09","10","11","12"];

    let notesSorted = notes.sort((a,b) => a.priority.localeCompare(b.priority)); 

    useEffect(() => {

        if (initFetch) {
        if (day !== 0) {
                const Posts = async () => {
                try {
                    const res = await axios.post('http://localhost:8080/calendar/day', {
                        year: dateMonth.getFullYear().toString(),
                        month: monthString[dateMonth.getMonth()],
                        day: date,
                    })
                    notesSorted.length = 0  
                    for (let i in res.data.data) {
                        let noteCurrent: Note = {
                            note_id: res.data.data[i].note_id,
                            title: res.data.data[i].title,
                            priority: res.data.data[i].priority,
                            noteContent: res.data.data[i].note,
                            note_date: res.data.data[i].note_date,
                        }
                    notesSorted.push(noteCurrent);
                    console.log(notesSorted);
                    }
                setRenderForce(!statusRender);
                } catch (e) {
                    console.log(e);
                }
                }
                Posts();
            }
        } else {
            setInitFetch(true);
        }
    },[render, renderDelete])

    const renderMemo = notesSorted.map((val, key) => {
        return (  
            <Memo 
                key={key}
                title={val.title} 
                note={val.noteContent} 
                priority={val.priority} 
                noteDate={val.note_date} 
                noteID={val.note_id}
                renderDelete={renderDelete}
                setRenderDelete={setRenderDelete}
                />
        );  
    });

    function handleRequest( ) {
        setIsModalTrue(true)
    }

    return (
        <>
        {isModalTrue && ReactDOM.createPortal(<NoteAdd currentDate={dateMonth} handleRender={setRender} renderStatus={render} setModal={setIsModalTrue} />, document.body)}
        <div className='DateHeader'>
            <div className="DateNumber">
                {day % 7 == 0 && <div className="DateNumberHoliday"> {date} </div>}
                {day % 7 == 6 && <div className="DateNumberHoliday"> {date} </div>}
                {!(day % 7 == 6) && !(day % 7 == 0) && <div className="DateNumberWeekday"> {date} </div>}
            </div>
            <div className = "NoteIcon">
                {day !== 0  && <Button color='blue' onClick={() => handleRequest()}/>}
            </div>
        </div>
        <div className='MemoContainer'>
            {renderMemo}
        </div>
        </>

        
    )
  
}

export default DateIcon;