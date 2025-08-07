
import React from 'react';

export default function Opportunities() {
  return (
    <div className="container py-5 mt-5">
      <h1 className="text-center text-primary mb-4"></h1>
      <p className="lead text-muted text-center mb-5">
        Partner with KodeKamp to expand access to quality, culturally-grounded education in Northern Nigeria.
      </p>

      {/* Communities Section */}
      <div className="mb-5">
        <h3 className="text-warning">For Communities</h3>
        <ul className="list-unstyled mt-3">
          <li className="mb-2">• <strong>Bring KodeKamp programs to your village</strong></li>
          <li className="mb-2">• Learn about our community readiness criteria</li>
          <li className="mb-2">• Apply through a simple online or SMS-based process</li>
        </ul>
      </div>

      {/* Organizations Section */}
      <div className="mb-5">
        <h3 className="text-danger">For Organizations</h3>
        <ul className="list-unstyled mt-3">
          <li className="mb-2">• <strong>Collaborate on program delivery and capacity building</strong></li>
          <li className="mb-2">• Gain access to our culturally-relevant curriculum</li>
          <li className="mb-2">• Apply for technical assistance and joint funding opportunities</li>
        </ul>
      </div>

      {/* Government Section */}
      <div className="mb-5">
        <h3 className="text-info">For Government</h3>
        <ul className="list-unstyled mt-3">
          <li className="mb-2">• <strong>Support policy alignment and scale successful models</strong></li>
          <li className="mb-2">• Integrate KodeKamp tools into national or state education systems</li>
          <li className="mb-2">• Partner with us on teacher training, digital learning, and rural outreach</li>
        </ul>
      </div>

      {/* Funders Section */}
      <div className="mb-5">
        <h3 className="text-success">For Funders</h3>
        <ul className="list-unstyled mt-3">
          <li className="mb-2">• <strong>Invest in proven education models with measurable outcomes</strong></li>
          <li className="mb-2">• Support at different funding levels — from a classroom to a whole region</li>
          <li className="mb-2">• Receive transparent reporting and stories of impact</li>
        </ul>
      </div>
    </div>
  );
}
