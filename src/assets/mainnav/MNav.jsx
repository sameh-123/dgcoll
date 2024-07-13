import logo from '/logononame.png'
import { Link } from 'react-router-dom'
import "./mnav.css"
export default function MNav(){
    return(
        <div className="mnav" id='home'>
            <div className="right-1">
                <img src={logo} alt="dglogo" className="logo" />
                <div className="txt-1">
                    <div className="txtup">DG COLLAR</div>
                    <div className="txtdwn">BETTER LIFE FOR COWS</div>
                </div>
            </div>
            <div className="left-1">
                <ul className="lst">
                    <li className="lstitem"><Link to="/" className="lnk">Home</Link></li>
                    <li className="lstitem"><Link to="/aboutus" className="lnk">About US</Link></li>
                    <li className="lstitem"><Link to="/products" className="lnk">Products</Link></li>
                    <li className="lstitem"><Link to="/contactus" className="lnk">Contact Us</Link></li>
                </ul>
                <Link to='book'><button className="bookbtn">Book Consultation</button></Link>
            </div>
        </div>
    )
}