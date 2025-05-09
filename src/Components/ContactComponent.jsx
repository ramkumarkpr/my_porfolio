import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const ContactComponent = () => {
  return (
    <div>
      <div className="@container">
        <h4 className="text-xl text-blue-500 font-extrabold">Contact me</h4>
        <div className="flex gap-7 py-3">
          {/* Insta Logo */}
          <div className="py-3">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: "30px" }}
              className="insta-logo rounded-full hover:scale-110 transition duration-300"
            />
          </div>
          {/* Whatsapp Logo */}
          <div className="py-3">
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ fontSize: "30px" }}
              className="whatsapp-logo rounded-full hover:scale-110 transition duration-300"
            />
          </div>
          {/* Facebook Logo */}
          <div className="py-3">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: "30px" }}
              className="facebook-logo rounded-full hover:scale-110 transition duration-300"
            />
          </div>
          {/* Twitter Logo */}
          <div className="py-3">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ fontSize: "30px" }}
              className="twitter-logo rounded-full hover:scale-110 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
