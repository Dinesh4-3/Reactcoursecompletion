import { useState } from 'react'
import Student from './Student.jsx'
import Fruits from './Fruits.jsx'
import Button from './Button.jsx'
import State from './State.jsx'

function App() {
  const fruits = [{name:'apple',keys:1}, {name:'banana',keys:2},
     {name:'orange',keys:3},{name:'blueberry',keys:4},{name: 'pineapple',keys:5}]
     const Vegetables = [{name:'carrot',keys:6}, {name:'tomato',keys:7},
     {name:'cabbage',keys:8},{name:'onion',keys:4+5},{name: 'cucumber',keys:10}]


  return (
    <>
      <Student name="Dinesh"age={22}hobby="listening songs"></Student>
      {/* <Student name="VSADA"age={23}hobby="SDADS DAS"></Student>
      <Student name="WEQ"age={12}hobby="DASD DAS"></Student> */}
      <Fruits items = {fruits} category="Fruits"></Fruits>
      <Fruits items = {Vegetables} category="vegetables"></Fruits>
      <State></State>
      <Button></Button>






    </>
  )
}

export default App
