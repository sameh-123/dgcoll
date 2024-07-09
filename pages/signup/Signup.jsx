import './signup.css';
import logo from '/logononame.png';
import vd from '/vd.jpg';
export default function SignUp() {
  return (
    <div className="signup">
      <div className="lf-3">
        <div className="lu-1">
          <img src={logo} alt="logo" className="lg" />
          <div className="lutxt">
            <div className="lutxt-1">DG COLLAR</div>
            <div className="lutxt-2">BETTER LIFE FOR COWS</div>
          </div>
        </div>
        <div className="lu-2">Watch This (sign up & connect collar)</div>
        <div className="lu-3">
          <div className="bkg"></div>
          <img src={vd} alt="video" className="vd" />
        </div>
      </div>
      <div className="ri-3">
        <div className="riu-1">JOIN US</div>
        <div className="riu-2">
          Connect your farm with state-of-the-art Agri-Tech
        </div>
        <form className="f-2">
          <div className="f-2-itm">
            <label htmlFor="fullname" className='lbl-1'>Full Name </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="inp-1"
              required
              placeholder='DG Collar'
            />
          </div>
          <div className="f-2-itm">
            <label htmlFor="email" className='lbl-1'>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="inp-1"
              required
              placeholder='dgcollar@gmail.com'
            />
          </div>
          <div className="f-2-itm">
            <label htmlFor="farmname" className='lbl-1'>Farm Name </label>
            <input
              type="text"
              name="farmname"
              id="farmname"
              className="inp-1"
              required
              placeholder='DG Farm'
            />
          </div>
          <div className="f-2-itm">
            <label htmlFor="location" className='lbl-1'>Farm Location </label>
            <input
              type="text"
              name="location"
              id="location"
              className="inp-1"
              required
              placeholder='Egypt, Dakahlia, Mansoura'
            />
          </div>
          <div className="f-2-itm">
            <label htmlFor="password" className='lbl-1'>Password </label>
            <input
              type="password"
              name="password"
              id="password"
              className="inp-1"
              required
              placeholder='length of at least 8'
            />
          </div>
          <div className="f-2-itm">
            <label htmlFor="passwordc" className='lbl-1'>Confirm Password </label>
            <input
              type="password"
              name="passwordc"
              id="passwordc"
              className="inp-1"
              required
              placeholder='Rewrite password'
            />
          </div>

          <div className="chose">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="terms"
              required
            />
            <label htmlFor="terms" className='ch-1'>
              I agree for <a href="#">terms&conditions</a>
            </label>
          </div>

          <div className="chose">
            <input
              type="checkbox"
              name="tips"
              id="tips"
              className="terms"
            />
            <label htmlFor="tips" className='ch-1'>
              I’d like being informed about latest news and tips
            </label>
          </div>

          <button className="sbmt2" type="submit">
            sign up for free
          </button>
        </form>
        <div className="alrd">Do you already have an account?<a href="#">Log in</a></div>
      </div>
    </div>
  );
}
