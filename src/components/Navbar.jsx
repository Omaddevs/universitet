// src/components/Navbar.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import {
    IoMailOutline,
    IoCallOutline,
    IoEyeOutline,
    IoSearchOutline,
    IoLogoInstagram,
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoTwitter,
    IoChevronDownOutline,
    IoChevronForwardOutline,
    IoMenuOutline,
    IoCloseOutline,
} from "react-icons/io5";
import navbarLogo from "../images/navbarLogo.PNG";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [openDD, setOpenDD] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const navRef = useRef(null);

    // ✅ OurStaff va shunga o‘xshash hero-baner page lar
    const isStaffListPage = location.pathname === "/staff";
    const isStaffDetailPage = location.pathname.startsWith("/staff/");
    const isLegacyStaffPage =
        location.pathname === "/our-staff" || location.pathname === "/department-community";

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
        const onDoc = (e) => {
            if (!navRef.current) return;
            if (!navRef.current.contains(e.target)) {
                setLangOpen(false);
                setOpenDD(null);
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

    const dropdowns = useMemo(
        () => ({
            about: [
                "PRE-FOUNDATION",
                "FOUNDATION",
                "UNDERGRADUATE",
                "POSTGRADUATE",
                "PHD AND DSC PROGRAMMES",
            ],
            research: ["Centers", "Publications", "Labs", "Projects"],
            admissions: ["IAU Scientific council", "Research Publications", "Research Projects", "Research Partners", "German-Uzbek Chain on Central  Asian Agricultural Economics (GUCAE)"],
            life: ["Dormitory", "Clubs", "Sports", "Services"],
            news: ["ABOUT UNIVERSITY", "OUR STAFF", "Upcoming Events", "Announcements"],
        }),
        []
    );

    const closeAll = () => {
        setLangOpen(false);
        setOpenDD(null);
    };

    const goStaff = () => {
        closeAll();
        setMobileOpen(false);
        navigate("/staff");
    };

    const isScientificCouncilPage = location.pathname.startsWith("/research/scientific-council");
    const isResearchProjectsPage = location.pathname.startsWith("/research/research-projects");

    const isAboutPage = location.pathname === "/about";
    const isContactPage = location.pathname === "/contact";

    const solidWhiteMode =
        isStaffListPage || isStaffDetailPage || isLegacyStaffPage || isAdmissionsPage || isScientificCouncilPage || isResearchProjectsPage || isAboutPage || isContactPage;

    return (
        <header
            className={`navx ${scrolled ? "is-scrolled" : ""} ${overlayMode ? "navx--overlay" : ""
                } ${solidWhiteMode ? "navx--solid" : ""}`}
            ref={navRef}
            style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
            {/* ================= TOP STRIP ================= */}
            <div className="navx-top">
                <div className="navx-container">
                    <div className="navx-top-row">
                        <div className="navx-top-left">
                            <a className="navx-top-link" href="mailto:info@newuu.uz">
                                <IoMailOutline /> info@iau.uz
                            </a>
                            <span className="navx-sep" />
                            <a className="navx-top-link" href="tel:+998998810919">
                                <IoCallOutline /> +998 (99) 981-09-19
                            </a>
                        </div>

                        <div className="navx-top-center">

                        </div>

                        <div className="navx-top-right">
                            <button className="navx-iconBtn" type="button" aria-label="View">
                                <IoEyeOutline />
                            </button>

                            <button
                                className="navx-iconBtn"
                                type="button"
                                aria-label="Search"
                            >
                                <IoSearchOutline />
                            </button>

                            <a className="navx-iconA" href="#" aria-label="Instagram">
                                <IoLogoInstagram />
                            </a>
                            <a className="navx-iconA" href="#" aria-label="YouTube">
                                <IoLogoYoutube />
                            </a>
                            <a className="navx-iconA" href="#" aria-label="Facebook">
                                <IoLogoFacebook />
                            </a>
                            <a className="navx-iconA" href="#" aria-label="Twitter">
                                <IoLogoTwitter />
                            </a>

                            <div className={`navx-lang ${langOpen ? "open" : ""}`}>
                                <button
                                    type="button"
                                    className="navx-langBtn"
                                    onClick={() => {
                                        closeAll();
                                        setLangOpen((v) => !v);
                                    }}
                                >
                                    <span className="navx-flag">GB</span>
                                    <span>English</span>
                                    <IoChevronDownOutline className="navx-chev" />
                                </button>

                                <div className="navx-langMenu">
                                    <button type="button" onClick={() => setLangOpen(false)}>
                                        UZ — O‘zbek
                                    </button>
                                    <button type="button" onClick={() => setLangOpen(false)}>
                                        RU — Русский
                                    </button>
                                    <button type="button" onClick={() => setLangOpen(false)}>
                                        EN — English
                                    </button>
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
                        <Link
                            className="navx-brand"
                            to="/"
                            onClick={() => setMobileOpen(false)}
                        >
                            <img
                                src={navbarLogo}
                                alt="University Logo"
                                className="navx-logo"
                            />
                        </Link>

                        <div className="navx-links">
                            <div className={`navx-dd ${openDD === "about" ? "open" : ""}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "about" ? null : "about"));
                                    }}
                                >
                                    Programmes <IoChevronDownOutline />
                                </button>

                                <div className="navx-ddMenu">
                                    {dropdowns.about.map((x) => {
                                        if (x === "PRE-FOUNDATION") {
                                            return (
                                                <button
                                                    key={x}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/admissions/pre-foundation");
                                                    }}
                                                >
                                                    {x}
                                                </button>
                                            );
                                        }
                                        if (x === "FOUNDATION") {
                                            return (
                                                <button
                                                    key={x}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/admissions/foundation");
                                                    }}
                                                >
                                                    {x}
                                                </button>
                                            );
                                        }
                                        if (x === "UNDERGRADUATE") {
                                            return (
                                                <button
                                                    key={x}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/admissions/undergraduate");
                                                    }}
                                                >
                                                    {x}
                                                </button>
                                            );
                                        }
                                        if (x === "POSTGRADUATE") {
                                            return (
                                                <button
                                                    key={x}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/admissions/postgraduate");
                                                    }}
                                                >
                                                    {x}
                                                </button>
                                            );
                                        }
                                        if (x === "PHD AND DSC PROGRAMMES") {
                                            return (
                                                <button
                                                    key={x}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/admissions/phd");
                                                    }}
                                                >
                                                    {x}
                                                </button>
                                            );
                                        }
                                        return (
                                            <a key={x} href="#" onClick={() => setOpenDD(null)}>
                                                {x}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "research" ? "open" : ""}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "research" ? null : "research"));
                                    }}
                                >
                                    Students Life <IoChevronDownOutline />
                                </button>
                                <div className="navx-ddMenu">
                                    {dropdowns.research.map((x) => (
                                        <a key={x} href="#" onClick={() => setOpenDD(null)}>
                                            {x}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div
                                className={`navx-dd ${openDD === "admissions" ? "open" : ""}`}
                            >
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "admissions" ? null : "admissions"));
                                    }}
                                >
                                    Research <IoChevronDownOutline />
                                </button>
                                <div className="navx-ddMenu">
                                    {dropdowns.admissions.map((x) => {
                                        if (x === "IAU Scientific council") {
                                            return (
                                                <button
                                                    key={x}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/research/scientific-council");
                                                    }}
                                                >
                                                    {x}
                                                </button>
                                            );
                                        }
                                        if (x === "Research Projects") {
                                            return (
                                                <button
                                                    key={x}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/research/research-projects");
                                                    }}
                                                >
                                                    {x}
                                                </button>
                                            );
                                        }
                                        return (
                                            <a key={x} href="#" onClick={() => setOpenDD(null)}>
                                                {x}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "life" ? "open" : ""}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "life" ? null : "life"));
                                    }}
                                >
                                    Festivals <IoChevronDownOutline />
                                </button>
                                <div className="navx-ddMenu">
                                    {dropdowns.life.map((x) => (
                                        <a key={x} href="#" onClick={() => setOpenDD(null)}>
                                            {x}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "news" ? "open" : ""}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "news" ? null : "news"));
                                    }}
                                >
                                    About us <IoChevronDownOutline />
                                </button>

                                <div className="navx-ddMenu">
                                    {dropdowns.news.map((x) => {
                                        if (x === "ABOUT UNIVERSITY") {
                                            return (
                                                <button
                                                    key={x}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={() => {
                                                        closeAll();
                                                        navigate("/about");
                                                    }}
                                                >
                                                    {x}
                                                </button>
                                            );
                                        }
                                        if (x === "OUR STAFF") {
                                            return (
                                                <button
                                                    key={x}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={goStaff}
                                                >
                                                    {x}
                                                </button>
                                            );
                                        }

                                        return (
                                            <a key={x} href="#" onClick={() => setOpenDD(null)}>
                                                {x}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <button className="navx-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }} onClick={() => { setOpenDD(null); navigate("/contact"); }}>
                                Contact us
                            </button>
                        </div>

                        <div className="navx-cta">
                            <button className="navx-apply" type="button">
                                Apply now <IoChevronForwardOutline className="navx-applyArrow" />
                            </button>
                        </div>

                        <button
                            className="navx-burger"
                            type="button"
                            aria-label="Open menu"
                            onClick={() => {
                                closeAll();
                                setMobileOpen(true);
                            }}
                        >
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
                            <span style={{ fontSize: "17px", fontWeight: "800", color: "rgba(255,255,255,0.95)", letterSpacing: "0.2px" }}>
                                International Agriculture University
                            </span>
                        </div>

                        <button
                            className="navx-mClose"
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setMobileOpen(false)}
                        >
                            <IoCloseOutline />
                        </button>
                    </div>

                    <div className="navx-mSearch">
                        <IoSearchOutline />
                        <input placeholder="Search..." />
                    </div>

                    <div className="navx-mLinks">
                        <details>
                            <summary>
                                Programmes <IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.about.map((x) => {
                                    if (x === "PRE-FOUNDATION") {
                                        return (
                                            <button
                                                key={x}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/admissions/pre-foundation");
                                                }}
                                            >
                                                {x}
                                            </button>
                                        );
                                    }
                                    if (x === "FOUNDATION") {
                                        return (
                                            <button
                                                key={x}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/admissions/foundation");
                                                }}
                                            >
                                                {x}
                                            </button>
                                        );
                                    }
                                    if (x === "UNDERGRADUATE") {
                                        return (
                                            <button
                                                key={x}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/admissions/undergraduate");
                                                }}
                                            >
                                                {x}
                                            </button>
                                        );
                                    }
                                    if (x === "POSTGRADUATE") {
                                        return (
                                            <button
                                                key={x}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/admissions/postgraduate");
                                                }}
                                            >
                                                {x}
                                            </button>
                                        );
                                    }
                                    if (x === "PHD AND DSC PROGRAMMES") {
                                        return (
                                            <button
                                                key={x}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/admissions/phd");
                                                }}
                                            >
                                                {x}
                                            </button>
                                        );
                                    }
                                    return (
                                        <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                                            {x}
                                        </a>
                                    );
                                })}
                            </div>
                        </details>

                        <details>
                            <summary>
                                Students Life <IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.research.map((x) => (
                                    <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                                        {x}
                                    </a>
                                ))}
                            </div>
                        </details>

                        <details>
                            <summary>
                                Research <IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.admissions.map((x) => {
                                    if (x === "IAU Scientific council") {
                                        return (
                                            <button
                                                key={x}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/research/scientific-council");
                                                }}
                                            >
                                                {x}
                                            </button>
                                        );
                                    }
                                    if (x === "Research Projects") {
                                        return (
                                            <button
                                                key={x}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/research/research-projects");
                                                }}
                                            >
                                                {x}
                                            </button>
                                        );
                                    }
                                    return (
                                        <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                                            {x}
                                        </a>
                                    );
                                })}
                            </div>
                        </details>

                        <details>
                            <summary>
                                Festivals <IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.life.map((x) => (
                                    <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                                        {x}
                                    </a>
                                ))}
                            </div>
                        </details>

                        <details>
                            <summary>
                                About Us <IoChevronDownOutline />
                            </summary>
                            <div className="navx-mDD">
                                {dropdowns.news.map((x) => {
                                    if (x === "ABOUT UNIVERSITY") {
                                        return (
                                            <button
                                                key={x}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    navigate("/about");
                                                }}
                                            >
                                                {x}
                                            </button>
                                        );
                                    }
                                    if (x === "OUR STAFF") {
                                        return (
                                            <button
                                                key={x}
                                                type="button"
                                                className="navx-mDDbtn"
                                                onClick={goStaff}
                                            >
                                                {x}
                                            </button>
                                        );
                                    }
                                    return (
                                        <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                                            {x}
                                        </a>
                                    );
                                })}
                            </div>
                        </details>

                        <button className="navx-mLink" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }} onClick={() => { setMobileOpen(false); navigate("/contact"); }}>
                            Contact us
                        </button>
                    </div>

                    <div className="navx-mActions">
                        <button className="navx-apply wide" type="button">
                            Apply now <IoChevronForwardOutline className="navx-applyArrow" />
                        </button>

                        <div className="navx-mContacts">
                            <a href="mailto:info@newuu.uz">
                                <IoMailOutline /> info@iau.uz
                            </a>
                            <a href="tel:+998712024111">
                                <IoCallOutline /> +998 (99) 981-09-19
                            </a>
                        </div>
                    </div>
                </div>

                <button
                    className="navx-mBackdrop"
                    type="button"
                    aria-label="Close menu backdrop"
                    onClick={() => setMobileOpen(false)}
                />
            </div>
        </header>
    );
}
