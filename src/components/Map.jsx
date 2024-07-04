import React from 'react'

const Map = () => {
  return (
    <div className='map'>
      <iframe
      className="responsive-iframe"
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d280.2255623509898!2d79.4077045990242!3d13.61415630318579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDM2JzUwLjkiTiA3OcKwMjQnMjguMyJF!5e1!3m2!1sen!2sin!4v1720097931680!5m2!1sen!2sin"
      width="100%"
      height="500"
      style={{ border: '0' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
    </div>
  )
}

export default Map