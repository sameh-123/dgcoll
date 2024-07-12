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
import linkedin from "/linkedin.png"
import github from "/github.png"
import MedAdv from '../../src/assets/medadv/MedAdv';
import TechAdv from '../../src/assets/techadv/TechAdv';
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
      <div className="ourteam">
        <div className="ourteam-tit">MEET OUR TEAM</div>
        <div className="ourteam-cont">
          <div className="ourteam-itm sameh-1">
            <div className="team-mem sameh"></div>
            <div className="mem-name">Sameh Mohamed</div>
            <div className="mem-pos">Front-End Developer</div>
            <div className="mem-lnk">
              <a href="#">
                <img src={linkedin} alt="linkedin" className="cmem" />
              </a>
              <a href="#">
                <img src={github} alt="github" className="cmem" />
              </a>
            </div>
          </div>
          <div className="ourteam-itm nada-1">
            <div className="team-mem nada"></div>
            <div className="mem-name">Nada AlBayar</div>
            <div className="mem-pos">Data Analyst</div>
            <div className="mem-lnk">
              <a href="#">
                <img src={linkedin} alt="linkedin" className="cmem" />
              </a>
              <a href="#">
                <img src={github} alt="github" className="cmem" />
              </a>
            </div>
          </div>
          <div className="ourteam-itm ammar-1">
            <div className="team-mem ammar"></div>
            <div className="mem-name">Ammar Rakha</div>
            <div className="mem-pos">AI Engineer</div>
            <div className="mem-lnk">
              <a href="#">
                <img src={linkedin} alt="linkedin" className="cmem" />
              </a>
              <a href="#">
                <img src={github} alt="github" className="cmem" />
              </a>
            </div>
          </div>
          <div className="ourteam-itm ahmed-1">
            <div className="team-mem ahmed"></div>
            <div className="mem-name">Ahmed ElMersawy</div>
            <div className="mem-pos">Back-End Developer</div>
            <div className="mem-lnk">
              <a href="#">
                <img src={linkedin} alt="linkedin" className="cmem" />
              </a>
              <a href="#">
                <img src={github} alt="github" className="cmem" />
              </a>
            </div>
          </div>
          <div className="ourteam-itm gehad-1">
            <div className="team-mem gehad"></div>
            <div className="mem-name">Mohamed Gehad</div>
            <div className="mem-pos">Embeded Systems</div>
            <div className="mem-lnk">
              <a href="#">
                <img src={linkedin} alt="linkedin" className="cmem" />
              </a>
              <a href="#">
                <img src={github} alt="github" className="cmem" />
              </a>
            </div>
          </div>
          <div className="ourteam-itm abd-1">
            <div className="team-mem abd"></div>
            <div className="mem-name">Mohamed Ahmed</div>
            <div className="mem-pos">Machine Learning</div>
            <div className="mem-lnk">
              <a href="#">
                <img src={linkedin} alt="linkedin" className="cmem" />
              </a>
              <a href="#">
                <img src={github} alt="github" className="cmem" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <TechAdv/>
      <MedAdv/>
    </div>
  );
}
