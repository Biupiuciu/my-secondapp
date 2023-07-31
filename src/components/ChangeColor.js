import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { themeAction } from '../store';
function ChangeColor() {
    const [color,setColor]=useState('');
    const dispatch=useDispatch();
  return (
    <div>
        <input type='text' onChange={(e)=>{setColor(e.target.value)}} value={color}/>
        <button onClick={()=>{
            dispatch(themeAction.changeTheme({color}));
        }}>ChangeColor</button>
    </div>
  )
}

export default ChangeColor