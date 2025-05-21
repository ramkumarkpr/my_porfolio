import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ContactComponent = () => {
  const linkedLnUrl =
    "www.linkedin.com/in/ramkumar-react-front-end-developer-25b357326";

  return (
    <div>
      <div className="@container">
        <h4 className="text-xl text-blue-500 font-extrabold">Contact me</h4>
        <div className="flex gap-7 py-3">
          {/* Mail Logo */}
          <div className="py-3">
            <a
              href="mailto:ramkumarkpr1@gmail.com?subject=Hello Ramkumar&body=I visited your portfolio and would like to get in touch."
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ fontSize: "30px" }}
                className="insta-logo rounded-full hover:scale-110 transition duration-300"
              />
            </a>
          </div>
          {/* Linked Logo */}
          <div className="py-3">
            <a href={linkedLnUrl} target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: "30px" }}
                className="whatsapp-logo rounded-full hover:scale-110 transition duration-300"
              />
            </a>
          </div>
          {/* Whatsapp Logo */}
          <div className="py-3">
            <a href="https://wa.me/6381542401" target="_blank">
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ fontSize: "30px" }}
                className="facebook-logo rounded-full hover:scale-110 transition duration-300"
              />
            </a>
          </div>
          {/* Twitter Logo */}
          <div className="py-3">
            <Link>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ fontSize: "30px" }}
                className="twitter-logo rounded-full hover:scale-110 transition duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
