import React from 'react';

 import GatDataStore from '../../store/GatDataStore';
 import ServicesLoder from './../../skeleton/ServicesLoder';



const Services = () => {
  const { ServicesList } = GatDataStore();

  if (ServicesList === null) {
    return <ServicesLoder />;
  }

  return (
    <section className="services-section">
      <h2><span>Ser</span>vices I Provide</h2>
      <div className="services-grid">
        {ServicesList.map((item, i) => (
          <div key={i} className="service-card">
            <div className="service-icon-wrapper">
              <img className="service-icon" src={item.img} alt={item.hading} />
            </div>
            <h3 className="service-title">💻 {item.hading}</h3>
            <p className="service-description">{item.subHading}</p>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;