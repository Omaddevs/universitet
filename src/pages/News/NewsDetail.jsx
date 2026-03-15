// src/pages/News/NewsDetail.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  IoCalendarOutline,
  IoEyeOutline,
  IoShareSocialOutline,
  IoHome,
  IoChevronForwardOutline,
} from "react-icons/io5";

import "./NewsDetail.css";

import campusBg from "../../images/campus.PNG";
import heroBgVid from "../../all-bg-videos/iau-bg.mp4";
import newsBig from "../../images/newsBig.jpg";
import slide1 from "../../images/image2.jpg";
import slide2 from "../../images/image3.jpg";
import slide3 from "../../images/image4.jpg";

export default function NewsDetail() {
  const { id } = useParams();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const galleryImages = [slide1, slide2, slide3];

  return (
    <div className="nd-page">

      {/* ── HERO ─────────────────────────────────── */}
      <div className="nd-hero">
        <video
          className="nd-hero-bg"
          src={heroBgVid}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="nd-hero-veil" />
        <div className="nd-hero-inner">
          {/* Breadcrumb pill */}
          <div className="nd-bc">
            <Link to="/"><IoHome className="nd-bc-home" /></Link>
            <IoChevronForwardOutline className="nd-bc-sep" />
            <Link to="/latest-news">News &amp; Events</Link>
            <IoChevronForwardOutline className="nd-bc-sep" />
            <span>Latest News</span>
          </div>
          <h1 className="nd-hero-title">
            Spiritual and Enlightenment Hour at the International Agriculture University – with the Rector
          </h1>
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────── */}
      <div className="nd-body">

        {/* LEFT */}
        <div className="nd-left">

          {/* Meta row */}
          <div className="nd-meta">
            <div className="nd-meta-group">
              <span className="nd-meta-item"><IoCalendarOutline /> 12 March, 2026</span>
              <span className="nd-meta-item"><IoEyeOutline /> 24</span>
            </div>
            <button className="nd-share"><IoShareSocialOutline /> Share</button>
          </div>

          {/* Main image */}
          <div className="nd-cover">
            <img src={newsBig} alt="News cover" />
          </div>

          {/* Article text */}
          <div className="nd-article">
            <p>
              An open and sincere meeting with students was organized at the International Agriculture University with the participation of the university rector. Graduating students, faculty members, and responsible officials took part in the event.
              During the meeting, the rector shared thoughts on the future plans of graduating youth, employment issues, opportunities in the labor market, and paths for professional development. Important information was also provided about the conditions being created to comprehensively support young people and help them fully demonstrate their knowledge and potential.
              The meeting was held in the format of an open dialogue, and students received detailed answers to the questions that interested them.
              The event became a strong source of motivation and confidence for the graduating youth. Department of Spirituality and Enlightenment
            </p>
          </div>

          {/* Gallery slider */}
          <div className="nd-gallery">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              spaceBetween={12}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              loop
              className="nd-gallery-swiper"
            >
              {/* duplicate slides so loop works with 4 images */}
              {[...galleryImages, ...galleryImages].map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="nd-gallery-thumb">
                    <img src={img} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="nd-sidebar">

          {/* Menu box */}
          <div className="nd-sb-menu">
            <div className="nd-sb-title">News &amp; Events</div>
            <ul>
              <li><Link to="/latest-news" className="active">Latest News</Link></li>
              <li><Link to="#">Upcoming Events</Link></li>
            </ul>
          </div>


        </aside>
      </div>
    </div>
  );
}
