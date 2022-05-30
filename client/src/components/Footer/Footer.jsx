import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerMainDiv">
        <div className="footerLeft">
          <h1 className="h1footer, footerTitle">Tempting Pastry</h1>
          <h4 className="h4footer">Open Hours</h4>
          <div className="footerProgram">
            <div className="footerDays">
              <h2 className="h2footer">Wholesale department</h2>
              <p>Monday-Friday</p>
              <h2 className="h2footer">Retail and Cafe</h2>
              <p>Monday-Saturday</p>
              <p>Sunday</p>
            </div>
            <div></div>
            <div className="footerHours">
              <h2 className="h2footer">9AM-5PM</h2>
              <p className="pfooter">We are closed on Saturday and Sunday</p>
              <h2 className="h2footer">7AM-6PM</h2>
              <h2 className="h2footer">9AM-4PM</h2>
              <p className="pfooter">Closed on Christmas and New Years Day</p>
            </div>
          </div>
        </div>
        <div className="footerRight">
          <h4 className="h4footer">Find us</h4>
          <div className="footerMapContainer">
            <div className="footerMap">
              <div className="footerMapAdress">Winterhuder Weg</div>
            </div>

            <div className="footerMapFullAdress">
              <div>Hamburger Straße 22</div>
              <div>22083 Hamburg</div>
              <div className="footerLocationIcon">
                <LocationOnIcon />
              </div>
            </div>
          </div>
          <button className="footerButton footerWrapper">
            <a
              className="footerA"
              target="_blank"
              href="https://www.google.com/maps/place/Hamburger+Str.+22,+22083+Hamburg/@53.5713153,10.0263494,17z/data=!4m5!3m4!1s0x47b18ecea6304ddb:0xcf39588eefd82a00!8m2!3d53.5716657!4d10.0294393?hl=de"
            >
              <span className="footerSpan">View map</span>
            </a>
          </button>
          <h4 className="h4footer">Get social!</h4>
          <div className="footerSocial">
            <div>
              <FacebookIcon />
            </div>
            <div>
              <InstagramIcon />
            </div>
            <div>
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
