import './about.css';
import arr from '../../src/assets/progallery/Gallery';
import dot from '/dot.png';
import { v4 } from 'uuid';
import flag from '/flag.png';
import bottle from '/bottle.png';
import cow from '/cow2.png';
import arw from "/arr.png"
import eye from "/eye.png"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function About() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const intr = setInterval(() => {
      setI((i + 1) % 5);
    }, 4000);
    return () => clearInterval(intr);
  }, [i]);
  return (
    <div className="about">
      <div className="aboutup">
        <div className="abtup-l">
          <div className="tit-4">About Us</div>
          <div className="txt-4">
            we are a team of dreamers committed to crafting a brighter tomorrow.
            We pour our hearts into everything we do, knowing that our best
            today sets the stage for an even better future. Join us on this
            journey of relentless pursuit, where passion meets purpose, and
            together, we can turn dreams into reality.
          </div>
          <Link to="signup">
            <button className="book-3">Book us now</button>
          </Link>
        </div>
        <div className="abtup-r">
          <img src={arr[i]} alt="photo" className="img-7" />
          <div className="navbtns">
            {arr.map((ele, index) => {
              return (
                <img
                  src={dot}
                  alt="dot"
                  key={v4()}
                  className={index == i ? 'bigd' : 'smdot'}
                  onClick={() => {
                    setI(index);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="aboutmid">
        <div className="abtmid-tit">OUR STORY</div>
        <div className="abtmid-cont">
          <div className="abtmid-itm">
            <div className="itm-txt-2">
              <span className="sp-1">Our journey </span>
              started with a shared love for agriculture and a dream to
              revolutionize cattle management.
            </div>
            <div className="itm-icon">
              <img src={flag} alt="icon" className="itm-img-5" />
            </div>
          </div>
          <div className="abtmid-itm">
            <div className="itm-txt-2">
              <span className="sp-1">Driven by </span>
              farmers&apos; needs, we crafted smart collars that monitor vital
              biometrics to optimize cattle health and production.
            </div>
            <div className="itm-icon">
              <img src={cow} alt="icon" className="itm-img-5" />
            </div>
          </div>
          <div className="abtmid-itm">
            <div className="itm-txt-2">
              <span className="sp-1">Today, </span>
              as a burgeoning startup, we are dedicated to helping farmers
              achieve higher production levels while ensuring the best care for
              their cattle.
            </div>
            <div className="itm-icon">
              <img src={bottle} alt="icon" className="itm-img-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="aboutdwn">
        <div className="abtdwn-cont-1">
          <img src={eye} alt="icon" className="abtdwn-itm-icon" />
          <div className="abtdwn-itm-tit">OUR VISION</div>
          <div className="abtdwn-itm-txt">
            Transforming cattle farming through intelligent technology to
            enhance productivity and animal well-being
          </div>
        </div>
        <div className="abtdwn-cont-2">
          <div className="abtdwn-cont-2-tit">Smart Cow Collar</div>
          <div className="vr-5"></div>
        </div>
        <div className="abtdwn-cont-1">
          <img src={arw} alt="icon" className="abtdwn-itm-icon" />
          <div className="abtdwn-itm-tit">OUR MISSION</div>
          <div className="abtdwn-itm-txt">
            To innovate with dedication, providing solutions that elevate cattle
            productivity and improve living conditions through precise biometric
            monitoring.
          </div>
        </div>
      </div>
    </div>
  );
}
