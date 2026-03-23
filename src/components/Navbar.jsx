// src/components/Navbar.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import { IoMailOutline, IoCallOutline, IoEyeOutline, IoSearchOutline, IoLogoInstagram, IoLogoYoutube, IoLogoFacebook, IoChevronDownOutline, IoChevronForwardOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import navbarLogo from "../images/navbarLogo.PNG";
export default function Navbar() {
  const {
    t,
    i18n
  } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [openDD, setOpenDD] = useState(null);
  const [openSubDD, setOpenSubDD] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  // ✅ OurStaff va shunga o‘xshash hero-baner page lar
  const isStaffListPage = location.pathname === "/staff";
  const isStaffDetailPage = location.pathname.startsWith("/staff/");
  const isLegacyStaffPage = location.pathname === "/our-staff" || location.pathname === "/department-community";

  // ✅ Admissions page lar
  const isAdmissionsPage = location.pathname.startsWith("/admissions");
  const overlayPages = ["/our-staff"];
  const overlayMode = overlayPages.includes(location.pathname);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onRouteCheck = () => setScrolled(window.scrollY > 30);
    onRouteCheck();
  }, [location.pathname]);
  useEffect(() => {
    const onDoc = e => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setLangOpen(false);
        setOpenDD(null);
        setOpenSubDD(null);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);
  const dropdowns = useMemo(() => ({
    about: ["PRE-FOUNDATION", "FOUNDATION", "UNDERGRADUATE", "POSTGRADUATE", "PHD AND DSC PROGRAMMES"],
    research: ["ACADEMIC CALENDAR FOR 2025/2026", "INTERNATIONAL STUDENTS", "STUDENT HANDBOOK", "PRESENTATION FOR APPLICANTS", "CAREER SERVICES", "IAU CLUBS", "STUDENTS CREATIVITY", "INTERVIEWS", "KELAJAKKA QADAM"],
    admissions: ["IAU SCIENTIFIC COUNCIL", "GERMAN-UZBEK CHAIN ON CENTRAL ASIAN AGRICULTURAL ECONOMICS (GUCAE)"],
    life: {
      title: "LIFE SCIENCE FESTIVAL",
      items: [{
        name: "LIFE SCIENCE FESTIVAL - 2025",
        subItems: ["SUMMARY OF EVENT 2025"
        // "PHOTO GALLERY 2025",
        // "PRESS RELEASE 2025"
        ]
      }, {
        name: "LIFE SCIENCE FESTIVAL - 2024",
        subItems: ["SUMMARY OF EVENT 2024"
        // "PHOTO GALLERY 2024",
        // "PRESS RELEASE 2024"
        ]
      }, {
        name: "LIFE SCIENCE FESTIVAL - 2023",
        subItems: ["SUMMARY OF EVENT 2023"
        // "PHOTO GALLERY 2023",
        // "PRESS RELEASE 2023"
        ]
      }, {
        name: "22 REASONS TO ATTEND",
        subItems: []
      }
      // {
      //     name: "FREQUENTLY ASKED QUESTIONS",
      //     subItems: []
      // }
      ]
    },
    news: ["ABOUT UNIVERSITY", "OUR STAFF"]
  }), []);
  const closeAll = () => {
    setLangOpen(false);
    setOpenDD(null);
    setOpenSubDD(null);
  };
  const goStaff = () => {
    closeAll();
    setMobileOpen(false);
    navigate("/staff");
  };
  const isScientificCouncilPage = location.pathname.startsWith("/research/scientific-council");
  const isResearchProjectsPage = location.pathname.startsWith("/research/research-projects");
  const isGucaePage = location.pathname.startsWith("/research/gucae");
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";
  const isFestivalsPage = location.pathname.startsWith("/festivals");
  const isAcademicCalendarPage = location.pathname.startsWith("/student-life/academic-calendar");
  const isStudentHandbookPage = location.pathname.startsWith("/student-life/student-handbook");
  const isLatestNewsPage = location.pathname.startsWith("/latest-news");
  const isNewsDetailPage = location.pathname.startsWith("/news/");
  const solidWhiteMode = isStaffListPage || isStaffDetailPage || isLegacyStaffPage || isAdmissionsPage || isScientificCouncilPage || isResearchProjectsPage || isGucaePage || isAboutPage || isContactPage || isFestivalsPage || isAcademicCalendarPage || isStudentHandbookPage || isLatestNewsPage || isNewsDetailPage;
  return <header className={`navx ${scrolled ? "is-scrolled" : ""} ${overlayMode ? "navx--overlay" : ""} ${solidWhiteMode ? "navx--solid" : ""}`} ref={navRef} style={{
    fontFamily: '"DM Sans", sans-serif'
  }}>
            {/* ================= TOP STRIP ================= */}
            <div className="navx-top">
                <div className="navx-container">
                    <div className="navx-top-row">
                        <div className="navx-top-left">
                            <a className="navx-top-link" href="mailto:info@newuu.uz">
                                <IoMailOutline />{t("info_iau_uz")}</a>
                            <span className="navx-sep" />
                            <a className="navx-top-link" href="tel:+998555170071">
                                <IoCallOutline /> +998 (55) 517 00 71
                            </a>
                        </div>

                        <div className="navx-top-center">

                        </div>

                        <div className="navx-top-right">
                            <button className="navx-iconBtn" type="button" aria-label="View">
                                <IoEyeOutline />
                            </button>

                            <button className="navx-iconBtn" type="button" aria-label="Search">
                                <IoSearchOutline />
                            </button>

                            <a className="navx-iconA" href="instagram.com/iau_uz?igsh=MW1qeTZ5N3YyazhneA==" aria-label="Instagram">
                                <IoLogoInstagram />
                            </a>
                            <a className="navx-iconA" href="https://www.youtube.com/@iau_2022?si=wpViWkIgyDb5xzc-" aria-label="YouTube">
                                <IoLogoYoutube />
                            </a>
                            <a className="navx-iconA" href="https://www.facebook.com/iau.uz?mibextid=qi2Omg&rdid=SykNsNKJUEFOsEIh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FWND1PuA6C6xFT8mU%2F%3Fmibextid%3Dqi2Omg#" aria-label="Facebook">
                                <IoLogoFacebook />
                            </a>
                            <a className="navx-iconA" href="https://t.me/iau_uz" aria-label="Telegram">
                                <FaTelegramPlane />
                            </a>

                            <div className={`navx-lang ${langOpen ? "open" : ""}`}>
                                <button type="button" className="navx-langBtn" onClick={() => {
                closeAll();
                setLangOpen(v => !v);
              }}>
                                    <span className="navx-flag">
                                        {i18n.language === 'uz' ? 'UZ' : i18n.language === 'ru' ? 'RU' : 'GB'}
                                    </span>
                                    <span>
                                        {i18n.language === 'uz' ? 'O‘zbek' : i18n.language === 'ru' ? 'Русский' : 'English'}
                                    </span>
                                    <IoChevronDownOutline className="navx-chev" />
                                </button>

                                <div className="navx-langMenu">
                                    <button type="button" onClick={() => {
                  i18n.changeLanguage('uz');
                  setLangOpen(false);
                }}>{t("uz___o_zbek")}</button>
                                    <button type="button" onClick={() => {
                  i18n.changeLanguage('ru');
                  setLangOpen(false);
                }}>{t("ru_________")}</button>
                                    <button type="button" onClick={() => {
                  i18n.changeLanguage('en');
                  setLangOpen(false);
                }}>{t("en___english")}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MAIN NAV ================= */}
            <nav className="navx-main" aria-label="Main Navigation">
                <div className="navx-container">
                    <div className="navx-main-row">
                        <Link className="navx-brand" to="/" onClick={() => setMobileOpen(false)}>
                            <img src={navbarLogo} alt="University Logo" className="navx-logo" />
                        </Link>

                        <div className="navx-links">
                            <div className={`navx-dd ${openDD === "about" ? "open" : ""}`}>
                                <button type="button" onClick={() => {
                setLangOpen(false);
                setOpenDD(v => v === "about" ? null : "about");
              }}>{t("programmes")}<IoChevronDownOutline />
                                </button>

                                <div className="navx-ddMenu">
                                    {dropdowns.about.map(x => {
                  if (x === "PRE-FOUNDATION") {
                    return <button key={x} type="button" className="navx-ddAction" onClick={() => {
                      closeAll();
                      navigate("/admissions/pre-foundation");
                    }}>
                                                    {x}
                                                </button>;
                  }
                  if (x === "FOUNDATION") {
                    return <button key={x} type="button" className="navx-ddAction" onClick={() => {
                      closeAll();
                      navigate("/admissions/foundation");
                    }}>
                                                    {x}
                                                </button>;
                  }
                  if (x === "UNDERGRADUATE") {
                    return <button key={x} type="button" className="navx-ddAction" onClick={() => {
                      closeAll();
                      navigate("/admissions/undergraduate");
                    }}>
                                                    {x}
                                                </button>;
                  }
                  if (x === "POSTGRADUATE") {
                    return <button key={x} type="button" className="navx-ddAction" onClick={() => {
                      closeAll();
                      navigate("/admissions/postgraduate");
                    }}>
                                                    {x}
                                                </button>;
                  }
                  if (x === "PHD AND DSC PROGRAMMES") {
                    return <button key={x} type="button" className="navx-ddAction" onClick={() => {
                      closeAll();
                      navigate("/admissions/phd");
                    }}>
                                                    {x}
                                                </button>;
                  }
                  return <a key={x} href="#" onClick={() => setOpenDD(null)}>
                                                {x}
                                            </a>;
                })}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "research" ? "open" : ""}`}>
                                <button type="button" onClick={() => {
                setLangOpen(false);
                setOpenDD(v => v === "research" ? null : "research");
              }}>{t("students_life")}<IoChevronDownOutline />
                                </button>
                                <div className="navx-ddMenu">
                                    {dropdowns.research.map(x => x === "ACADEMIC CALENDAR FOR 2025/2026" ? <button key={x} type="button" className="navx-ddAction" onClick={() => {
                  closeAll();
                  navigate("/student-life/academic-calendar");
                }}>
                                                {x}
                                            </button> : x === "STUDENT HANDBOOK" ? <button key={x} type="button" className="navx-ddAction" onClick={() => {
                  closeAll();
                  navigate("/student-life/student-handbook");
                }}>
                                                {x}
                                            </button> : <a key={x} href="#" onClick={() => setOpenDD(null)}>
                                                {x}
                                            </a>)}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "admissions" ? "open" : ""}`}>
                                <button type="button" onClick={() => {
                setLangOpen(false);
                setOpenDD(v => v === "admissions" ? null : "admissions");
              }}>{t("research")}<IoChevronDownOutline />
                                </button>
                                <div className="navx-ddMenu">
                                    {dropdowns.admissions.map(x => {
                  if (x === "IAU SCIENTIFIC COUNCIL") {
                    return <button key={x} type="button" className="navx-ddAction" onClick={() => {
                      closeAll();
                      navigate("/research/scientific-council");
                    }}>
                                                    {x}
                                                </button>;
                  }
                  if (x === "Research Projects") {
                    return <button key={x} type="button" className="navx-ddAction" onClick={() => {
                      closeAll();
                      navigate("/research/research-projects");
                    }}>
                                                    {x}
                                                </button>;
                  }
                  if (x === "GERMAN-UZBEK CHAIN ON CENTRAL ASIAN AGRICULTURAL ECONOMICS (GUCAE)") {
                    return <button key={x} type="button" className="navx-ddAction" onClick={() => {
                      closeAll();
                      navigate("/research/gucae");
                    }}>
                                                    {x}
                                                </button>;
                  }
                  return <a key={x} href="#" onClick={() => setOpenDD(null)}>
                                                {x}
                                            </a>;
                })}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "life" ? "open" : ""}`}>
                                <button type="button" onClick={() => {
                setLangOpen(false);
                setOpenDD(v => v === "life" ? null : "life");
                if (openDD === "life") setOpenSubDD(null);
              }}>{t("festivals")}<IoChevronDownOutline />
                                </button>
                                <div className="navx-ddMenu navx-festivals-menu">
                                    {dropdowns.life.items.map(x => <div key={x.name} className={`navx-ddSubMenuContainer ${openSubDD === x.name ? "open" : ""}`}>
                                            <a href="#" onClick={e => {
                    e.preventDefault();
                    if (x.subItems && x.subItems.length === 0) {
                      if (x.name === "FREQUENTLY ASKED QUESTIONS") {
                        closeAll();
                        navigate("/festivals/faq");
                      } else if (x.name === "22 REASONS TO ATTEND") {
                        closeAll();
                        navigate("/festivals/22-reasons");
                      } else {
                        setOpenDD(null);
                        setOpenSubDD(null);
                      }
                    } else {
                      setOpenSubDD(prev => prev === x.name ? null : x.name);
                    }
                  }} className="navx-ddAction">
                                                {t(x.name)} {x.subItems && x.subItems.length > 0 && <IoChevronForwardOutline className={`navx-subChev ${openSubDD === x.name ? "open" : ""}`} />}
                                            </a>
                                            {x.subItems && x.subItems.length > 0 && <div className="navx-ddSubMenu">
                                                    {x.subItems.map(subItem => <button key={subItem} className="navx-subItemBtn" onClick={() => {
                      closeAll();
                      if (subItem === "SUMMARY OF EVENT 2025") {
                        navigate("/festivals/summary-2025");
                      }
                      if (subItem === "SUMMARY OF EVENT 2024") {
                        navigate("/festivals/summary-2024");
                      }
                      if (subItem === "SUMMARY OF EVENT 2023") {
                        navigate("/festivals/summary-2023");
                      }
                    }}>
                                                            {subItem}
                                                        </button>)}
                                                </div>}
                                        </div>)}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "news" ? "open" : ""}`}>
                                <button type="button" onClick={() => {
                setLangOpen(false);
                setOpenDD(v => v === "news" ? null : "news");
              }}>{t("about_us")}<IoChevronDownOutline />
                                </button>

                                <div className="navx-ddMenu">
                                    {dropdowns.news.map(x => {
                  if (x === "ABOUT UNIVERSITY") {
                    return <button key={x} type="button" className="navx-ddAction" onClick={() => {
                      closeAll();
                      navigate("/about");
                    }}>
                                                    {x}
                                                </button>;
                  }
                  if (x === "OUR STAFF") {
                    return <button key={x} type="button" className="navx-ddAction" onClick={goStaff}>
                                                    {x}
                                                </button>;
                  }
                  return <a key={x} href="#" onClick={() => setOpenDD(null)}>
                                                {x}
                                            </a>;
                })}
                                </div>
                            </div>

                            <button className="navx-link" style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit'
            }} onClick={() => {
              setOpenDD(null);
              navigate("/latest-news");
            }}>{t("latest_news")}</button>
                            <button className="navx-link" style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit'
            }} onClick={() => {
              setOpenDD(null);
              navigate("/contact");
            }}>{t("contact_us")}</button>
                        </div>

                        <div className="navx-cta">
                            <button className="navx-apply" type="button">{t("register")}<IoChevronForwardOutline className="navx-applyArrow" />
                            </button>
                        </div>

                        <button className="navx-burger" type="button" aria-label="Open menu" onClick={() => {
            closeAll();
            setMobileOpen(true);
          }}>
                            <IoMenuOutline />
                        </button>
                    </div>
                </div>
            </nav>

            {/* ================= MOBILE OVERLAY MENU ================= */}
            <div className={`navx-mOverlay ${mobileOpen ? "open" : ""}`}>
                <div className="navx-mPanel">
                    <div className="navx-mTop">
                        <div className="navx-mBrand">
                            <span style={{
              fontSize: "17px",
              fontWeight: "800",
              color: "rgba(255,255,255,0.95)",
              letterSpacing: "0.2px"
            }}>{t("international_agriculture_univ_2")}</span>
                        </div>

                        <button className="navx-mClose" type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                            <IoCloseOutline />
                        </button>
                    </div>

                    <div className="navx-mSearch">
                        <IoSearchOutline />
                        <input placeholder="Search..." />
                    </div>

                    <div className="navx-mLinks">
                        <details>
                            <summary>{t("programmes")}<IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.about.map(x => {
                if (x === "PRE-FOUNDATION") {
                  return <button key={x} type="button" className="navx-mDDbtn" onClick={() => {
                    setMobileOpen(false);
                    navigate("/admissions/pre-foundation");
                  }}>
                                                {x}
                                            </button>;
                }
                if (x === "FOUNDATION") {
                  return <button key={x} type="button" className="navx-mDDbtn" onClick={() => {
                    setMobileOpen(false);
                    navigate("/admissions/foundation");
                  }}>
                                                {x}
                                            </button>;
                }
                if (x === "UNDERGRADUATE") {
                  return <button key={x} type="button" className="navx-mDDbtn" onClick={() => {
                    setMobileOpen(false);
                    navigate("/admissions/undergraduate");
                  }}>
                                                {x}
                                            </button>;
                }
                if (x === "POSTGRADUATE") {
                  return <button key={x} type="button" className="navx-mDDbtn" onClick={() => {
                    setMobileOpen(false);
                    navigate("/admissions/postgraduate");
                  }}>
                                                {x}
                                            </button>;
                }
                if (x === "PHD AND DSC PROGRAMMES") {
                  return <button key={x} type="button" className="navx-mDDbtn" onClick={() => {
                    setMobileOpen(false);
                    navigate("/admissions/phd");
                  }}>
                                                {t(x)}
                                            </button>;
                }
                return <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                                            {x}
                                        </a>;
              })}
                            </div>
                        </details>

                        <details>
                            <summary>{t("students_life")}<IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.research.map(x => x === "ACADEMIC CALENDAR FOR 2025/2026" ? <button key={x} type="button" className="navx-mDDbtn" onClick={() => {
                setMobileOpen(false);
                navigate("/student-life/academic-calendar");
              }}>
                                            {x}
                                        </button> : x === "STUDENT HANDBOOK" ? <button key={x} type="button" className="navx-mDDbtn" onClick={() => {
                setMobileOpen(false);
                navigate("/student-life/student-handbook");
              }}>
                                            {x}
                                        </button> : <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                                            {x}
                                        </a>)}
                            </div>
                        </details>

                        <details>
                            <summary>{t("research")}<IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.admissions.map(x => {
                if (x === "IAU SCIENTIFIC COUNCIL") {
                  return <button key={x} type="button" className="navx-mDDbtn" onClick={() => {
                    setMobileOpen(false);
                    navigate("/research/scientific-council");
                  }}>
                                                {x}
                                            </button>;
                }
                if (x === "Research Projects") {
                  return <button key={x} type="button" className="navx-mDDbtn" onClick={() => {
                    setMobileOpen(false);
                    navigate("/research/research-projects");
                  }}>
                                                {x}
                                            </button>;
                }
                if (x === "GERMAN-UZBEK CHAIN ON CENTRAL ASIAN AGRICULTURAL ECONOMICS (GUCAE)") {
                  return <button key={x} type="button" className="navx-mDDbtn" onClick={() => {
                    setMobileOpen(false);
                    navigate("/research/gucae");
                  }}>
                                                {x}
                                            </button>;
                }
                return <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                                            {x}
                                        </a>;
              })}
                            </div>
                        </details>

                        <details>
                            <summary>{t("festivals")}<IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.life.items.map(x => x.name === "FREQUENTLY ASKED QUESTIONS" ? <button key={x.name} className="navx-mSubBtn navx-mSubBtn--full" onClick={() => {
                setMobileOpen(false);
                navigate("/festivals/faq");
              }}>
                                            {x.name}
                                        </button> : x.name === "22 REASONS TO ATTEND" ? <button key={x.name} className="navx-mSubBtn navx-mSubBtn--full" onClick={() => {
                setMobileOpen(false);
                navigate("/festivals/22-reasons");
              }}>
                                            {x.name}
                                        </button> : <details key={x.name} className="navx-mSubDetails">
                                            <summary>
                                                {x.name} {x.subItems && x.subItems.length > 0 && <IoChevronDownOutline />}
                                            </summary>
                                            {x.subItems && x.subItems.length > 0 && <div className="navx-mSubDD">
                                                    {x.subItems.map(subItem => <button key={subItem} className="navx-mSubBtn" onClick={() => {
                    setMobileOpen(false);
                    if (subItem === "SUMMARY OF EVENT 2025") {
                      navigate("/festivals/summary-2025");
                    }
                    if (subItem === "SUMMARY OF EVENT 2024") {
                      navigate("/festivals/summary-2024");
                    }
                    if (subItem === "SUMMARY OF EVENT 2023") {
                      navigate("/festivals/summary-2023");
                    }
                  }}>
                                                            {subItem}
                                                        </button>)}
                                                </div>}
                                        </details>)}
                            </div>
                        </details>

                        <details>
                            <summary>{t("about_us_1")}<IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.news.map(x => {
                if (x === "ABOUT UNIVERSITY") {
                  return <button key={x} type="button" className="navx-mDDbtn" onClick={() => {
                    setMobileOpen(false);
                    navigate("/about");
                  }}>
                                                {x}
                                            </button>;
                }
                if (x === "OUR STAFF") {
                  return <button key={x} type="button" className="navx-mDDbtn" onClick={goStaff}>
                                                {x}
                                            </button>;
                }
                return <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                                            {x}
                                        </a>;
              })}
                            </div>
                        </details>

                        <button className="navx-mLink" style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            fontFamily: 'inherit'
          }} onClick={() => {
            setMobileOpen(false);
            navigate("/latest-news");
          }}>{t("latest_news")}</button>
                        <button className="navx-mLink" style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            fontFamily: 'inherit'
          }} onClick={() => {
            setMobileOpen(false);
            navigate("/contact");
          }}>{t("contact_us")}</button>
                    </div>

                    <div className="navx-mActions">
                        <button className="navx-apply wide" type="button">{t("register")}<IoChevronForwardOutline className="navx-applyArrow" />
                        </button>

                        <div className="navx-mContacts">
                            <a href="mailto:info@newuu.uz">
                                <IoMailOutline />{t("info_iau_uz")}</a>
                            <a href="tel:+998712024111">
                                <IoCallOutline /> +998 (99) 981-09-19
                            </a>
                        </div>
                    </div>
                </div>

                <button className="navx-mBackdrop" type="button" aria-label="Close menu backdrop" onClick={() => setMobileOpen(false)} />
            </div>
        </header>;
}