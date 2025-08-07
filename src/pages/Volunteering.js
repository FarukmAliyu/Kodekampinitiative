import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Volunteering() {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/contact'); // adjust if your contact route differs
  };

  return (
    <div className="container py-5 mt-5">
      <h1 className="text-center text-success mb-4"></h1>
      <p className="lead text-muted text-center mb-5">
        Join our mission to empower the next generation of African innovators. Your time and talent can transform communities.
      </p>

      {/* On-site Volunteering */}
      <div className="mb-5">
        <h3 className="text-primary">On-site Teaching and Mentoring</h3>
        <p>
          Work directly with students in rural communities. Share your knowledge in ICT, STEM, or life skills, and inspire young minds face-to-face.
        </p>
      </div>

      {/* Remote Volunteering */}
      <div className="mb-5">
        <h3 className="text-warning">Remote Curriculum Development</h3>
        <p>
          Help us build culturally relevant educational materials. Collaborate with educators to develop lesson plans, worksheets, and videos tailored to our learners.
        </p>
      </div>

      {/* Technical Volunteering */}
      <div className="mb-5">
        <h3 className="text-info">Technical Support and App Development</h3>
        <p>
          Contribute to our tech platform by offering your skills in development, UX design, QA testing, or IT support. Help us reach more learners through innovation.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-4">
        <button className="btn btn-success btn-lg" onClick={handleApplyClick}>
          Apply to Volunteer
        </button>
      </div>
    </div>
  );
}
