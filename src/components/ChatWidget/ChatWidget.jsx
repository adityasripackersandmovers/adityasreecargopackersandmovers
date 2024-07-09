import React, { useState } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/917092826603', '_blank');
  };

  const makeCall = () => {
    window.location.href = 'tel:+917092826603';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:example@example.com';
  };

  return (
    <div>
      <div className={`chat-widget ${isChatOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <span className="chat-name">Aditya</span>
          <span className="chat-status">Online</span>
          <button className="chat-close" onClick={toggleChat}>&times;</button>
        </div>
        <div className="chat-body">
          <div className="chat-message">
            <span className="message-time">15:22</span>
            <div className="message-content">
              <p>Hi there 👋</p>
              <p>How can I help you?</p>
            </div>
          </div>
        </div>
        <div className="chat-footer">
          <button className="chat-button whatsapp" onClick={openWhatsApp}>WhatsApp</button>
          <button className="chat-button call" onClick={makeCall}>Call</button>
          <button className="chat-button email" onClick={sendEmail}>Email</button>
        </div>
      </div>
      <div className="contact-us">
        <button className="contact-us-button" onClick={toggleChat}>Contact Us</button>
      </div>
    </div>
  );
};

export default ChatWidget;
