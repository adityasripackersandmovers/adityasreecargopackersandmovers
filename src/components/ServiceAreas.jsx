import React from 'react'

const ServiceAreas = () => {
    const cities = [
        "Packers and Movers In Tirupathi", "Packers and Movers In Srikalahasti", "Packers and Movers In Chittoor",
        "Packers and Movers In Bangalore", "Packers and Movers In Hyderabad", "Packers and Movers In Chennai",
        "Packers and Movers In Visakhapatnam", "Packers and Movers In Coimbatore", "Packers and Movers In Vijayawada",
        "Packers and Movers In Madurai", "Packers and Movers In Hubli and Dharwad", "Packers and Movers In Mysore",
        "Packers and Movers In Tiruchirappalli", "Packers and Movers In Salem", "Packers and Movers In Thiruvananthapuram",
        "Packers and Movers In Guntur", "Packers and Movers In Warangal", "Packers and Movers In Kochi",
        "Packers and Movers In Gulbarga", "Packers and Movers In Nellore", "Packers and Movers In Mangalore",
        "Packers and Movers In Belgaum", "Packers and Movers In Tirunelveli", "Packers and Movers In Ambattur",
        "Packers and Movers In Renigunta", "Packers and Movers In Tirumala", "Packers and Movers In Chandragiri",
        "Packers and Movers In Kanipakam", "Packers and Movers In pakala", "Packers and Movers In Hyderabad",
        "Packers and Movers In Kurnool", "Packers and Movers In Kakinada", "Packers and Movers In Tirupati",
        "Packers and Movers In Kadapa", "Packers and Movers In Eluru", "Packers and Movers In Vizianagaram",
        "Packers and Movers In Anantapur", "Packers and Movers In Nandyala", "Packers and Movers In Ongole",
        "Packers and Movers In Adoni", "Packers and Movers In Madanapalle", "Packers and Movers In Machilipatnam",
        "Packers and Movers In Tenali", "Packers and Movers In Proddatur", "Packers and Movers In Chittoor",
        "Packers and Movers In Hindupur", "Packers and Movers In Kadiri", "Packers and Movers In Dharmavaram",
        "Packers and Movers In Mangalagiri", "Packers and Movers In Belgaum", "Packers and Movers In Tirunelveli",
        "Packers and Movers In Ambattur", "Packers and Movers In Nellore", "Packers and Movers In Machilipatnam",
        "Packers and Movers In Tenali", "Packers and Movers In Proddatur", "Packers and Movers In Kakinada",
        "Packers and Movers In Tirupati", "Packers and Movers In Kadapa", "Packers and Movers In Eluru",
        "Packers and Movers In Kalikiri", "Packers and Movers In Proddatur", "Packers and Movers In Chittoor",
        "Packers and Movers In Koduru", "Packers and Movers In Ponneri", "Packers and Movers In Palamaner",
        "Packers and Movers In Punganur", "Packers and Movers In Puttur", "Packers and Movers In Nagari",
        "Packers and Movers In Yerpadu", "Packers and Movers In Chennai", "Packers and Movers In Visakhapatnam",
        "Packers and Movers In Coimbatore", "Packers and Movers In Vijayawada", "Packers and Movers In Puttur",
        "Packers and Movers In Nagari", "Packers and Movers In Yerpadu", "Packers and Movers In piler",
        "Packers and Movers In sullurupeta", "Packers and Movers In Sri City", "Packers and Movers In Tada",
        "Packers and Movers In Naidupeta", "Packers and Movers In Sriharikota", "Packers and Movers In VenkataGiri",
        "Packers and Movers In Kalikiri", "Packers and Movers In Koduru", "Packers and Movers In Ponneri",
        "Packers and Movers In Palamaner", "Packers and Movers In Proddatur", "Packers and Movers In Chittoor",
        "Packers and Movers In Punganur", "Packers and Movers In Rayachoty", "Packers and Movers In Thiruttani",
        "Packers and Movers In Mulbagal", "Packers and Movers In Arakkonam", "Packers and Movers In Rajampet",
        "Packers and Movers In Gudur", "Packers and Movers In Kadiri", "Packers and Movers In Dharmavaram",
        "Packers and Movers In Mangalagiri"
      ];

  return (
    <div className="container">
        <h2> Our Services Areas</h2>
      <div className="grid">
        {cities.map((city, index) => (
          <div className="column" key={index}>
            <h6>{city}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceAreas
