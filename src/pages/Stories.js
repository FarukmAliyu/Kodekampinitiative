import React from 'react';

export default function Stories() {
  return (
    <div className="container py-5 mt-5">
      <h1 className="text-center text-primary mb-4"></h1>
      <p className="lead text-muted text-center mb-5">
        Real stories of transformation from individuals and communities across Northern Nigeria.
      </p>

      {/* Story 1 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-5">
          <img
            src="/path-to-your-image1.jpg"
            alt="Success story 1"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Story 2 */}
      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-5">
          <img
            src="/path-to-your-image2.jpg"
            alt="Success story 2"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Story 3 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-5">
          <img
            src="/path-to-your-image3.jpg"
            alt="Success story 3"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}
