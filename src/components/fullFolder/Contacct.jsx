import axios from "axios";
import React, { useState } from "react";

import {
  FaCode,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { ErrorToast, SuccessToast } from "../helper/FromHelper";
import { BsArrowDownShort } from "react-icons/bs";

const Contacct = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    textSms: "",
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://portfolio-backend-one-livid.vercel.app/api/create-contacts",
        formData
      );
      SuccessToast(" Message sent successfully! ✅");
      // Optionally reset form:
      setFormData({
        name: "",
        email: "",
        textSms: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      ErrorToast("Failed to send message. ❌");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        {/* LEFT SIDE: Contact Info */}
        <div className="contact-info animate-bottom">
          <h2>
            Contact Info <BsArrowDownShort />
          </h2>
          <div className="info-box">
            <a className="fon-icon" href="#">
              <FaPhone />
            </a>
            <div>
              <h5>Phon</h5>
              <p>+880 1234 567890</p>
            </div>
          </div>
          <div className="info-box">
            <a className="fon-icon" href="#">
              <MdAttachEmail />
            </a>
            <div>
              <h5>Email</h5>
              <p>rkrafikridoy5887@gmail.com</p>
            </div>
          </div>
          <div className="info-box">
            <a className="fon-icon" href="#">
              <FaLocationDot />
            </a>
            <div>
              <h5>Address</h5>
              <p>Dinajpur,Rangpur Division, Bangladesh</p>
            </div>
          </div>

          <div className="hexagon-container">
            <div className="hexagon-wrapper">
              <div className="hexagon">
                <a
                  href="https://www.linkedin.com/in/ ridoy-islam-880313343"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="hexagon-wrapper">
              <div className="hexagon">
                <a
                  href="https://www.facebook.com/md.ridoyislam.5249"
                  target="_blank"
                >
                  {" "}
                  <FaFacebook />
                </a>
              </div>
            </div>
            <div className="hexagon-wrapper">
              <div className="hexagon">
                <a
                  href="https://www.instagram.com/Rafik/?fbclid=IwY2xjawKBmvBleHRuA2FlbQIxMABicmlkETFsdGRGeTZRYzRxOUNlVUtmAR5e-doOJQH8PBeBUX8vyrvr6dp4lalj0P63Fl2PDKsrzX4hYAUepBSGPtNOww_aem_vISKBTZ45hMwkPuA2rL7oA#"
                  target="_blank"
                >
                  {" "}
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <form className="form-container animate-bottom" onSubmit={handleSubmit}>
          <h3 className="form-heading">
            Let's work together <FaCode />
          </h3>
          <p className="form-description">
            We can achieve success by working together. Be ready to learn new
            things and build something great ✅
          </p>
          <div className="form-group">
            <div className="form-row">
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Your name"
                required=""
              />
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email address"
                required=""
              />
            </div>
            <textarea
              value={formData.textSms}
              onChange={handleChange}
              name="textSms"
              placeholder="Text here..."
              rows={5}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacct;
