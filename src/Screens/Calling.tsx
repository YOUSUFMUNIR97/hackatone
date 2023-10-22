import React from 'react'
import { useState } from "react";
import SMSelect from '../Componets/SMSelect';
import BAInput from '../Componets/BAInput';
import BAButton from '../Componets/BAButton';
import BAButtons from '../Componets/BAButtons';
import BasicDatePicker from '../Componets/BasicDatePicker';
import DynamicTable from '../Componets/DynamicTable';


const Calling = () => {
  const [gender, setgender] = useState<any>()

  return (
    <>
      <SMSelect getValue={(e: any) => {
        console.log('Apps.js', e)
      }}
        label='Gender'
        options={[
          {
            value: 'Male',
            displayName: 'Male'
          },
          {
            value: 'Female',
            displayName: 'Female'
          }
        ]} />

      <div>
        <BAInput label='Email' onChange={''} />
      </div>

      <div>
        <BAButton label='Submit' />
      </div>

      <div>
        <BAButtons label='Submit' />
      </div>

      <div>
        <BasicDatePicker/>
      </div>

      <div>
        <DynamicTable/>
      </div>
    </>
  )
}

export default Calling