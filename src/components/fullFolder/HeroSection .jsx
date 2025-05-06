import React from "react";

import {
  FaFacebook,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
import GatDataStore from "../../store/GatDataStore";
import InfoMenuLoder from "../features/InfoMenuLoder";

const HeroSection = () => {
  const { InformationList } = GatDataStore();


  if (InformationList === null) {
    return <InfoMenuLoder />;
  } else {
    return (
    

      <section className="hero-section">






        <div className="hero-text">
          {InformationList.map((item, index) => {
            return (
              <div key={index}>
                <p className="web-heading">{item.hading}</p>
                <h2>{item.name}</h2>
                <p>{item.subHading}</p>

                {/* btn group */}
                <div className="btn-group">
                  <button className="outline-btn">
                    <a href="#">
                      Download CV <RiDownload2Fill />
                    </a>
                  </button>
                </div>

                {/* avatar stats */}
                <div className="avatar-stats">
                  <div className="avatar-group">
                    <div className="avatar">
                      <div className="avatar-image">
                        <img
                          src="https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="avatar-image">
                        <img
                          src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="avatar-image">
                        <img
                          src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="avatar-image">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZbZRHsGIPHphj_dtaCEpwlKYSR_kwfJrAcGdI84eWssxBzY2It2fQUHIxAbF0BOc1Vk&usqp=CAU"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="avatar-counter">
                        <span>+15</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="student-count">Developer</span>
                  </div>
                </div>

                {/* social icons */}
                <div className="icones">
                  <a href={item.linkedin} target="_blank">
                    <FaLinkedin />
                  </a>
                  <a href={item.github} target="_blank">
                    <FaGithubSquare />
                  </a>
                  <a href={item.facebook} target="_blank">
                    <FaFacebook />
                  </a>
                  <a href={item.instagram} target="_blank">
                    <FaInstagramSquare />
                  </a>
                </div>

                {/* stats */}
                <div className="stats">
                  <div>
                    <strong>{item.experience}</strong> Experience
                  </div>
                  <div>
                    <strong>{item.projects}</strong> Projects
                  </div>
                  <div>
                    <strong>{item.clients}</strong> Clients
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {InformationList.map((item, index) => {
          return (
            <div key={index} className="hero-image">
              <img src={item.img} alt="Businessman" />
            </div>


          );
        })}
         
     
      </section>
      
    );
  }
};

export default HeroSection;








