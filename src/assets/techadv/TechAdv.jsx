import "./techadv.css"
import im1 from "/tech/im1.jpeg"
import im2 from '/tech/im2.jpeg';
import im3 from '/tech/im3.jpeg';
export default function TechAdv(){
    return (
      <div className="techadv">
        <div className="skw-15"></div>
        <div className="skw-16"></div>
        <div className="skw-17"></div>
        <div className="tech-cont">
          <div className="tech-itm">
            <img src={im1} alt="image" className="tech-img" />
            <div className="tech-info">
              <div className="tech-name">Tarek ElMenshawy</div>
              <div className="tech-role">CEO & Founder</div>
            </div>
          </div>
          <div className="tech-itm">
            <img src={im3} alt="image" className="tech-img" />
            <div className="tech-info">
              <div className="tech-name">Dr/ Mohamed Sabry</div>
              <div className="tech-role">CEO & Founder</div>
            </div>
          </div>
          <div className="tech-itm">
            <img src={im2} alt="image" className="tech-img" />
            <div className="tech-info">
              <div className="tech-name">Ahmed Hafez</div>
              <div className="tech-role">CEO & Founder</div>
            </div>
          </div>
        </div>
        <div className="tech-tit">Tech Advisors</div>
      </div>
    );
}