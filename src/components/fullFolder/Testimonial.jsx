import React from 'react';
import "./Testimonial.css";




const Testimonial = () => {




  const scrollCarousel = (direction) => {
    const carousel = document.getElementById('carousel');
    const scrollAmount = 320;
    carousel.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
  };

  const showAlert = (name) => {
    alert(`More details about ${name}`);
  };








  return (
    <div className="App-container"> 
       <h2><span>Tes</span>timonial</h2>
    <div className="carousel-wrapper">
      
      <div className="carousel-arrow" onClick={() => scrollCarousel(-1)}>
        &#8592;
      </div>
      <div className="carousel-container" id="carousel">
        {/* Card 1 */}
        <div className="carousel-card">
         
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            className="card-imagehadingok"
            alt="Speaker 1"
          />
          <div className="card-info">
            <div className="card-name">Rochelle Fernandez</div>
            <div className="card-titleridoy">Learn about no-code tools</div>
          </div>
          <button className="details-button" onClick={() => showAlert('Rochelle Fernandez')}>
           Details →
          </button>
        </div>

        {/* Card 2 */}
        <div className="carousel-card">
         
          <img
            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
            className="card-imagehadingok"
            alt="Speaker 2"
          />
          <div className="card-info">
            <div className="card-name">Regina Phalange</div>
            <div className="card-title">Nail your interviews</div>
          </div>
          <button className="details-button" onClick={() => showAlert('Regina Phalange')}>
            Details →
          </button>
        </div>

        {/* Card 3 */}
        <div className="carousel-card">
          
          <img
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
            className="card-imagehadingok"
            alt="Speaker 3"
          />
          <div className="card-info">
            <div className="card-name">John Doe</div>
            <div className="card-title">Launch your first product online</div>
          </div>
          <button className="details-button" onClick={() => showAlert('John Doe')}>
             Details →
          </button>
        </div>
      </div>
      <div className="carousel-arrow" onClick={() => scrollCarousel(1)}>
        &#8594;
      </div>
    </div>
  </div>
  );
};

export default Testimonial;