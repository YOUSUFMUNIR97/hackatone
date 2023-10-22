import { Label } from '@mui/icons-material';
import { type } from 'os';
import React from 'react'

type propstype = {
    label: string;
    onChange?: any;
    type?: string;
    value?: any;

}

const BAInput = (props: propstype) => {
  const {label, onChange, type, value} = props
    return (
    <div>
      <input placeholder={label} value={value} onChange={onChange} type={type ?? "text"}/>
    </div>
  )
}

export default BAInput
