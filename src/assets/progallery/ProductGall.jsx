import './productgall.css';
import arr from './Gallery';
import back from '/back.png';
import forward from '/forward.png';
import dot from "/dot.png"
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function ProductGall() {
  const [eff, setEff] = useState(0);
  useEffect(()=>{
    const intr=setInterval(()=>{
      setEff((eff+1)%5)
    },3000)
    return ()=>clearInterval(intr)
  },[eff])
  return (
    <div className="productgall">
      <div className="prodtit">Product Gallery</div>
      <div className="gallery-1">
        {arr.map((itm, index) => {
          return (
            <img
              src={itm}
              alt="photo"
              className={index == eff ? 'gall-2' : 'gall-1'}
              key={uuidv4()}
            />
          );
        })}
      </div>
      <div className="dirbtns">
        <button className="gorl l-1" onClick={()=>{
          setEff((eff+4)%5)
        }}>
          <img src={back} alt="back" className="dir" />
        </button>
        {
          arr.map((itm,index)=>{
            return(
              <img src={dot} alt="dot" key={uuidv4()} className={index==eff ? "bigdot" : "smalldot"} onClick={()=>{
                setEff(index)
              }}/>
            )
          })
        }
        <button className="gorl r-1" onClick={()=>{
          setEff((eff+1)%5)
        }}>
          <img src={forward} alt="forward" className="dir" />
        </button>
      </div>
    </div>
  );
}
