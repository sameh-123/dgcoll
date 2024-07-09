import "./aboutone.css"
import cow from "/collar1.jpg"
import cowid from "/cowid.png"
import connection from "/connection.png"
import battery from "/batterylife.png"
import like from "/like.png"
import enhance from "/enhance.png"
export default function AboutOne(){
    return (
      <div className="about-1" id="products">
        <div className="aboutoneup">
          <div className="right-2">
            <div className="clr"></div>
            <img src={cow} alt="cow" className="aboutoneimg" />
            <div className="txt-2">
              <div className="txtup-2">3-IN ONE</div>
              <div className="txtdwn-2">MULTI TOOL</div>
            </div>
          </div>
          <div className="vl"></div>
          <div className="left-2">
            <div className="txt-up22">Smart Cow Collar</div>
            <div className="txt-dwn22">About the Product</div>
            <div className="prop">
              <div className="itm-1">
                <img src={battery} alt="battery" className="itmr" />
                <div className="itml">
                  <div className="itmlu">Equipped with</div>
                  <div className="itmld">long life battery</div>
                </div>
              </div>
              <div className="itm-1">
                <img src={cowid} alt="cowid" className="itmr" />
                <div className="itml">
                  <div className="itmld">Special Cow Id</div>
                </div>
              </div>
              <div className="itm-1">
                <img src={connection} alt="connection" className="itmr" />
                <div className="itml">
                  <div className="itmlu">Reliable connection</div>
                  <div className="itmld">with LoRWAN</div>
                </div>
              </div>
            </div>
            <a href="#contact">
              <button className="aboutbtn">Contact Us</button>
            </a>
          </div>
        </div>
        <div className="aboutonedwn">
          <div className="dcont-1">
            <div className="dr">
              <img src={like} alt="like" className="drimg" />
            </div>
            <div className="dl">
              <div className="txtdl-1">100% GREEN COW MONITORING SOLUTION</div>
              <div className="txtdl-2">
                DG COLLAR 100% sustainable power sources, producing zero harmful
                emissions, ensuring environmentally friendly and efficient
                livestock management.
              </div>
            </div>
          </div>
          <div className="dcont-1">
            <div className="dr">
              <img src={enhance} alt="like" className="drimg" />
            </div>
            <div className="dl">
              <div className="txtdl-1">ENHANCING OUR USER-EXPERIENCE</div>
              <div className="txtdl-2">
                We've crafted a solution that blends functionality and
                efficiency with state-of-the-art technology, specifically
                tailored to meet your cow monitoring requirements, ensuring an
                exceptional user experience
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}