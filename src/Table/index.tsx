import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import './table.css';
import Toolbar from '../Toolbar/toolbar';
import axios from 'axios';
import Modal from '../Modal/Modal'
import useModalStore from '../zustandStore';
import { serialize } from 'v8';

const Table: React.FC = () => {
  const[history, setHistory] =  useState<any[]>([]);
  const [active, setActive] = useState(0);

  const {setId, setChart, setCurrency, setArea, idState, chartState, modalState, addState} = useModalStore();

  const setActiveRow = (id : number) => {
    setActive(id);
    setId(id);
  };

  useEffect(() => {
    const Posts = async () => {
      try {
        const res = await axios.get('http://localhost:8080/currency/history')
        setHistory(res.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    Posts();
  },[modalState, idState, chartState, addState]);


  const SetGraph = ( isState : boolean, currentValue: number, country: string) => {
    setChart(true);
    setCurrency(currentValue);
    setArea(country);
  }

  return (
    <div className="ContainerInner">
      <div className="TableContainerInner">
        <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Country</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
                  {history.map((val, key) => {
                    if (active !== val.history_id) {
                      return (
                          <tr key={key} onClick={() => setActiveRow(val.history_id)}>
                            <td>{val.history_id}</td>
                            <td>{val.country}</td>
                            <td>{val.value}</td>
                          </tr>
                      )
                    } else {
                      return (
                        <tr key={key} onClick={() => SetGraph(true, val.value, val.country)} style={{backgroundColor: 'gray'}}>
                          <td>{val.history_id}</td>
                          <td>{val.country}</td>
                          <td>{val.value}</td>
                        </tr>
                      )
                    }
                  })}
            </tbody>
          </table>
        </div>
      <Toolbar currentId={active}/>
    </div>
  )
}

export default Table;
