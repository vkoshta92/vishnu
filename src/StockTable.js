import './App.css';
import React, { useEffect, useState } from 'react';
import {Chart} from "chart.js";

function StockTable({currentStock, currentNumber}) {
  const [currentData, setCurrentData] = useState([]);



  useEffect(() => {
    const months = ["Jan","Feb","Mar","Apr","May","Jul","Aug","Sep","Oct","Nov","Dec"];

    console.log(currentStock,currentNumber);
    const data=[]
    const   dates = [];
    const prices=[];
    const smValues = [];
      //Get this options from API if available
    for(let i=0;i<currentNumber;i+=1)
    {
      const date = new Date();
      
      date.setDate(date.getDate() - i); 
      const price = Math.floor((Math.random() * 100) + 50);
        const smCount = Math.floor((Math.random() * 100)+1);
            data.push({
        date: `${date.getDate()} ${ months[date.getMonth()]} ${date.getFullYear()}`,
        Price: `$${price}`,
        smCount,
        recommendation:["Hold", "Buy", "Sell"][ Math.floor((Math.random() * 3))]
      })
      dates.push(`${date.getDate()} ${ months[date.getMonth()]} ${date.getFullYear()}`);
      prices.push(`${price}`);
      smValues.push(smCount);
    }
    setCurrentData(data.reverse());
    
    function setChart(values, elementId){
      var xValues = dates;
      var yValues = values;
      var barColors = xValues.map(data=>'blue');
      
      new Chart(elementId, {
        type: "bar",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "Stock bar chart"
          }
        }
      });}
      setChart(prices,"myChartPrice");
      setChart(smValues,"myChartSM");

  }, [currentNumber, currentStock]);
  return (
    <div className="StockTable">
      <div className="stockTableTitle">Stock table</div>
      <table>
        <thead>
       <tr> <th>Date</th>
        <th>Price</th>
        <th>S.M. Count</th>
        <th>Recommendation</th></tr>
        </thead>
        <tbody>
            {currentData.map((data)=>{
              return <tr>
<td>{data.date}</td>
<td>{data.Price}</td>
<td>{data.smCount}</td>
<td>{data.recommendation}</td>
              </tr>
            })}
            </tbody>
      </table>
      
    </div>
  );
}

export default StockTable;
