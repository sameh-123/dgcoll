import './Contact.css';
import phone from '/phone.png';
import location from '/location.png';
import email from '/email.png';
import faq from '/faq.jpeg';
import up from '/up.png';
import dwon from '/dwon.png';
import { useState } from 'react';
export default function Contact() {
  const [p1, setP1] = useState(1);
  const [p2, setP2] = useState(null);
  const [p3, setP3] = useState(null);
  return (
    <div className="Contact">
      <div className="contact-dwn">
        <div className="faq-cont">
          <div className="faq-itm">
            <div className="faq-itm-up">
              <div className="faq-q">what is the topic listing ?</div>
              <button className="list-show">
                <img
                  src={p1 ? up : dwon}
                  alt="dir"
                  className="dir"
                  onClick={() => {
                    p1 ? setP1(null) : setP1(1);
                  }}
                />
              </button>
            </div>
            {p1 && (
              <div className="ans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s
              </div>
            )}
          </div>
          <div className="faq-itm">
            <div className="faq-itm-up">
              <div className="faq-q">what is the topic listing ?</div>
              <button className="list-show">
                <img
                  src={p2 ? up : dwon}
                  alt="dir"
                  className="dir"
                  onClick={() => {
                    p2 ? setP2(null) : setP2(1);
                  }}
                />
              </button>
            </div>
            {p2 && (
              <div className="ans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the  standard dummy
                text ever since the 1500s
              </div>
            )}
          </div>
          <div className="faq-itm">
            <div className="faq-itm-up">
              <div className="faq-q">what is the topic listing ?</div>
              <button className="list-show">
                <img
                  src={p3 ? up : dwon}
                  alt="dir"
                  className="dir"
                  onClick={() => {
                    p3 ? setP3(null) : setP3(1);
                  }}
                />
              </button>
            </div>
            {p3 && (
              <div className="ans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy
                text ever since the 1500s
              </div>
            )}
          </div>
        </div>
        <img src={faq} alt="faq" className="faq" />
      </div>
      <div className="line-3"></div>

      <div className="contact-up">
        <div className="contact-up-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.3307645033337!2d31.356261623861023!3d31.044890274435275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dd4295c80e9%3A0x29c566a018cecb77!2z2KzYp9mF2LnYqSDYp9mE2YXZhti12YjYsdip!5e0!3m2!1sar!2seg!4v1720789097015!5m2!1sar!2seg"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>
          <div className="cont-up-right-up">
            <div className="addr">
              <img src={location} alt="location" className="contact-img" />
              <div className="contact-txt">Mansoura , Dakahlia, Egypt</div>
            </div>
            <div className="contact-rst">
              <div className="rst-itm">
                <img src={phone} alt="phone" className="contact-img" />
                <div className="contact-txt">+2015 1208 8398</div>
              </div>
              <div className="rst-itm">
                <img src={email} alt="email" className="contact-img" />
                <div className="contact-txt">dgcollar@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-2"></div>
        <div className="contact-up-right">
          <div className="mesag">Message Us</div>
          <form className="contc-4">
            <div className="f-1">
              <input
                type="text"
                className="inp-3"
                placeholder="Name:"
                required
              />
              <input
                type="text"
                className="inp-3"
                placeholder="Phone:"
                required
              />
            </div>
            <div className="f-1">
              <input
                type="text"
                className="inp-3"
                placeholder="Email: "
                required
              />
              <input
                type="text"
                className="inp-3"
                placeholder="Address: "
                required
              />
            </div>
            <textarea
              className="f-2"
              placeholder="Meassage: "
              required
            ></textarea>
            <button className="sbbtn" type="submit">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
