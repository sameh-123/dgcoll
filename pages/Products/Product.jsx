import "./Product.css"
import check from "/check.png"
export default function Product(){
    return (
      <div className="price">
        <div className="price-cont-1">
          <div className="price-cont p-cont-1">
            <div className="mode">Basic</div>
            <div className="price-tit">10-30 Cattle</div>
            <div className="line"></div>
            <div className="price-serv">
              <div className="serv-tit">Services</div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Real-time location tracking</div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Basic Health Monitoring</div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Daily Reports</div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Heat Detection</div>
              </div>
            </div>
            <div className="pricing">
              <div className="pricing-tit">Price</div>
              <div className="pricing-val">
                $3 <span className="val-sp"> / cow / month</span>
              </div>
            </div>
            <a href="#" className="price-lnk">
              <button className="price-start ps-1">Get started</button>
            </a>
          </div>
          <div className="price-cont p-cont-2">
            <div className="mode mode-1">Most popular</div>
            <div className="price-tit">30-100 Cattle</div>
            <div className="line"></div>
            <div className="price-serv">
              <div className="serv-tit">Services</div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">All Basic Plan Features</div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Advanced Health Monitoring</div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">
                  30 days of data storage in the cloud
                </div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Mobile App Support </div>
              </div>
            </div>
            <div className="pricing">
              <div className="pricing-tit">Price</div>
              <div className="pricing-val">
                $5 <span className="val-sp">/ cow / month</span>
              </div>
            </div>
            <a href="#" className="price-lnk">
              <button className="price-start ps-2">Upgrade now</button>
            </a>
          </div>
          <div className="price-cont p-cont-1">
            <div className="mode">Premium</div>
            <div className="price-tit">100 - 150 Cattle </div>
            <div className="line"></div>
            <div className="price-serv">
              <div className="serv-tit">Services</div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">All Pro Plan Features</div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">
                  Unlimited storage of historical data in the cloud
                </div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Weekly performance reports</div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">
                  Dedicated Support: 24/7 phone and email support
                </div>
              </div>
            </div>
            <div className="pricing">
              <div className="pricing-tit">Price</div>
              <div className="pricing-val">
                $15 <span className="val-sp">/ cow / month</span>
              </div>
            </div>
            <a href="#" className="price-lnk">
              <button className="price-start ps-1">Get started</button>
            </a>
          </div>
        </div>
        <div className="price-cont-2"></div>
      </div>
    );
}