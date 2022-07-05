import {React, useState} from 'react'
import BoxOne from './BoxOne'
import BoxTwo from './BoxTwo'


export default function TeacherDashboard({check}) {

  const [state, setState] = useState('I AM STATE')
  const [box, setBox] = useState('0')
  const [text, setText] = useState('')


  function changer(){
    console.log('hitting changer')
    // setBox(false)

    if(box === 0){
      setState(<BoxTwo/>)
      setBox(1)
    }else{
      setBox(0)
      setState(<BoxOne/>)
    }
  }

  const textHolder = 'THIS IS A TEXT TEST - TEST'
  const holder = check
  console.log(holder)
  // setText(holder)

  return (
    <div>
      Below is boxes
      Name is here = 
    
      {text}
      {state}
      <button type="" onClick={changer} style={{display:'none'}}>CHANGE</button>

      

    </div>
  )
}
