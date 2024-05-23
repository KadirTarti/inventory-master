import { Button } from "@mui/material";
import React from "react";

const MyButton = (props) => {
  return <Button sx={{'&:hover': {
    color: 'white',
    backgroundColor: '#c3195d',
    },
    backgroundColor: 'orange',
    color: 'black',
    fontFamily: 'monospace'
    
    }} {...props}>{props.title}</Button>;
};

export default MyButton;
