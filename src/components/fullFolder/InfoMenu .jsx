import { useState } from "react";
import GatDataStore from "../../store/GatDataStore";
import AboutMenuLoder from "../../skeleton/AboutMenuLoder";

export default function ResumeTabs() {
  const [activeTab, setActiveTab] = useState("experience");

  const { SkillsList, ExperienceList, EducationList, AboutList } =
    GatDataStore();

  return (
    <section className="tabs">
      <div className="tab-wrapper">
        <h2 className="tab-title">
          <span>My</span> Resume
        </h2>
        <div className="tab-list">
          <button
            className={`tab-button ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>

          <button
            className={`tab-button ${
              activeTab === "experience" ? "active" : ""
            }`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>

          <button
            className={`tab-button ${
              activeTab === "education" ? "active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>

          <button
            className={`tab-button ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            About Me
          </button>
        </div>

        <div className="content-container">
          {activeTab === "experience" && (
            <div className="tab-content active">
              <h2 className="hading-head">Professional Experience</h2>

              {ExperienceList === null ? (
                <AboutMenuLoder />
              ) : (
                ExperienceList?.map((exp, i) => (
                  <div key={i} className="heading-cards">
                    <h3 >{exp.hading}</h3>
                    <p className="credentialId-Experience">{exp.credentialId}</p>
                    <p className="new-date-Experience">{exp.date}</p>
                    <p>
                      <small className="new-subHading">{exp.subHading}</small>
                    </p>

                    <div>
                      {exp.skills?.map((skill, index) => (
                        <span key={index} className="badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "education" && (
            <div className="tab-content active">
              <h2 className="hading-head">Educational Background</h2>
              {EducationList === null ? (
                <AboutMenuLoder />
              ) : (
                EducationList?.map((edu, i) => (
                  <div key={i} className="heading-cards">
                    <h3>{edu.hading}</h3>
                    <p className="credentialId">{edu.credentialId}</p>
                    <p className="new-date">{edu.date}</p>
                    <p >
                      <small className="new-subHading">
                        {edu.subHading} 
                      </small>
                    </p>

                    <div>
                      {edu.skills?.map((highlight, index) => (
                        <span key={index} className="badge">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="tab-content active">
              <h2 className="hading-head">Technical Skills</h2>
              {SkillsList === null ? (
                <AboutMenuLoder />
              ) : (
                SkillsList?.map((skillGroup, i) => (
                  <div key={i} className="heading-cards">
                    <h3 className="text-underline">{skillGroup.hading}</h3>

                    <p>
                      <small className="new-subHading">
                        {skillGroup.subHading}
                      </small>
                    </p>

                    <div>
                      {skillGroup.skills?.map((skill, index) => (
                        <span key={index} className="badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "about" && (
            <div className="tab-content active">
              <h2 className="hading-head">About Me</h2>
              {AboutList === null ? (
                <AboutMenuLoder />
              ) : (
                AboutList?.map((exp, i) => (
                  <div key={i} className="heading-cards">
                    <h3>{exp.hading}</h3>
                    <p className="credentialId">{exp.credentialId}</p>
                    <p className="new-date">{exp.date}</p>
                    <p>
                      <small className="new-subHading">{exp.subHading}</small>
                    </p>

                    <div>
                      {exp.interests?.map((skill, index) => (
                        <span key={index} className="badge">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div>
                      {exp.languages?.map((skill, index) => (
                        <span key={index} className="badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
