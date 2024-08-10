import "../App.css";
import GitHubSVG from "../images/GitHub.svg";
import LinkedInSVG from "../images/LinkedIn.svg";
import InstagramSVG from "../images/Instagram.svg";
import SunGreen from "../images/Sun-Green.svg";
import GitHubWhite from "../images/GitHub-White.svg";
import LinkedInWhite from "../images/LinkedIn-White.svg";
import InstagramWhite from "../images/Instagram-White.svg";
import SunWhite from "../images/Sun-White.svg";
import MoonWhite from "../images/Moon-White.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PageTitleWithImagePlaceholder from "../components/PageTitleWithImagePlaceholder";

function LandingPage() {
  const navigate = useNavigate();

  const handleNavClick = (event, location) => {
    event.preventDefault();
    navigate(`/${location}`);
  };

  const leftDivStyle = {
    flex: "0 0 48%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const rightDivStyle = {
    flex: "0 0 48%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const contactNavStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  };

  return (
    <div className="backgroundBox">
      <div className="innerBackground" style={{ flex: "0 0 100%" }}>
        <div style={leftDivStyle}>
          <PageTitleWithImagePlaceholder />
          <div style={contactNavStyle}>
            <div>
              <a href="https://www.github.com/AlainAmbrose">
                <img
                  src={GitHubWhite}
                  alt="GitHub Link"
                  style={{ marginRight: "10px", height: "50px", width: "50px" }}
                />
              </a>
              <a href="https://www.linkedin.com/in/alain-ambrose">
                <img
                  src={LinkedInWhite}
                  alt="LinkedIn Link"
                  style={{ marginRight: "10px", height: "50px", width: "50px" }}
                />
              </a>
              <a href="https://www.instagram.com/alainambrose911/">
                <img
                  src={InstagramWhite}
                  alt="Instagram Link"
                  style={{ marginRight: "10px", height: "50px", width: "50px" }}
                />
              </a>
            </div>
            <div>
              <p>Orlando, FL</p>
              <p>ambrosealain@gmail.com</p>
            </div>
          </div>
        </div>
        <div style={rightDivStyle}>
          <div style={{ flex: "0 0 10%" }}></div>
          <nav>
            <ul className="navigation">
              <li className="navLi">
                <button
                  type="button"
                  onClick={(event) => handleNavClick(event, "about")}
                >
                  About
                </button>
              </li>
              {/* <li className="navLi">
                    <button
                      type="button"
                      onClick={(event) => handleNavClick(event, "skills")}
                    >
                      Skills
                    </button>
                  </li> */}
              <li className="navLi">
                <button
                  type="button"
                  onClick={(event) => handleNavClick(event, "projects")}
                >
                  Projects
                </button>
              </li>
              <li className="navLi">
                <button
                  type="button"
                  onClick={(event) => handleNavClick(event, "experience")}
                >
                  Experience
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
