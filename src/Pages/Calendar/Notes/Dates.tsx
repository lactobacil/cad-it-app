import React, { useEffect, useState } from 'react';
import './dates.scss'
import moment from 'moment';
import DateIcon from '../DateComponent/DateComponent';
import axios from 'axios';
import { stringify } from 'querystring';
import { getDaysInMonth, getFirstDayInMonth } from './GenerateCalendar';

type Note = {
  note_id: string,
  note: string,
  title: string,
  priority: string,
  note_date: string,
};

type Props = {
  setModal: (val: boolean) => void;
};

const Dates: React.FC<Props> = ({
  setModal,
}
) => {
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState(2023);
  const [arrayNote, setNoteArray] = useState<Note[]>([]);
  const [renderStatus, setRenderStatus] = useState(false);

  const dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let days: any = [];

  for (let i = 0; i < 7; i++) {
    days.push(<div className='Days' key={i}>{dayName[i]}</div>);
  }
  
  useEffect(() => {
    //setFetchStatus(true); 
    const noteArrayEmpty: Array<Note> = [];
    const Posts = async () => {
      try {
        const res = await axios.post('http://localhost:8080/calendar/notes', {
            year: year.toString(),
            month: month.toString(),
        })

        const noteArray: Array<Note> = [];

        for (let i in res.data.data) {
          let noteCurrent: Note = {
            note_id: res.data.data[i].note_id,
            title: res.data.data[i].title,
            priority: res.data.data[i].priority,
            note: res.data.data[i].note,
            note_date: res.data.data[i].note_date,
          }
          noteArray.push(noteCurrent);
        }
        setNoteArray(noteArray);

      } catch (e) {
        console.log(e);
      }
    }
    Posts();
    DateIndicator(month, year);
    setNoteArray(noteArrayEmpty);
  },[month, year, renderStatus]);
  
  function getDatesDisplay(month: string, year: number) {
    const datesInMonth = [];
    const getMonth = Number(month) - 1;
    const appendDays = getDaysInMonth(month, year)
    let firstDayInMonth =  getFirstDayInMonth(getMonth.toString(), year)

    if (firstDayInMonth == 0) {
      firstDayInMonth = 7;
    }

    for (let j = 1; j < 36; j++) {
      let currentDate = j + 1 - firstDayInMonth
      let currentDay = new Date(year, Number(month) - 1, currentDate).getDay()  

      if (currentDay == 0) {
        currentDay = 7;
      }

        if (j < firstDayInMonth || j + 1 > (appendDays + firstDayInMonth)) {
          const noteArrayTemp: any = [];
            datesInMonth.push({
            day: 0,
            date: "",
            firstDay:"",
            dateMonth: moment(`${month}-${currentDate}-${year}`, 'MM-DD-YYYY').toDate(),
            notes: noteArrayTemp,
          });
        } else {
          const noteArrayTemp = [];
          for (let i in arrayNote) {
            if (arrayNote[i].note_date.includes(`${year}-${month}-${('0' + currentDate).slice(-2)}`)) {
                console.log(arrayNote[i].note);
                noteArrayTemp.push({
                  note_id: arrayNote[i].note_id,
                  title: arrayNote[i].title,
                  priority: arrayNote[i].priority,
                  note: arrayNote[i].note,
                  noteContent: arrayNote[i].note,
                  note_date: arrayNote[i].note_date
                })
            }
          }
          datesInMonth.push({
            date: currentDate.toString(),
            day: currentDay,
            firstDay: firstDayInMonth,
            dateMonth: moment(`${month}-${currentDate}-${year}`, 'MM-DD-YYYY').toDate(),
            notes: noteArrayTemp,
          });
      }
    } 
    return datesInMonth;
  }

  function DateIndicator (month: string, year: number ) { 
    
    const datesInMonth = getDatesDisplay(month, year);
    const monthDates = datesInMonth.map((val, key) => { 
      //console.log("TestNote");
      //console.log(val.notes);
      return (
        <>
        <div  className="DateIcon" key={key} >  
          <DateIcon key={key} date={val.date} day={val.day} notes={val.notes} dateMonth={val.dateMonth} />
        </div>  
        </> 
      );  
  });

  return <div className="DaysContainer">
    {days}
    {monthDates}
    </div>;  
  };

  const changeMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setMonth(value);
  };

  const changeYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setYear(Number(value));
  };

  return (
    <>
      <div className="DatesContainer">
        <div className="ToolboxContainer">
          <form>
            <label>Month : </label>
              <select onChange={changeMonth}>
                <option value="01">Jan</option>
                <option value="02">Feb</option>
                <option value="03">Mar</option>
                <option value="04">Apr</option>
                <option value="05">May</option>
                <option value="06">Jun</option>
                <option value="07">Jul</option>
                <option value="08">Aug</option>
                <option value="09">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
            </select>
          </form>
          <form>
            <label>Year : </label>
              <select  onChange={changeYear}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
          </form>
        </div>

        <div className="CalendarContainer">
              {DateIndicator(month, year)}
        </div>
      </div>
    </>
  )
}

export default Dates;