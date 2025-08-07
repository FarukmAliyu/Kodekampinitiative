import React from 'react';
import './impact.css';

function ImpactHighlightsSection() {
  return (
    <section className="py-5 impact-section">
      <div className="container">
        <h2 className="text-center text-primary mb-5">Our Growing Impact</h2>
        <div className="row text-center">
          
          <div className="col-md-3">
            <div className="p-4 bg-white rounded shadow impact-card">
              <div className="icon-circle bg-success text-white mx-auto mb-3 pulse">
                <i className="bi bi-people-fill"></i>
              </div>
              <p className="mt-3 fw-bold">Children Educated</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 bg-white rounded shadow impact-card">
              <div className="icon-circle bg-info text-white mx-auto mb-3 float">
                <i className="bi bi-globe"></i>
              </div>
              <p className="mt-3 fw-bold">Communities Transformed</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 bg-white rounded shadow impact-card">
              <div className="icon-circle bg-warning text-white mx-auto mb-3 bounce">
                <i className="bi bi-bar-chart-fill"></i>
              </div>
              <p className="mt-3 fw-bold">Improvement in Learning</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 bg-white rounded shadow impact-card">
              <div className="icon-circle bg-danger text-white mx-auto mb-3 rotate">
                <i className="bi bi-person-check-fill"></i>
              </div>
              <p className="mt-3 fw-bold">Local Leaders Trained</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ImpactHighlightsSection;
