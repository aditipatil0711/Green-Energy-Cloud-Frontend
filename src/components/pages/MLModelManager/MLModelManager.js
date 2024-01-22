import React from 'react'
import  '../../../styles/Buttons.css'
import { useState } from 'react'
import { MeterMLModel } from '../DeviceManagement/AIModel/MeterMLModel'
import { IOTMLModel } from '../DeviceManagement/AIModel/IOTMLModel'
import { SolarMLModel } from '../DeviceManagement/AIModel/SolarMLModel'
import { BatteryMLModel } from '../DeviceManagement/AIModel/BatteryMLModel'


export const MLModelManager = () => {
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
      {meter === 'meter' && <MeterMLModel />}
      {meter === 'iot' && <IOTMLModel/>}
      {meter === 'solar' && <SolarMLModel/>}
      {meter === 'battery' && <BatteryMLModel/>}

    </div>
  )
}
