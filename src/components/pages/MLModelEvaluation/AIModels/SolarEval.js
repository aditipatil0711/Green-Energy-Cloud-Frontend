import React from 'react'
import '../../../../styles/Buttons.css'
import { useState } from 'react'
import TableData from '../../../MLModelData/TableData'

export const SolarEval = () => {
  const [iot, setiot] = useState('');
  return (

    <div className="table-wrapper">
      <br></br>
      <div style={{ display: 'flex', justifyContent: "center" }}>
      <TableData/>
      </div>

      <div>
            <button className='light-grey curved-corners selection-button'> <input type='file'></input> 
            </button><br></br><br></br>
            
        </div>

      <button className='light-grey curved-corners selection-button'>
          Train
        </button>
        <button className='light-grey curved-corners selection-button'>
            Test
        </button>
        <button className='light-grey curved-corners selection-button'>
            Evaluate
        </button>

        
    </div>
    // {meter === 'meter' && <MeterMonitor/>}
    // {meter === 'iot' && <IOTMonitor/>}
    // {meter === 'solar' && <SolarMonitor/>}
  )
}
