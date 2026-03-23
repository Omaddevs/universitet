// src/components/NewsSection/NewsSection.jsx
import "./NewsSection.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  IoCalendarOutline,
  IoEyeOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import image1 from "../images/newsBig.jpg";
import image2 from "../images/news2.jpg";
import image3 from "../images/news3.jpg";
import image4 from "../images/news4.jpg";
import image5 from "../images/events.jpg";

export default function NewsSection() {
  const easePro = [0.22, 1, 0.36, 1];

  const wrap = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25, // 🔥 juda sekin ketma-ket
        delayChildren: 0.3,
      },
    },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -40, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: easePro },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60, y: 20, filter: "blur(12px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: easePro },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60, y: 20, filter: "blur(12px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: easePro },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60, scale: 0.98, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: easePro },
    },
  };

  const featured = {
    img: image1,
    title:
      "Spiritual and Enlightenment Hour at the International Agriculture University – with the Rector",
    date: "11 February, 2026",
    views: "190",
  };

  const gridCards = [
    {
      id: 1,
      img: image2,
      title:
        "Strengthening University Governance through International Collaboration​",
      date: "4 February, 2026",
      views: "93",
    },
    {
      id: 2,
      img: image3,
      title:
        " Enlightenment — the strongest shield against ignorance!​",
      date: "6 February, 2026",
      views: "112",
    },
    {
      id: 3,
      img: image4,
      title:
        "A meaningful and useful master class was held at our university for senior students with the participation of Brian Kingswell, who visited from a foreign country.​",
      date: "8 February, 2026",
      views: "120",
    },
    {
      id: 4,
      img: image5,
      title:
        "The intellectual game 'Zakovat' was held!",
      date: "3 February, 2026",
      views: "121",
    },
  ];

  return (
    <motion.section
      id="latest-news"
      className="newsx"
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="newsx-container">
        {/* HEAD */}
        <motion.div className="newsx-head" variants={fadeDown}>
          <h2 className="newsx-title">
            University <span>News</span>
          </h2>

          <Link to="/latest-news" className="newsx-more">
            See more <IoChevronForwardOutline />
          </Link>
        </motion.div>

        <div className="newsx-grid newsx-grid--noSide">
          {/* FEATURED */}
          <motion.article className="newsx-feature" variants={fadeLeft}>
            <Link className="newsx-media" to="/news/1" aria-label={featured.title}>
              <img src={featured.img} alt={featured.title} />
              <div className="newsx-metaBar">
                <span className="newsx-chip">
                  <IoCalendarOutline /> {featured.date}
                </span>
                <span className="newsx-chip">
                  <IoEyeOutline /> {featured.views}
                </span>
              </div>
            </Link>

            <Link className="newsx-h3" to="/news/1">
              {featured.title}
            </Link>
          </motion.article>

          {/* 4 CARDS */}
          <motion.div className="newsx-mid newsx-mid--wide" variants={wrap}>
            {gridCards.map((c, index) => (
              <motion.article
                className="newsx-card"
                key={c.id}
                variants={
                  index % 2 === 0
                    ? fadeRight // navbat bilan o‘ngdan
                    : fadeUp    // pastdan
                }
              >
                <Link className="newsx-media sm" to={`/news/${c.id}`} aria-label={c.title}>
                  <img src={c.img} alt={c.title} />
                  <div className="newsx-metaBar sm">
                    <span className="newsx-chip">
                      <IoCalendarOutline /> {c.date}
                    </span>
                    <span className="newsx-chip">
                      <IoEyeOutline /> {c.views}
                    </span>
                  </div>
                </Link>

                <Link className="newsx-h4" to={`/news/${c.id}`} title={c.title}>
                  {c.title}
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
