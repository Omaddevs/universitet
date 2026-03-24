// src/pages/News/LatestNews.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LatestNews.css";
import { IoCalendarOutline, IoEyeOutline, IoChevronForwardOutline } from "react-icons/io5";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import { fetchNewsList } from "../../api/newsApi";

const PAGE_SIZE = 12;
const PLACEHOLDER_IMG = "https://placehold.co/400x250/1a6b3a/ffffff?text=IAU+News";

export default function LatestNews() {
  const [news, setNews]               = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount]   = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchNewsList({ page: currentPage, page_size: PAGE_SIZE })
      .then((data) => {
        setNews(data.results);
        setTotalCount(data.count);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [currentPage]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="latest-news-page">
      {/* Hero */}
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
        <main className="news-main">

          {loading && (
            <div className="news-loading">
              <div className="news-spinner" />
            </div>
          )}

          {error && (
            <div className="news-error">
              <p>Failed to load news. Please make sure the backend is running.</p>
              <button onClick={() => setCurrentPage(1)}>Retry</button>
            </div>
          )}

          {!loading && !error && news.length === 0 && (
            <div className="news-error">
              <p>No news articles found.</p>
            </div>
          )}

          {!loading && !error && news.length > 0 && (
            <>
              <div className="news-grid">
                {news.map((item) => (
                  <article key={item.id} className="news-item">
                    <Link to={`/news/${item.id}`} className="news-item-media-link">
                      <div className="news-item-media">
                        <img
                          src={item.img || PLACEHOLDER_IMG}
                          alt={item.title}
                          onError={(e) => { e.target.src = PLACEHOLDER_IMG; }}
                        />
                        <div className="news-item-meta">
                          <span className="news-meta-chip">
                            <IoCalendarOutline /> {item.date}
                          </span>
                          <span className="news-meta-chip views">
                            <IoEyeOutline /> {item.views}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div className="news-item-body">
                      <Link to={`/news/${item.id}`}>
                        <h3>{item.title}</h3>
                      </Link>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="news-pagination">
                  {currentPage > 1 && (
                    <button className="pag-btn" onClick={() => goToPage(currentPage - 1)}>
                      &lsaquo;
                    </button>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      className={`pag-btn${page === currentPage ? " active" : ""}`}
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                  {currentPage < totalPages && (
                    <button className="pag-btn" onClick={() => goToPage(currentPage + 1)}>
                      <IoChevronForwardOutline />
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
