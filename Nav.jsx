import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
import { useState } from 'react'




export const Nav = () => {
    const [cl, setcl] = useState("on")

    function a() {
        if (cl == "off") {
            setcl("on")
        }
        else {
            setcl("off")
        }
    }
    return (
        <>
            <div className="nav" style={{ backgroundColor: cl == "on" ? "white" : "black" }} >
                <div className="img">
                    <img src="/src/assets/bus logo.png" alt="" />
                    <h1>Jayant's Travels</h1>
                </div>
                <div className="com">
                    <ul>
                        <Link to="/" style={{ color: "blue", textDecoration: "none" }}><li>Home</li></Link>
                        <Link to="/Booking" style={{ color: "blue", textDecoration: "none" }}><li>Booking</li></Link>
                        <Link to="/Yourbooking" style={{ color: "blue", textDecoration: "none" }}><li>Your Booking</li></Link>
                        <Link to="/Help" style={{ color: "blue", textDecoration: "none" }}><li>Help</li></Link>
                        <button onClick={a} >{cl == "on" ? "on" : "off"}</button>
                    </ul>

                </div>


            </div>

        </>
    )
}
export default Nav