import React,{ useState, useEffect } from 'react'

const Hero = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "82a70a6b-8212-4cb5-8cb0-4cf391ea10f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="hero-section hero-1 style-hero-3">
      <div className="hero-image bg-cover" style={{ backgroundImage: "url('assets/img/hero/hero-8.jpg')" }}></div>
      <div className="container">
        <div className="row g-4 align-items-center justify-content-between">
          <div className="col-xl-7 col-lg-6">
            <div className="hero-content">
              <h5 className="wow fadeInUp">Reliable Moving Services</h5>
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                We’re Here To Make Your Move Easy
              </h1>
              <div className="hero-button">
                <a href="causes.html" className="theme-btn wow fadeInUp" data-wow-delay=".5s">View Services</a>
                <a href="donation-details.html" className="theme-btn transparent-btn wow fadeInUp" data-wow-delay=".7s">Get A Quote</a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay=".4s">
            <div className="hero-form">
              <div className="hero-title">
                <h6>Contact Us Today</h6>
                <h2>Request A Quote</h2>
                <p>Fill in the details below to get a free quote for your move.</p>
              </div>
              <form onSubmit={onSubmit}>
              <input type="hidden" name="apikey" value="82a70a6b-8212-4cb5-8cb0-4cf391ea10f6"></input>
              <div className="donate-amount mt-4 wow fadeInUp" data-wow-delay=".5s">
              <p className="formtext"> Name  :</p><input className="active amount-btn formtextbox" type="text" name="name" placeholder="Please enter your Name" required/>
              </div>
              <div className="donate-amount mt-4 wow fadeInUp" data-wow-delay=".5s">
              <p className="formtext"> Email  :</p><input className="active amount-btn formtextbox" type="email" name="email" placeholder="Please enter your Email" required/>
              </div>
              <div className="donate-amount mt-4 wow fadeInUp" data-wow-delay=".5s">
              <p className="formtext"> Message  :</p><textarea className="active amount-btn formtextbox" name="message" placeholder="Please enter your Message" required></textarea>
              </div>
              <div className="donate-now mt-4 wow fadeInUp" data-wow-delay=".7s">
                <div className="btn-one">
                  <span className="btn-circle"></span>
                  <a href="#" className="theme-btn">
                    <span className="btn-text" type="submit">
                      SUBMIT
                    </span>
                  </a>
                </div>
              </div>
              </form>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
