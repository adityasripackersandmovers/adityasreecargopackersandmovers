import React from 'react';

const Hero = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

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
              <h5 className="wow fadeInUp">Our Mission: Food, Education, Medicine</h5>
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                We’re On A Mission
                To Change That
              </h1>
              <div className="hero-button">
                <a href="causes.html" className="theme-btn wow fadeInUp" data-wow-delay=".5s">View Causes</a>
                <a href="donation-details.html" className="theme-btn transparent-btn wow fadeInUp" data-wow-delay=".7s">Donate Now</a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay=".4s">
            <div className="hero-form">
              <div className="hero-title">
                <h6>We're Near to Our</h6>
                <h2>Donate Today</h2>
                <p>Lorem ipsum dolor sit amet con  sed do eiusmod tempor incididunt The long journey to end poverty begins with a child.</p>
              </div>
              <form onSubmit={onSubmit}>
              <input type="hidden" name="apikey" value="82a70a6b-8212-4cb5-8cb0-4cf391ea10f6"></input>
              <div className="donate-amount mt-4 wow fadeInUp" data-wow-delay=".5s">
                <p> Name  :</p><input className="active amount-btn" type="text" name="name" required/>
              </div>
              <div className="donate-amount mt-4 wow fadeInUp" data-wow-delay=".5s">
              <p> Email  :</p><input className="active amount-btn" type="email" name="email" required/>
              </div>
              <div className="donate-amount mt-4 wow fadeInUp" data-wow-delay=".5s">
              <p> Message  :</p><textarea className="active amount-btn" name="message" required></textarea>
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
