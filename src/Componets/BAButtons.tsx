import { Button } from '@mui/material';
import React from 'react'

type propstype = {
    label: string;
    onClick?: any;
}

const BAButtons = (props: propstype) => {
    const {label, onClick} = props;

  return (
    <Button onClick={onClick} variant="contained" color="primary">
        {label}
    </Button>
  )
}

export default BAButtons