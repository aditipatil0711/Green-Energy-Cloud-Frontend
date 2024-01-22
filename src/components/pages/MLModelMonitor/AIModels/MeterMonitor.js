import React from 'react'
import '../../../../styles/Buttons.css'
import { useState } from 'react'
import TableData from '../../../MLModelData/TableData'

export const MeterMonitor = () => {
  const [iot, setiot] = useState('');
  return (

    <div className="table-wrapper">
      <br></br>
      <div style={{ display: 'flex', justifyContent: "center" }}>
      <TableData/>
      </div>

      <button className='light-grey curved-corners selection-button'>
          Start
        </button>
        <button className='light-grey curved-corners selection-button'>
            Pause
        </button>
        <button className='light-grey curved-corners selection-button'>
            Run
        </button>
    </div>
    // {meter === 'meter' && <MeterMonitor/>}
    // {meter === 'iot' && <IOTMonitor/>}
    // {meter === 'solar' && <SolarMonitor/>}
  )
}
