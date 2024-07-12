import "./Product.css"
import check from "/check.png"
export default function Product(){
    return (
      <div className="price">
        <div className="price-cont-1">
          <div className="price-cont p-cont-1">
            <div className="mode">Basic</div>
            <div className="price-tit">Starter Digital Marketing</div>
            <div className="line"></div>
            <div className="price-serv">
              <div className="serv-tit">Services</div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">
                  Social media management (2 platforms)
                </div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Basic SEO optimization</div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Monthly performance reports</div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Email support</div>
              </div>
            </div>
            <div className="pricing">
              <div className="pricing-tit">Price</div>
              <div className="pricing-val">
                $499 <span className="val-sp">/ month</span>
              </div>
            </div>
            <a href="#" className="price-lnk">
              <button className="price-start">Get started</button>
            </a>
          </div>
          <div className="price-cont p-cont-2">
            <div className="mode mode-1">Most popular</div>
            <div className="price-tit">Growth Digital Marketing</div>
            <div className="line"></div>
            <div className="price-serv">
              <div className="serv-tit">Services</div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">
                  Social media management (3 platforms)
                </div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Advanced SEO optimization</div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Bi-weekly performance reports</div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">
                  Content creation (2 blog posts per month)
                </div>
              </div>
            </div>
            <div className="pricing">
              <div className="pricing-tit">Price</div>
              <div className="pricing-val">
                $999 <span className="val-sp">/ month</span>
              </div>
            </div>
            <a href="#" className="price-lnk">
              <button className="price-start">Upgrade now</button>
            </a>
          </div>
          <div className="price-cont p-cont-1">
            <div className="mode">Premium</div>
            <div className="price-tit">Pro Digital Marketing</div>
            <div className="line"></div>
            <div className="price-serv">
              <div className="serv-tit">Services</div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">
                  Social media management (4 platforms)
                </div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Comprehensive SEO optimization</div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">Weekly performance reports</div>
              </div>
              <div className="serv-itm">
                <img src={check} alt="check" className="serv-img" />
                <div className="serv-txt">
                  Content creation (4 blog posts per month) and Paid
                  management
                </div>
              </div>
            </div>
            <div className="pricing">
              <div className="pricing-tit">Price</div>
              <div className="pricing-val">
                $1,999 <span className="val-sp">/ month</span>
              </div>
            </div>
            <a href="#" className="price-lnk">
              <button className="price-start">Get started</button>
            </a>
          </div>
        </div>
        <div className="price-cont-2">
            
        </div>
      </div>
    );
}