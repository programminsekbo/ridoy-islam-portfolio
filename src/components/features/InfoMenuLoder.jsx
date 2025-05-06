import React from "react";

import './Loder.css'

const InfoMenuLoder = () => {
 




  return (
    <div className="container-fluid bg-light ">
      <div className="row align-items-center justify-content-center  px-3 px-md-5 flex-column flex-lg-row-reverse">
        {/* Image Placeholder - Will be on top in mobile, right side in desktop */}
        <div className=" col-12 col-lg-6 text-heding  mb-5 mb-lg-0 ">
          <div
            className="mx-auto shadow img-ridoy placeholder-glow"
            style={{
              width: "80vw",         
              height: "80vw",        
              maxWidth: "350px",     
              maxHeight: "350px",
              minWidth: "200px",     
              minHeight: "200px",
              borderRadius: "50%",    
              backgroundColor: "#dee2e6",
              boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
            }}
          ></div>
        </div>

        {/* Text Placeholder - Left side in desktop */}
        <div className="col-12  col-lg-6">
          <div className="placeholder-glow ridoy-islam mt-5 mb-5">
            <span
              className="placeholder col-4 bg-warning"
              style={{ height: "1.6rem" }}
            ></span>
          </div>

          <div className="placeholder-glow ridoy-islam mb-5">
            <span
              className="placeholder col-7"
              style={{ height: "3rem" }}
            ></span>
          </div>

          <div className="placeholder-glow ridoy-islam mb-5">
            <span className="placeholder  col-12 mb-2"></span>
            <span className="placeholder col-10 mb-2"></span>
            <span className="placeholder col-8"></span>
            <span className="placeholder col-5"></span>
          </div>

          <div className="placeholder-glow ridoy-islam  my-5">
            <span className="placeholder btn btn-success col-3 py-2"></span>
          </div>

          <div className="d-flex my-3 ridoy-islam placeholder-glow">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="placeholder  rounded-circle bg-secondary"
                style={{ width: "40px", height: "40px" }}
              ></div>
            ))}
          </div>

          <div className="d-flex pt-5 gap-4  my-3 ridoy-islam placeholder-glow">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="placeholder bg-secondary"
                style={{ width: "40px", height: "40px" }}
              ></div>
            ))}
          </div>

          <div className="d-flex gap-4 mt-5  ridoy-islam placeholder-glow">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="placeholder  col-3"
                style={{ height: "2rem" }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMenuLoder;
