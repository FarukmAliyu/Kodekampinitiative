import React from 'react';

function ProgramsOverviewSection() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center text-primary mb-5">Our Programs</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow text-center">
              <div className="display-1">🌱</div>
              <h3>Early Foundations</h3>
              <div className="badge bg-danger mb-2">Ages 3-6</div>
              <p>Building strong roots through story, play, and discovery in native language and culture.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow text-center">
              <div className="display-1">🚀</div>
              <h3>Growing Minds</h3>
              <div className="badge bg-danger mb-2">Ages 7-12</div>
              <p>Expanding horizons with technology, literacy, numeracy, and creative problem-solving.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow text-center">
              <div className="display-1">👑</div>
              <h3>Future Leaders</h3>
              <div className="badge bg-danger mb-2">Ages 13-18</div>
              <p>Developing skills for life, work, and community leadership in a modern world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsOverviewSection;
