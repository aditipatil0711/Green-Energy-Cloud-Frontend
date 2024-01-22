import React from 'react'
import  '../../../styles/Buttons.css'
import { useState } from 'react'
import { MeterMonitor } from './AIModels/MeterMonitor'
import { IOTMonitor } from './AIModels/IOTMonitor'
import { SolarMonitor } from './AIModels/SolarMonitor'
import { BatteryMonitor } from './AIModels/BatteryMonitor'

export const MLModelMonitor = () => {
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
      {meter === 'meter' && <MeterMonitor />}
      {meter === 'iot' && <IOTMonitor/>}
      {meter === 'solar' && <SolarMonitor/>}
      {meter === 'battery' && <BatteryMonitor/>}

    </div>
  )
}
