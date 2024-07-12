import "./medadv.css"
import im1 from '/med/im1.jpeg';
import im2 from '/med/im2.jpeg';
import im3 from '/med/im3.jpeg';
export default function MedAdv(){
    return (
      <div className="medadv">
        <div className="skw-20"></div>
        <div className="skw-21"></div>
        <div className="skw-22"></div>
        <div className="medadv-tit">Medical Advisors</div>
        <div className="med-cont">
          <div className="med-itm">
            <img src={im1} alt="image" className="med-img" />
            <div className="med-info">
              <div className="med-name">Dr/ Mariam Rabiea</div>
              <div className="med-role">CEO & Founder</div>
            </div>
          </div>
          <div className="med-itm">
            <img src={im2} alt="image" className="med-img" />
            <div className="med-info">
              <div className="med-name">Dr/ Mohamed Metwaly</div>
              <div className="med-role">CEO & Founder</div>
            </div>
          </div>
          <div className="med-itm">
            <img src={im3} alt="image" className="med-img" />
            <div className="med-info">
              <div className="med-name">Dr/ Ahmed Hesham</div>
              <div className="med-role">CEO & Founder</div>
            </div>
          </div>
        </div>
      </div>
    );
}