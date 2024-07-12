// import MNav from "../../src/assets/mainnav/MNav"
import Slider from "../../src/assets/slider/Slider"
import AboutOne from "../../src/assets/aboutone/Aboutone"
import AboutTwo from "../../src/assets/abouttwo/AboutTwo"
import Mission from "../../src/assets/mission/Mission"
import ProductGall from "../../src/assets/progallery/ProductGall"
import SDGS from "../../src/assets/sdgs/SDGS"
import Partners from "../../src/assets/partners/Partners"
// import About from "../aboutus/About"
// import Contact from "../../src/assets/contact/Contact"
export default function Main(){
    return(
        <div className="main">
            <Slider/>
            <AboutOne/>
            <AboutTwo/>
            <Mission/>
            <ProductGall/>
            <SDGS/>
            <Partners/>
        </div>
    )
}