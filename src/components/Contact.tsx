import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:hustlexpress.hxp@gmail.com" data-cursor="disable">
                Hustlexpress.hxp@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918595849939" data-cursor="disable">
                +91 8595849939
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://api.whatsapp.com/send?phone=8595849939"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
            <a
              href=""
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/HustleXpress?t=aegBEnY-6-ACiFmHAHmpXg&s=09"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/hustlexpress.hxp?igsh=MXVhbmcxenozYmpiYQ=="
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>HXP</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
