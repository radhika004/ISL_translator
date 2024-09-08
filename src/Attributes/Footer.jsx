import "./Navbar.css";


import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="footer">
    <h2>ISL </h2>
      <div className="footer-content"  >          
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="Address">            
            <PhoneIcon /> <p> + 91 XXX-XXX-XXXX </p>
          </div>
          <div className="Address">           
            <LocationOnIcon />
             <p> DYPCET Kolhpaur  </p>
          </div>

        </div>
        <div className="footer-section">
          <h3>Follow</h3>
          <div className="socialMediaIcons">
          <a href="#" target= "blank" >
              <InstagramIcon fontSize="large" />
            </a>
            <a href ="#" target= "blank">
              <FacebookIcon fontSize="large"  />
            </a>
            <a href="#" target= "blank">
              <LinkedInIcon fontSize="large"  />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

