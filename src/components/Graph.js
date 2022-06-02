import { useEffect, useRef, useState } from 'react';
import { Bar } from './Bar';
import './Graph.css'

export const Graph = () => {
  let ycomp = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const [data, setData] = useState([55, 60, 100, 85,15, 25, 95, 34, 63, 68, 73]);
  const timeoutRef = useRef();
  const [i, setI] = useState(0);
    const [j, setJ] = useState(0);

 const bubbleSort = ({ data, setData, i, j, setI, setJ }) => {
  let dataArray = [...data];
  const size = data.length;
  let swap = dataArray[j];

  if(j === size-i-1) {
      setJ(0); 
      setI(i+1);
  }
  
  if(i<size-1 && j<size-i-1) {
      if(swap > dataArray[j+1]) {
          dataArray[j]=dataArray[j+1];
          dataArray[j+1] = swap;
          setData(dataArray);
          setJ(j+1); 
      } else {
          setJ(j+1);
      }
  }
}
useEffect(()=>{
      timeoutRef.current = setTimeout(() => {
          bubbleSort({ data, setData, i, j, setI, setJ });
      }, 500);
  
}, [i,j]);

  return (
    <div className="graph">
      <h1>Graph</h1>
      <div className="graph-des">
        <div className="values">
          {ycomp.map((val) => {
            return <p>{val}</p>;
          })}
        </div>
        <div className="main-graph">
          <div className="rep">
            
            {
              data.map((val, index) => {
                return   <Bar value={val} index = {index}/>
              })
            }
          </div>
        
        </div>
      </div>
    </div>
  );
};
