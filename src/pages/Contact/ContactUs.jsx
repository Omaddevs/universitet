import React from "react";
import "./ContactUs.css";
import {
     IoCall,
     IoMail,
     IoLocationSharp,
     IoTimeOutline,
     IoLogoInstagram,
     IoPaperPlane,
     IoLogoFacebook,
     IoLogoYoutube
} from "react-icons/io5";

import bgVideo from "../../all-bg-videos/iau-bg.mp4";

export default function ContactUs() {
     return (
          <div className="contact-page">
               <div className="contact-hero">
                    <video autoPlay loop muted playsInline className="contact-hero-img" style={{ objectFit: 'cover' }}>
                         <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="contact-hero-overlay"></div>
                    <h1 className="contact-title">Contact us</h1>
               </div>

               <div className="contact-container">

                    <div className="contact-cards-grid">
                         {/* LEFT CARD: INFO */}
                         <div className="contact-card">
                              <h2>Contact information</h2>

                              <div className="contact-info-list">
                                   <div className="contact-info-item">
                                        <div className="contact-icon-wrapper">
                                             <IoCall />
                                        </div>
                                        <div className="contact-text-wrapper">
                                             <span className="contact-label">Phone number:</span>
                                             <span className="contact-value">+998 (99) 981-09-19</span>
                                        </div>
                                   </div>

                                   <div className="contact-info-item">
                                        <div className="contact-icon-wrapper">
                                             <IoMail />
                                        </div>
                                        <div className="contact-text-wrapper">
                                             <span className="contact-label">Email address:</span>
                                             <span className="contact-value">info@iau.uz</span>
                                        </div>
                                   </div>

                                   <div className="contact-info-item">
                                        <div className="contact-icon-wrapper">
                                             <IoLocationSharp />
                                        </div>
                                        <div className="contact-text-wrapper">
                                             <span className="contact-label">Location:</span>
                                             <span className="contact-value">University street №2 Kibray, Tashkent Uzbekistan, 111200</span>
                                        </div>
                                   </div>

                                   <div className="contact-info-item">
                                        <div className="contact-icon-wrapper">
                                             <IoTimeOutline />
                                        </div>
                                        <div className="contact-text-wrapper">
                                             <span className="contact-label">Work time:</span>
                                             <span className="contact-value">Mon - Fri: 09:00 - 18:00</span>
                                        </div>
                                   </div>
                              </div>

                              <div className="contact-socials">
                                   <a href="https://www.instagram.com/iau_uz" target="_blank" rel="noreferrer" className="contact-social-link">
                                        <IoLogoInstagram />
                                   </a>
                                   <a href="https://t.me/iau_uz" target="_blank" rel="noreferrer" className="contact-social-link">
                                        <IoPaperPlane /> {/* Telegram icon */}
                                   </a>
                                   <a href="https://www.facebook.com/share/WND1PuA6C6xFT8mU/?mibextid=qi2Omg" target="_blank" rel="noreferrer" className="contact-social-link">
                                        <IoLogoFacebook />
                                   </a>
                                   <a href="https://youtube.com/@iau_2022" target="_blank" rel="noreferrer" className="contact-social-link">
                                        <IoLogoYoutube />
                                   </a>
                              </div>
                         </div>

                         {/* RIGHT CARD: FORM */}
                         <div className="contact-card">
                              <h2>Send an application</h2>

                              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                   <div className="form-row">
                                        <div className="form-group">
                                             <label>Name:</label>
                                             <input type="text" placeholder="Enter" />
                                        </div>
                                        <div className="form-group">
                                             <label>Phone number:</label>
                                             <input type="text" placeholder="Enter" />
                                        </div>
                                   </div>

                                   <div className="form-group" style={{ flex: 1 }}>
                                        <label>Message:</label>
                                        <textarea placeholder="Enter"></textarea>
                                   </div>

                                   <button type="submit" className="submit-btn">
                                        Send application
                                   </button>
                              </form>
                         </div>
                    </div>

                    {/* MAP SECTION */}
                    <div className="contact-map-wrapper">
                         {/* Embed Google Map centered on location without default marker */}
                         <iframe
                              src="https://maps.google.com/maps?q=International%20Agricultural%20University,%20Университетская%20улица%202,%20Тоshkent,%20Toshkent,%20Uzbekistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title="International Agriculture University Map"
                         ></iframe>
                    </div>

               </div>
          </div>
     );
}
