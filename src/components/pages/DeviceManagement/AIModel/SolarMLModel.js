import React from 'react'
import '../../../../styles/Buttons.css'
import { useState } from 'react'
import TableData from '../../../MLModelData/TableData'


export const SolarMLModel = () => {
  const [iot, setiot] = useState('');
  return (

    <div className="table-wrapper">
      <br></br>
      <div style={{ display: 'flex', justifyContent: "center" }}>
      <TableData/>
      </div> 
    </div>
  )
}
