import React from 'react'

const PageTitle = ({ title }) => {
    return (
      <>
          <div className="single-slider slider-height2 d-flex align-items-center">
              <div className="container">
                  <div className="row">
                      <div className="col-xl-12">
                          <div className="hero-cap text-center">
                              <h2>{title}</h2>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>    
    )
  }

  export default PageTitle

