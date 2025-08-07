import React from 'react';
import './problemsolution.css';  // We'll create this CSS file

function ProblemSolutionSection() {
  return (
    <section className="problem-solution-section py-5">
      <div className="container">
        <h2 className="text-center text-primary mb-5">Bridging the Education Gap</h2>
        <div className="row g-4">

          <div className="col-md-6">
            <div className="p-4 bg-white shadow rounded problem-card border-start border-5 border-danger">
              <div className="icon-circle bg-danger text-white mb-3">
                <i className="bi bi-exclamation-triangle-fill"></i>
              </div>
              <h3>The Challenge</h3>
              <p>
                In rural Northern Nigeria, millions of children lack access to quality education that connects their cultural identity with modern opportunities.
                This educational divide perpetuates cycles of poverty and limits community development.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 bg-white shadow rounded problem-card border-start border-5 border-success">
              <div className="icon-circle bg-success text-white mb-3">
                <i className="bi bi-lightbulb-fill"></i>
              </div>
              <h3>Our Solution</h3>
              <p>
                KodeKamp establishes community learning centers that provide comprehensive education for ages 3-18,
                combining traditional Hausa values with innovative teaching methods, technology integration, and life skills development.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProblemSolutionSection;
