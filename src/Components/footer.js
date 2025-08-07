import React from 'react';
import './footer.css'; // Import custom footer styling

function Footer() {
  return (
    <footer className="footer-section text-white pt-5">
      <div className="container">

        <div className="row">
          <div className="col-md-3 mb-4">
            <h5 className="section-title">Programs</h5>
            <ul className="list-unstyled">
              <li><a href="#">Early Foundations</a></li>
              <li><a href="#">Growing Minds</a></li>
              <li><a href="#">Future Leaders</a></li>
              <li><a href="#">Community Training</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="section-title">Get Involved</h5>
            <ul className="list-unstyled">
              <li><a href="#">Fund Our Mission</a></li>
              <li><a href="#">Volunteer Skills</a></li>
              <li><a href="#">Host a Program</a></li>
              <li><a href="#">Partner With Us</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="section-title">Focus Areas</h5>
            <ul className="list-unstyled">
              <li><a href="#">Kaduna State</a></li>
              <li><a href="#">FCT Initiative</a></li>
              <li><a href="#">Cultural Integration</a></li>
              <li><a href="#">Technology Platform</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="section-title">Contact</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:amaliyu@hotmail.com">amaliyu@hotmail.com</a></li>
              <li><a href="tel:08091133977">08091133977</a></li>
              <li><a href="#">Download Media Kit</a></li>
              <li><a href="#">Impact Reports</a></li>
            </ul>
          </div>
        </div>

        <div className="social-icons text-center mb-3">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-twitter-x"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
        </div>

        <div className="text-center">
          <small>&copy; 2023 KodeKamp Technology Initiative Limited. Empowering communities through education.</small>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
