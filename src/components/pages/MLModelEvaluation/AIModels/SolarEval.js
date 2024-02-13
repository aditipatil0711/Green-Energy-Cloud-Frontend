import React from 'react'
import '../../../../styles/Buttons.css'
import { useState,useEffect } from 'react'
import TableData from '../../../MLModelData/TableData'
import Axios from "axios";

export const SolarEval = () => {
 // const [iot, setiot] = useState('');
 const [prediction, setPrediction] = useState(null);
 const [r2_prediction, setR2Prediction] = useState(null);

 const fetchprediction = async () => {

    const response1 = await Axios.get('http://localhost:4001/api/solar_model/getPrediction');
    const response2 = await Axios.get('http://localhost:4001/api/solar_model/getR2Prediction');
    setPrediction(response1.data);
    setR2Prediction(response2.data);
    console.log(response1.data);
    console.log(response2.data);
}
useEffect(() => {
  fetchprediction();
}, []);
  return (

    <div className="table-wrapper">
      <br></br>
      <div style={{ display: 'flex', justifyContent: "center" }}>
      <TableData/>
      </div>

      <div  >
        <div>
          <button className='light-grey curved-corners selection-button'> <input type='file'></input> 
          </button><br></br><br></br>
        </div>
      </div>


      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
   
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        {prediction && prediction.performance_metrics && (
            <div>
                <h3>Performance Metrics On Solar App:</h3>
                <p>Hourly: {prediction.performance_metrics.solar_hourly}</p>
                <p>Weekly: {prediction.performance_metrics.solar_weekly}</p>
            </div>
        )}
        {prediction && prediction.weekly_average !== null ? (
            <div>
                <h3>Weekly Average:</h3>
                <p>{prediction.weekly_average}</p>
            </div>
        ) : (
            <div>No Weekly Average Data Available</div>
        )}
    </div>

    
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        {r2_prediction && r2_prediction.performance_metrics && (
            <div>
                <h3>Performance Metrics in Two Step Method:</h3>
                <p>R2 Hourly: {r2_prediction.performance_metrics.r2_hourly}</p>
                <p>R2 Weekly: {r2_prediction.performance_metrics.r2_weekly}</p>
            </div>
        )}
        {r2_prediction && r2_prediction.weekly_average !== null ? (
            <div>
                <h3>Weekly Average:</h3>
                <p>{r2_prediction.weekly_average}</p>
            </div>
        ) : (
            <div>No Weekly Average Data Available</div>
        )}
    </div>
</div>
<br></br><br></br>

      <div>
      <button className='light-grey curved-corners selection-button'>
          Train
        </button>
        <button className='light-grey curved-corners selection-button'>
            Test
        </button>
        <button  className='light-grey curved-corners selection-button'>
            Evaluate
        </button>
       
          
          </div>
    </div>
   
    
    
  )
}
 // {meter === 'meter' && <MeterMonitor/>}
    // {meter === 'iot' && <IOTMonitor/>}
    // {meter === 'solar' && <SolarMonitor/>}
    