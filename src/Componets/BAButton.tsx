import { Button } from '@mui/material';
import React from 'react'

type propstype = {
    label: string;
    onClick?: any;
}

const BAButton = (props: propstype) => {
  const {label, onClick} = props;
    return (
    <Button onClick={onClick} fullWidth  variant="contained" color="success">
        {label}
    </Button>
  )
}

export default BAButton