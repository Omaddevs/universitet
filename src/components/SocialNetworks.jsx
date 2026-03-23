import React from 'react';
import './SocialNetworks.css';
import { FaInstagram, FaTelegramPlane, FaFacebookF, FaYoutube, FaLinkedinIn, FaRegCommentDots, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa';
import { FiPlayCircle } from 'react-icons/fi';
import { BsChatText } from 'react-icons/bs';

import instagramImg from '../social-media-images/instagram.jpg';
import telegramImg from '../social-media-images/telegram.jpg';
import facebookImg from '../social-media-images/facebook.jpg';
import youtubeImg from '../social-media-images/youtube.jpg';
// Fallback logic for linkedin or just omit it since the image is missing.
// I'll render the four we have, plus a dummy one for linkedin if needed to match 5, 
// using one of the existing images safely. But 4 is fine too. Let's do 5 to match the visual width.
import linkedinImg from '../social-media-images/facebook.jpg'; // fallback to facebook 

const SocialNetworks = () => {
     const networks = [
          { name: 'Instagram', icon: <FaInstagram />, img: instagramImg, offset: '0px', url: 'https://www.instagram.com/iau_uz?igsh=MW1qeTZ5N3YyazhneA==' },
          { name: 'Telegram', icon: <FaTelegramPlane />, img: telegramImg, offset: '-15px', url: 'https://t.me/iau_uz' },
          { name: 'Facebook', icon: <FaFacebookF />, img: facebookImg, offset: '-25px', url: 'https://www.facebook.com/share/WND1PuA6C6xFT8mU/?mibextid=qi2Omg' },
          { name: 'YouTube', icon: <FaYoutube />, img: youtubeImg, offset: '-15px', url: 'https://youtube.com/@iau_2022?si=wpViWkIgyDb5xzc-' },
          { name: 'LinkedIn', icon: <FaLinkedinIn />, img: linkedinImg, offset: '0px', url: 'https://www.linkedin.com/school/international-agriculture-university/' },
     ];

     return (
          <section className="social-networks-section">
               {/* Background Icons (Faded Pattern) */}
               <div className="sn-bg-icons"></div>

               <div className="sn-container">
                    <div className="sn-text-content">
                         <h2 className="sn-title">
                              Subscribe to our pages<br />
                              on <span className="sn-highlight">social networks</span>
                         </h2>
                         <p className="sn-subtitle">Follow the latest news about us</p>
                    </div>

                    <div className="sn-phones-wrapper">
                         {networks.map((net, idx) => (
                              <div
                                   key={idx}
                                   className="sn-phone-card"
                              >
                                   <div className="sn-phone-screen">
                                        <div className="sn-notch"></div>
                                        <img src={net.img} alt={`${net.name} page`} className="sn-screen-img" />
                                   </div>
                                   <div className="sn-button-overlay">
                                        <a href={net.url} target="_blank" rel="noopener noreferrer" className="sn-action-btn" style={{ textDecoration: 'none' }}>
                                             {net.icon} {net.name}
                                        </a>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default SocialNetworks;
