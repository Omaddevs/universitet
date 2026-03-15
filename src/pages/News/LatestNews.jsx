// src/pages/News/LatestNews.jsx
import React, { useEffect } from "react";
import "./LatestNews.css";
import { IoCalendarOutline, IoEyeOutline, IoChevronForwardOutline } from "react-icons/io5";

// Images
import heroImg from "../../images/campus.PNG";
import news1 from "../../images/newsBig.jpg";
import news2 from "../../images/image2.jpg";
import news3 from "../../images/image3.jpg";
import news4 from "../../images/image4.jpg";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";

const NEWS_DATA = [
  {
    id: 1,
    img: news1,
    date: "12 March, 2026",
    views: "8",
    title: "Spiritual and Enlightenment Hour at the International Agriculture...",
    text: "An open and sincere meeting with students was organized at the International Agriculture University with the participation of the university rector. Graduating students, faculty members, and responsible officials took part in the event...."
  },
  {
    id: 2,
    img: news2,
    date: "12 March, 2026",
    views: "21",
    title: "Research Camp 2026 for the Next Generation of Researchers",
    text: "Research Camp 2026 will be organized at IAU University, offering a summer program for aspiring young researchers..."
  },
  {
    id: 3,
    img: news3,
    date: "11 March, 2026",
    views: "36",
    title: "A Student of IAU University Receives the ...",
    text: "The Ministry of Digital Technologies organized the \"Yulduz Tech Awards\" where our student was recognized for their outstanding contribution..."
  },
  {
    id: 4,
    img: news4,
    date: "10 March, 2026",
    views: "66",
    title: "IAU University graduate Robiyakhon Nabijonova is pursuing her MSc at...",
    text: "Robiyakhon Nabijonova, a graduate of the Mechanical Engineering program at IAU University, has been accepted into a prestigious Master's program..."
  },
  {
    id: 5,
    img: news1,
    date: "9 March, 2026",
    views: "48",
    title: "Student Festival Held at IAU University as Part of...",
    text: "Today, IAU University hosted the Navruz XP Fest in collaboration with Coca-Cola, featuring traditional music and food..."
  },
  {
    id: 6,
    img: news2,
    date: "6 March, 2026",
    views: "137",
    title: "Spring Concert Held at IAU University to Celebrate...",
    text: "Today, IAU University hosted a festive Spring Concert dedicated to March 8th, International Women's Day..."
  },
  {
    id: 7,
    img: news3,
    date: "5 March, 2026",
    views: "111",
    title: "IAU University and Aloqabank to Establish an Artificial...",
    text: "IAU University and Aloqabank have signed a cooperation agreement aimed at launching a joint AI Research Lab..."
  },
  {
    id: 8,
    img: news4,
    date: "5 March, 2026",
    views: "132",
    title: "A Graduate of IAU University Continues Her Studies a...",
    text: "Zulfiya Usmonova, a graduate of IAU University, is continuing her academic journey at a world-class institution..."
  },
  {
    id: 9,
    img: news1,
    date: "3 March, 2026",
    views: "105",
    title: "The First Round of IAU University Business Case Competition 2026...",
    text: "On March 1, the first competition round of the IAU University Business Case Competition was held, attracting teams from all over..."
  },
  {
    id: 10,
    img: news2,
    date: "2 March, 2026",
    views: "157",
    title: "CyberHack 2026 Successfully Held at IAU University",
    text: "The CTF competition organized as part of CyberHack Conference 2026 was successful, with teams competing in various security challenges..."
  },
  {
    id: 11,
    img: news3,
    date: "27 February, 2026",
    views: "255",
    title: "IAU University Participates in HKUST GZ Global...",
    text: "The delegation of IAU University is participating in the HKUST (GZ) Global University Summit, strengthening international ties..."
  },
  {
    id: 12,
    img: news4,
    date: "27 February, 2026",
    views: "101",
    title: "Student Initiatives and Sports Activities Actively Supported at Ne...",
    text: "The leadership of IAU University held a meeting with students residing in the dormitories to discuss new sports facilities..."
  }
];

export default function LatestNews() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="latest-news-page">
      {/* Hero Section */}
      <section className="news-hero">
        <video className="news-hero-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="news-hero-overlay dark-gradient" />
        <div className="news-hero-content">
          <h1>Latest News</h1>
        </div>
      </section>

      <div className="news-container">
        {/* Main Content */}
        <main className="news-main">
          <div className="news-grid">
            {NEWS_DATA.map((news) => (
              <article key={news.id} className="news-item">
                <div className="news-item-media">
                  <img src={news.img} alt={news.title} />
                  <div className="news-item-meta">
                    <span className="news-meta-chip">
                      <IoCalendarOutline /> {news.date}
                    </span>
                    <span className="news-meta-chip views">
                      <IoEyeOutline /> {news.views}
                    </span>
                  </div>
                </div>
                <div className="news-item-body">
                  <h3>{news.title}</h3>
                  <p>{news.text}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="news-pagination">
            <a href="#" className="pag-btn active">1</a>
            <a href="#" className="pag-btn">2</a>
            <a href="#" className="pag-btn">3</a>
            <a href="#" className="pag-btn"><IoChevronForwardOutline /></a>
            <a href="#" className="pag-btn">»</a>
          </div>
        </main>
      </div>
    </div>
  );
}
