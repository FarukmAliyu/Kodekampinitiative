import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Funding() {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/contact'); // adjust path if your contact route is different
  };

  return (
    <div className="container py-5 mt-5">
      <h1 className="text-center text-primary mb-4"></h1>
      <p className="lead text-muted text-center mb-5">
        Your support helps us bring transformative education and opportunity to children and communities across Northern Nigeria.
      </p>

      {/* Donation Options Section */}
      <div className="mb-5">
        <h3 className="text-success">One-Time and Recurring Donations</h3>
        <p>
          Make a one-time contribution or set up a recurring donation to support our ongoing efforts. Every contribution—big or small—makes a difference.
        </p>
      </div>

      {/* Program Sponsorships Section */}
      <div className="mb-5">
        <h3 className="text-warning">Specific Program Sponsorships</h3>
        <p>
          Choose to sponsor a specific program like Early Childhood Education, STEM Bootcamps, or Rural Digital Hubs. We'll provide regular updates and measurable impact reports.
        </p>
      </div>

      {/* Corporate Partnerships Section */}
      <div className="mb-5">
        <h3 className="text-info">Corporate Partnership Packages</h3>
        <p>
          Partner with us as a business to create long-term educational impact. Corporate packages include branding visibility, CSR reports, and staff engagement opportunities.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-4">
        <button className="btn btn-primary btn-lg" onClick={handleDonateClick}>
          Donate Now
        </button>
      </div>
    </div>
  );
}
