import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './StockTable';
import StockTable from './StockTable';

function App() {
  const [currentStock, setCurrentStock] = useState(null);
const [currentNumber, setCurrentNumber] = useState(10);
const[isFormSubmitted, setFormValue] = useState(false);

  // Get this options from API if available
  const selectOptions = [
    { value: "Stock1 ", label: "Stock 1" },
    { value: "Stock2", label: "Stock 2" },
    { value: "Stock3", label: "Stock 3" },
    { value: "Stock4", label: "Stock 4" },
    { value: "Stock5", label: "Stock 5" }
  ];
  const onOptionChanged = (e)=>{
    setCurrentStock(e.target.value);
  }
  const onNumberChanged = (e)=>{
    setCurrentNumber(e.target.value);
  }
  const submitForm= (e)=>{
    e.preventDefault();
    setFormValue(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Stocker!
        </p>
        </header>

        <form>
        <select className="stockOptions" onChange={onOptionChanged}>
          <option>Select stock</option>
          {selectOptions.map((data)=>{
            return <option value={data.value}>{data.label}</option>
          })}

        </select>
        <input onChange={onNumberChanged} type="number" id="period" className="period"  defaultValue="10"/>
        <div>
        <input type="submit" className="submitBtn" onClick={submitForm}/>
        </div>
        </form>
        {currentStock && currentNumber && isFormSubmitted&&
        <StockTable currentStock={currentStock} currentNumber={currentNumber}  ></StockTable>}
        <div>
  <canvas id="myChartPrice"></canvas>
  <canvas id="myChartSM"></canvas>

</div>
    </div>
  );
}

export default App;
