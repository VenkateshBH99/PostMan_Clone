import { Box } from '@mui/material'
import React, { useState } from 'react'
import Form from './Form'
import Home from './Home';
import {makeStyles} from '@mui/styles';
import Selectformet from './Selectformet';
import Res from './Res';
import Err from './Err';
import { useContext } from 'react';
import { dataContext } from '../Context/Dataprovider';
import {CheckParam} from "../Utils/CommonUtils";
import Snake from './Snake';
const useStyles = makeStyles(
    {
        component: {
            width: '70%',
            margin:'20px solid 0 auto'
        }
    }
)

const Main = () => {
    const classses=useStyles();
    const [error,seterror]=useState(false)
    const [errmsg,seterrmsg]=useState('');
    const {formdata,paramdata,headerdata,jsonText}= useContext(dataContext)
    
    const onsendClick=()=>{
      if(!CheckParam(formdata,paramdata,headerdata,jsonText,seterrmsg)){
          seterror(true)
        return false;
      }
      
    }
  return (
    <>
        <Home/>
        <Box className={classses.component}>

        <Form onsendClick={onsendClick}/>
        <Selectformet/>
        {/* <Res/> */}
        <Err/>
        {error && <Snake error={error} seterror={seterror} errmsg={errmsg}/>}
        </Box>
    
    </>
  )
}

export default Main