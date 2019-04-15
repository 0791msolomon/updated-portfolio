import React from "react";
import index from "./index.css";
const Footer = props => {
  return (
    <div class="footer">
      <footer className="fixed-bottom" style={{ height: "2%" }}>
        <a
          style={{ marginRight: "2%" }}
          href="https://www.linkedin.com/in/matthew-solomon-a14683140/"
          target="_blank"
        >
          <i
            className="fa fa-linkedin-square"
            style={{ fontSize: "100%", color: "#0077B5" }}
          />
        </a>
        <a
          href="https://www.facebook.com/mateo.solomon.16"
          target="_blank"
          style={{ height: "100%" }}
        >
          <i
            className="fa fa-facebook-official"
            style={{ fontSize: "48", color: "#4267b2" }}
          />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
