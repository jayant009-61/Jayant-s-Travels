import React, { useState } from 'react'
import { Nav } from './Nav'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from './Home'
import { Help } from './Help'
import Booking from './Booking'
import Yourbooking from './YourBooking'





const App = () => {

  const [bus, setbus] = useState([])
  const [msg, setmsg] = useState("")
  const [dn, setdn] = useState("")


  function book(loc, des, name, age, phone, email, date) {
    if (loc.length == 0) {
      setmsg("You have not filled your location")
    }
    else if (des.length == 0) {
      setmsg("You have not filled your Destination")
    }
    else if (name.length == 0) {
      setmsg("You have not filled your Name")
    }
    else if (age.length == 0) {
      setmsg("You have not filled your Age")
    }
    else if (phone.length == 0) {
      setmsg("You have not filled your Phone no.")
    }
    else if (phone.length > 10) {
      setmsg("Not a perfect phone no.")
    }
    else if (phone.length < 10) {
      setmsg("Not a perfect phone no.")
    }
    else if (email.length == 0) {
      setmsg("You have not filled your Email ID")
    }
    else if (date.length == 0) {
      setmsg("You have not filled Date")
    }
    else {
      const a = [...bus, { loc, des, name, age, phone, email, date }]
      setbus(a)
      setmsg("")
      setdn("You have sucsssfully register")
      
    }
  }
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Booking' element={<Booking book={book} msg={msg} dn={dn}/>} />
          <Route path='/Yourbooking' element={<Yourbooking bus={bus} />} />
          <Route path='/Help' element={<Help />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}
export default App