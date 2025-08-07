import React from 'react';
import './partnership.css'; // we’ll put the custom background here

function Partnership() {
  return (
    <section className="partnership-section text-white text-center py-5">
      <div className="container">
        <h2 className="mb-4">Working Together for Lasting Change</h2>
        <p className="lead mb-4">
          We collaborate with communities, government, NGOs, and funders to create lasting educational impact across Northern Nigeria.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#partnerships" className="btn btn-danger btn-lg">Explore Partnerships</a>
          <a href="#get-involved" className="btn btn-outline-light btn-lg">Join Our Mission</a>
        </div>
      </div>
    </section>
  );
}

export default Partnership;
