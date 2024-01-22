import React from 'react'
import  '../../../styles/Buttons.css'
import { useState } from 'react'
import { MeterEval } from './AIModels/MeterEval'
import { IOTEval } from './AIModels/IOTEval'
import { SolarEval } from './AIModels/SolarEval'
import { BatteryEval } from './AIModels/BatteryEval'

export const MLModelEvaluation = () => {
  const [meter, setMeter] = useState('');
  return (

    <div className="table-wrapper">
      <br></br>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <button className='light-grey curved-corners selection-button' onClick={(e) => setMeter('iot')} >
          IOT
        </button>
        <button className='light-grey curved-corners selection-button' onClick={(e) => setMeter('meter')}>
          Meter
        </button>
        <button className='light-grey curved-corners selection-button' onClick={(e) => setMeter('solar')}>
          Solar
        </button>
        <button className='light-grey curved-corners selection-button' onClick={(e) => setMeter('battery')}>
          Battery
        </button>
      </div>
      {meter === 'meter' && <MeterEval />}
      {meter === 'iot' && <IOTEval/>}
      {meter === 'solar' && <SolarEval/>}
      {meter === 'battery' && <BatteryEval/>}
    </div>
  )
}
