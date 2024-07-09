import "./mission.css"
import cowwhite from "/cowbkw.png"
import mark from "/mark.png"
import lookingCow from "/lookingcow.jpg"
import arrow from "/arrow.png"
import sens from "/sens.png"
import real from "/real.png"
import env from "/env.png"
export default function Mission(){
    return (
      <div className="mission">
        <div className="param-1"></div>
        <div className="param-2"></div>
        <div className="bk"></div>
        <div className="m-1">
          <div className="m1l">
            <img src={cowwhite} alt="cow" className="m1img" />
            <div className="m1txt">
              <div className="m1txt-1">3-IN ONE</div>
              <div className="m1txt-2">MULTI TOOL</div>
            </div>
          </div>
          <div className="m1r">
            <div className="m1rtxt-1">OUR MISSION</div>
            <div className="m1rtxt-2">
              DG Collar revolutionizes livestock care
            </div>
            <div className="m1rcont">
              <div className="m1ritm">
                <img src={mark} alt="mark" className="mrk-2" />
                <p className="parag">
                  Whether it’s monitoring health, tracking movement, or ensuring
                  optimal feeding times, our smart cow collar is designed to
                  handle a wide range of livestock management tasks while
                  remaining harmless to the animals and the environment.
                </p>
              </div>
              <div className="m1ritm">
                <img src={mark} alt="mark" className="mrk-2" />
                <p className="parag">
                  The 3-in-1 multi-sensor system allows farmers to effortlessly
                  monitor vital signs, activity levels, and environmental
                  conditions. Easily switch between monitoring modes to gather
                  comprehensive data on herd health and productivity.
                </p>
              </div>
              <div className="m1ritm">
                <img src={mark} alt="mark" className="mrk-2" />
                <p className="parag">
                  Our smart collar combines the functionality of multiple
                  livestock management tools into one seamless device, providing
                  farmers with the ultimate convenience and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2">
          <div className="m2l">
            <div className="m2tit">Timeline</div>
            <div className="m2cont">
              <div className="m2itm">
                <img src={arrow} alt="arrow" className="m2itmimg" />
                <div className="m2itmtxt">
                  Research and Planning (Sept -Nov) 2023
                </div>
              </div>
              <div className="m2itm">
                <img src={arrow} alt="arrow" className="m2itmimg" />
                <div className="m2itmtxt">
                  Prototype Development (Dec - Feb) 2023
                </div>
              </div>
              <div className="m2itm">
                <img src={arrow} alt="arrow" className="m2itmimg" />
                <div className="m2itmtxt">Pilot Testing (Mar - Apr) 2024</div>
              </div>
              <div className="m2itm">
                <img src={arrow} alt="arrow" className="m2itmimg" />
                <div className="m2itmtxt">
                  Officially launched DG collar to the market in June 2024.
                </div>
              </div>
            </div>
            <a href="#contact" className="m2lnk">
              <button className="m2btn">Contact Us</button>
            </a>
          </div>
          <div className="m2r">
            <img src={lookingCow} alt="looking cow" className="m2img" />
            <div className="m2rtxt">
              <div className="m2rtxt-1">HIGH QUALITY PRODUCT</div>
            </div>
          </div>
        </div>
        <div className="m-3">
          <div className="m3itm">
            <div className="fimg">
              <img src={sens} alt="sensor" className="m3itmimg" />
            </div>
            <div className="m3txt">Non-Invasive Sensors</div>
          </div>
          <div className="m3itm">
            <div className="fimg">
              <img src={env} alt="enviromental" className="m3itmimg" />
            </div>
            <div className="m3txt">Environmentally Friendly Materials</div>
          </div>
          <div className="m3itm">
            <div className="fimg">
              <img src={real} alt="real time" className="m3itmimg" />
            </div>
            <div className="m3txt">Real-Time Monitoring</div>
          </div>
        </div>
      </div>
    );
}