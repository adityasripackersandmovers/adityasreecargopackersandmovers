import React from 'react'

const Error = () => {
  return (
    <div>
        {/* 
        <div className="breadcrumb-wrapper section-padding bg-cover" style="background-image: url('assets/img/breadcrumb.jpg');">
            <div className="container">
                <div className="page-heading">
                    <div className="breadcrumb-sub-title">
                        <h5 className="wow fadeInUp">Our Mission: Food, Education, Medicine</h5>
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">error page</h1>
                    </div>
                    <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                        <li>
                            <a href="index.html">
                            Home
                            </a>
                        </li>
                        <li>
                            <i className="fal fa-minus"></i>
                        </li>
                        <li>
                            error page
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        */}
        <section className="error-section section-padding fix">
            <div className="container">
                <div className="error-content text-center">
                    <h2 className="mt-char-animation">4<span>0</span>4</h2>
                    <h3 className="wow fadeInUp" data-wow-delay=".5s">we’re sorry page not found</h3>
                    <a href="index.html" className="theme-btn style-line-height mt-5 wow fadeInUp" data-wow-delay=".7s">
                    <span className="button-text">Back To Home</span>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Error
