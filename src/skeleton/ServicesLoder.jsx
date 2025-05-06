const ServicesLoader = () => {
  const placeholders = [1, 2];

  return (
    <section className="services-section">
      <h2><span>Ser</span>vices I Provide</h2>
      <div className="services-grid">
        {placeholders.map((_, i) => (
          <div key={i} className="service-card" style={{ width: '400px', height: '400px' }}>
            {/* Circle icon skeleton */}
            <div className="service-icon-wrapper d-flex justify-content-center align-items-center mb-4" style={{ width: '90px', height: '90px' }}>
              <div className="placeholder rounded-circle bg-secondary" style={{ width: '70px', height: '70px' }}></div>
            </div>

            {/* Title skeleton */}
            <div className="placeholder-glow mb-3" style={{ width: '60%' }}>
              <span className="placeholder col-12 bg-secondary" style={{ height: '20px', display: 'block' }}></span>

            </div>

            <div className="placeholder-glow  mt-5 w-100">
    <span className="placeholder bg-secondary d-block mb-2" style={{ height: '15px', width: '100%' }}></span>
    <span className="placeholder bg-secondary d-block mb-2" style={{ height: '15px', width: '100%' }}></span>
    <span className="placeholder bg-secondary d-block mb-2" style={{ height: '15px', width: '100%' }}></span>
    <span className="placeholder bg-secondary d-block mb-2" style={{ height: '15px', width: '100%' }}></span>
    <span className="placeholder bg-secondary d-block mb-2" style={{ height: '15px', width: '100%' }}></span>
    <span className="placeholder bg-secondary d-block mb-2" style={{ height: '15px', width: '100%' }}></span>
  </div>
















           
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesLoader;
