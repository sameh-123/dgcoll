import "./done.css"
import done from "/done.jpeg"
export default function Done(){
    return (
      <div className="done">
        <img src={done} alt="booked successfuly" className="done-img" />
        <div className="done-tit">Appointment Booked Successfuly</div>
      </div>
    );
}