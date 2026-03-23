import { useTranslation } from "react-i18next";
import "./Footer.css";
import { motion } from "framer-motion";
import { IoMailOutline, IoCallOutline, IoLocationOutline, IoChevronForwardOutline } from "react-icons/io5";
import footerLogo from "../images/navbarLogo.PNG";
import { Link } from "react-router-dom";
export default function Footer() {
  const {
    t
  } = useTranslation();
  const easePro = [0.22, 1, 0.36, 1];
  const wrap = {
    hidden: {
      opacity: 1
    },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.22,
        // ✅ juda sekin ketma-ket
        delayChildren: 0.28
      }
    }
  };
  const fadeDown = {
    hidden: {
      opacity: 0,
      y: -40,
      filter: "blur(12px)"
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.25,
        ease: easePro
      }
    }
  };
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
      filter: "blur(12px)"
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.25,
        ease: easePro
      }
    }
  };
  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -70,
      y: 14,
      filter: "blur(12px)"
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.25,
        ease: easePro
      }
    }
  };
  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 70,
      y: 14,
      filter: "blur(12px)"
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.25,
        ease: easePro
      }
    }
  };
  const popBtn = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
      filter: "blur(12px)"
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.25,
        ease: easePro
      }
    }
  };
  return <motion.footer className="footx" variants={wrap} initial="hidden" whileInView="show" viewport={{
    once: true,
    amount: 0.15
  }}>
      {/* CTA STRIP */}
      <motion.section className="footx-cta" variants={fadeDown}>
        <div className="footx-shell footx-ctaRow">
          <motion.div className="footx-ctaLeft" variants={fadeLeft}>
            <h3>{t("ready_to_start_your_journey")}</h3>
            <p>{t("explore_programs__admissions_")}</p>
          </motion.div>

          <motion.div className="footx-ctaRight" variants={fadeRight}>
            <motion.button className="footx-btn primary" type="button" variants={popBtn} whileHover={{
            y: -2
          }} whileTap={{
            scale: 0.98
          }} transition={{
            duration: 0.18
          }}>{t("apply_now")}<IoChevronForwardOutline />
            </motion.button>

            <motion.button className="footx-btn ghost" type="button" variants={popBtn} whileHover={{
            y: -2
          }} whileTap={{
            scale: 0.98
          }} transition={{
            duration: 0.18
          }}>{t("contact_us")}<IoChevronForwardOutline />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* MAIN FOOTER */}
      <motion.section className="footx-main" variants={fadeUp}>
        <div className="footx-shell footx-grid">
          {/* Brand */}
          <motion.div className="footx-col" variants={fadeLeft}>
            <div className="footx-brand">
              <div className="footx-brandText">
                <img src={footerLogo} alt="Footer Logo" className="footx-logo" />
              </div>
            </div>

            {/* <p className="footx-desc">
              A modern university shaping future leaders through world-class
              education, research, and innovation.
             </p> */}

            {/* <div className="footx-badges">
              <span className="footx-badge">Innovation</span>
              <span className="footx-badge">Research</span>
              <span className="footx-badge">Global</span>
             </div> */}
          </motion.div>

          {/* Quick links */}
          <motion.div className="footx-col" variants={fadeUp}>
            <h4 className="footx-h4">{t("research")}</h4>
            <ul className="footx-links">
              <li>
                <Link to="/research/scientific-council">{t("iau_scientific_council")}</Link>
              </li>
              <li>
                <Link to="/research/research-projects">{t("research_projects")}</Link>
              </li>
              <li>
                <Link to="/research/gucae">{t("german_uzbek_chain__gucae")}</Link>
              </li>
            </ul>
          </motion.div>

          {/* Academics */}
          <motion.div className="footx-col" variants={fadeUp}>
            <h4 className="footx-h4">{t("academics")}</h4>
            <ul className="footx-links">
              <li>
                <Link to="/admissions/pre-foundation">{t("pre_foundation")}</Link>
              </li>
              <li>
                <Link to="/admissions/foundation">{t("foundation")}</Link>
              </li>
              <li>
                <Link to="/admissions/undergraduate">{t("undergraduate")}</Link>
              </li>
              <li>
                <Link to="/admissions/postgraduate">{t("postgraduate")}</Link>
              </li>
              <li>
                <Link to="/admissions/phd">{t("phd___dsc")}</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="footx-col" variants={fadeRight}>
            <h4 className="footx-h4">{t("contact")}</h4>

            <div className="footx-contact">
              <a className="footx-contactRow" href="mailto:info@newuu.uz">
                <span className="footx-ic">
                  <IoMailOutline />
                </span>
                <span>{t("info_iau_uz")}</span>
              </a>

              <a className="footx-contactRow" href="tel:+998555170071">
                <span className="footx-ic">
                  <IoCallOutline />
                </span>
                <span>+998 (55) 517 00 71</span>
              </a>

              <div className="footx-contactRow noLink">
                <span className="footx-ic">
                  <IoLocationOutline />
                </span>
                <span>{t("university_street__2_kibray__t")}</span>
              </div>
            </div>

            <div className="footx-miniNote">{t("working_hours__mon_fri__9_00_1")}</div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div className="footx-shell footx-bottom" variants={fadeUp}>
          <span className="footx-copy">
            © {new Date().getFullYear()}{t("international_agriculture_univ_1")}</span>


        </motion.div>
      </motion.section>
    </motion.footer>;
}