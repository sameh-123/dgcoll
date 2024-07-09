import "./about2.css"
import check from "/check.png"
import collar from "/collar.png"
export default function AboutTwo(){
    return (
      <div className="abouttwo">
        <div className="para1"></div>
        <div className="para2"></div>
        <div className="para3"></div>
        <div className="tr">
          <div className="txtt-1">FEATURES</div>
          <div className="txtt-2">DG Collar is a game-changing solution</div>
          <div className="txtt-3">
            designed to revolutionize livestock monitoring and address critical
            needs in cattle management
          </div>
          <div className="fet">
            <img src={check} alt="c" className="fetr" />
            <div className="fetl">High-quality sensors</div>
          </div>
          <div className="fet">
            <img src={check} alt="c" className="fetr" />
            <div className="fetl">Vital Sign Monitoring</div>
          </div>
          <div className="fet">
            <img src={check} alt="c" className="fetr" />
            <div className="fetl">Long life lithium battery</div>
          </div>
          <div className="fet">
            <img src={check} alt="c" className="fetr" />
            <div className="fetl">Early Disease Detection</div>
          </div>
          <div className="fet">
            <img src={check} alt="c" className="fetr" />
            <div className="fetl">Artificial Intelligence (AI) Analytics</div>
          </div>
          <div className="fet">
            <img src={check} alt="c" className="fetr" />
            <div className="fetl">Rugged and Weatherproof Design</div>
          </div>
          <div className="fet">
            <img src={check} alt="c" className="fetr" />
            <div className="fetl">Remote Monitoring</div>
          </div>
          <div className="fet">
            <img src={check} alt="c" className="fetr" />
            <div className="fetl">Lightweight and Comfortable</div>
          </div>
        </div>
        <div className="tl">
          <img src={collar} alt="collar" className="tlimg" />
        </div>
      </div>
    );
}