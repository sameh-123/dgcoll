import "./contact.css"
import logo from "/logo.png"
import facebook from "/facebook.png"
import insta from "/insta.png"
import twetter from "/twetter.png"
import { Link } from "react-router-dom"
export default function Contact(){
    return (
      <div className="contact" id="contact">
        <div className="contcup">
          <img src={logo} alt="logo" className="contc-1" />
          <div className="contc-2">
            <div className="contctxt">
              The global livestock monitoring market is thriving, with a
              projected value of USD 12.40 billion by 2029, growing at a CAGR of
              12.60% from 2024. This industry encompasses monitoring solutions
              for various animals, including cattle, poultry, and equine, and
              includes hardware, software, and services. Key applications range
              from feeding management to breeding and milk harvesting.
            </div>
            <div className="soci">
              <a href="#">
                <img src={facebook} alt="soci" className="sociimg" />
              </a>
              <a href="#">
                <img src={twetter} alt="soci" className="sociimg" />
              </a>
              <a href="#">
                <img src={insta} alt="soci" className="sociimg" />
              </a>
            </div>
          </div>
          <div className="contc-3">
            <div className="contc-3tit">QUICK LINK</div>
            <ul className="contclst">
              <li>
                <a href="#home" className="contctlnk">
                  Home
                </a>
              </li>
              <li>
                <Link to="aboutus" className="contctlnk">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#products" className="contctlnk">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="contctlnk">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <form className="contc-4">
            <div className="f-1">
              <input
                type="text"
                className="inp-3"
                placeholder="Name:"
                required
              />
              <input
                type="text"
                className="inp-3"
                placeholder="Phone:"
                required
              />
            </div>
            <div className="f-1">
              <input
                type="text"
                className="inp-3"
                placeholder="Email: "
                required
              />
              <input
                type="text"
                className="inp-3"
                placeholder="Address: "
                required
              />
            </div>
            <textarea
              className="f-2"
              placeholder="Meassage: "
              required
            ></textarea>
            <button className="sbbtn" type="submit">
              Contact Us
            </button>
          </form>
        </div>
        <div className="contcdw">
          <div className="dw-3-1">Copyright cow-product , 2024.</div>
          <div className="dw-3-2">
            Contact us today: <span className="numphone">(510) 685-9935</span>
          </div>
          <div className="dw-3-2">
            <a href="#" className="plnk">
              Privacy Policy
            </a>
            <div className="vert"></div>
            <a href="#" className="plnk">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    );
}