import './partners.css';
import isf from "/partners/isf.jpeg"
import mie from "/partners/mie.jpeg"
import minst from "/partners/minst.jpeg"
export default function Partners() {
  return (
    <div className="part">
        <div className="skw-13"></div>
        <div className="skw-14"></div>
      <div className="part-tit">Our Partners</div>
      <div className="part-cont">
        <img src={isf} alt="isf" className="part-img" />
        <img src={mie} alt="mie" className="part-img" />
        <img src={minst} alt="minstry" className="part-img" />
      </div>
    </div>
  );
}
