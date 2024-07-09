import "./slider.css"
import logo from "/logo.png"
import { Link } from "react-router-dom"
export default function Slider(){
    return(
        <div className="slider">
            <div className="slidercont">
                <img src={logo} alt="logo" className="sliderlogo"/>
                <Link to="signup"><button className="bookingbtn">Book Us now</button></Link>
            </div>
        </div>
    )
}