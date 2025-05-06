import React from 'react';

const WorkCardSkeleton = () => {
    return (


<>

  <div className="container py-5">
    <div className="row g-4">
      {/* Card 1 Skeleton */}
      <div className="col-md-4">
        <div className="card shadow-sm">
          <div className="placeholder-glow">
            <div
              className="card-img-top placeholder w-100"
              style={{ height: 200 }}
            />
          </div>
          <div className="card-body bg-dark text-white position-relative">
            <p className="placeholder-glow mb-2">
              <span className="placeholder col-4 bg-primary" />
            </p>
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6" />
            </h5>
            <p className="card-text placeholder-glow mt-1 "> 
              <span className="placeholder  col-7" />
              <span className="placeholder col-5" />
              <span className="placeholder  m-1  col-7" />
              <span className="placeholder  m-1  col-5" />
            </p>
            <div
              className="position-absolute bottom-0 end-0 m-3 bg-danger d-flex align-items-center justify-content-center"
              style={{ width: 50, height: 50, borderRadius: 4 }}
            >
              <span
                className="placeholder bg-light rounded-circle"
                style={{ width: 24, height: 24 }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Repeat for Card 2 and Card 3 if needed */}
    </div>
  </div>
</>
    );
};

export default WorkCardSkeleton;