import "./sdgs.css"
import SdgsCard from "./sdgsCard/SdgsCard";
import arr from "./SdgsGall";
export default function SDGS(){
    return (
      <div className="sdgs">
        <div className="skw-10"></div>
        <div className="skw-11"></div>
        <div className="skw-12"></div>
        <div className="sdgs-tit">SDGs In DG COLLAR</div>
        <div className="sdgs-cont">
            <SdgsCard number="1" txt1="NO" txt2="POVERTY" imgg={arr[0]} bgcolor="red"/>
            <SdgsCard number="2" txt1="ZERO" txt2="HUNGER" imgg={arr[1]} bgcolor="rgb(182, 143, 14)"/>
            <SdgsCard number="8" txt1="DECENT WORK" txt2="GROWTH" imgg={arr[2]} bgcolor="rgb(134, 4, 4)"/>
        </div>
        <div className="sdgs-cont">
            <SdgsCard number="9" txt1="INDUSTRY" txt2="INFRASTRUCTURE" imgg={arr[3]} bgcolor="orange"/>
            <SdgsCard number="15" txt1="LIFE" txt2="ON LAND" imgg={arr[4]} bgcolor="green"/>
            <SdgsCard number="17" txt1="PARTNERSHIPS" txt2="FOR GOALS" imgg={arr[5]} bgcolor="darkblue"/>
        </div>
      </div>
    );
}