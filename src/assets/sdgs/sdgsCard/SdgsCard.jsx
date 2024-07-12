import './sdgscard.css';
export default function SdgsCard({number, txt1, txt2, imgg, bgcolor}) {
  return (
    <div className="sdgs-itm">
      <div className="shadow"></div>
      <div className="sdgs-itm-cont" style={
        {
            backgroundColor: bgcolor
        }
      }>
        <div className="up-10">
          <div className="up-right-10">{number}</div>
          <div className="up-left-10">
            <div className="up-left-up-10">{txt1}</div>
            <div className="up-left-dwn-10">{txt2}</div>
          </div>
        </div>
        <img src={imgg} alt="icon" className="dwn-10" />
      </div>
    </div>
  );
}
