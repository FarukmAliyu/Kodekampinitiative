import React from 'react';
import snippetVideo from '../assets/Snippet.mp4'; // Adjust if needed
import learningImage from '../assets/IMG_20200605_201507-930x620.jpg'; // ✅ Imported image

export default function EarlyChildhood() {
  return (
    <div className="container py-5 mt-5">
      <h1 className="text-primary mb-4 text-center"></h1>

      <p className="lead text-muted text-center">
        <strong>Mission:</strong> Nurturing curiosity and confidence through culturally-grounded early learning.
      </p>

      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <h4 className="text-success">Core Components</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Mother Tongue Literacy:</strong> Hausa language development through songs, stories, and games.
            </li>
            <li className="list-group-item">
              <strong>STEM Foundations:</strong> Basic concepts through traditional materials and nature exploration.
            </li>
            <li className="list-group-item">
              <strong>Social Skills:</strong> Community values, sharing, cooperation, and respect.
            </li>
            <li className="list-group-item">
              <strong>Creative Expression:</strong> Art, music, and storytelling rooted in local traditions.
            </li>
          </ul>
        </div>

        <div className="col-md-6 mb-4">
          <h4 className="text-info">Learning Outcomes</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Recognize and speak basic Hausa words and phrases</li>
            <li className="list-group-item">Identify simple patterns, shapes, and natural elements</li>
            <li className="list-group-item">Demonstrate positive social behaviors (e.g., sharing, turn-taking)</li>
            <li className="list-group-item">Create and share personal stories or drawings using local themes</li>
          </ul>
        </div>
      </div>

      {/* Media Section */}
      <div className="mt-5">
        <h3 className="text-center text-secondary mb-4">Past Learning Materials</h3>
        <div className="row">
          {/* Local Video */}
          <div className="col-md-6 mb-4">
            <video controls className="w-100 rounded shadow">
              <source src={snippetVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-2 text-center text-muted"></p>
          </div>

          {/* Local Image */}
          <div className="col-md-6 mb-4 text-center">
            <img
              src={learningImage}
              alt="Learning Activity"
              className="img-fluid rounded shadow"
            />
            <p className="mt-2 text-muted"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
