import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import "./Reasons22.css";
import { Link } from "react-router-dom";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
export default function Reasons22() {
  const {
    t
  } = useTranslation();
  const [activeTab, setActiveTab] = useState("22reasons");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="reasons22-page">
            {/* PAGE HEADER */}
            <div className="reasons22-hero">
                <video className="reasons22-hero-video" autoPlay loop muted playsInline>
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="reasons22-hero-overlay"></div>
                <div className="reasons22-hero-content">
                    <h1>{t("22_reasons_to_attend_life_scie")}</h1>
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="reasons22-container-wrap">
                <div className="reasons22-container">
                    {/* LEFT COMPONENT */}
                    <div className="reasons22-main">
                        {/* TABS */}
                        <div className="reasons22-tabs-container">
                            <div className="reasons22-tabs-list">
                                <button className={`reasons22-tab-btn ${activeTab === "22reasons" ? "active" : ""}`} onClick={() => setActiveTab("22reasons")}>{t("22_reasons")}</button>
                            </div>
                        </div>

                        {/* TAB CONTENT */}
                        <div className="reasons22-tab-content-box">
                            {activeTab === "22reasons" && <div className="reasons22-content-pane fade-in">
                                    <h2>{t("22_reasons_to_attend_life_scie")}</h2>
                                    <p>{t("1___free_lectures_and_presenta")}<br></br>{t("2___face_to_face_meetings_with")}<br></br>{t("3___b2b_meetings__leading_comp")}<br></br>{t("4___meeting_with_academic_advi")}<br></br>{t("5___consultations_on_your_care")}<br></br>{t("6___improving_your_english__am")}<br></br>{t("7___exhibition_of_innovations")}<br></br>{t("8___visiting_a_bee_farm__are_y")}<br></br>{t("9___food_sampling")}<br></br>{t("10___training_how_to_operate_a")}<br></br>{t("11___present_your_own_achievem")}<br></br>{t("12___meetings_with_students_in")}<br></br>{t("13___visiting_the_students__ar")}<br></br>{t("14___networking_with_colleague")}<br></br>{t("15___dancing_with_friends_at_o")}<br></br>{t("16___buying_and_selling_agro_f")}<br></br>{t("17___having_a_photo_in_an_acad")}<br></br>{t("18___attending_an_evening_conc")}<br></br>{t("19___watching_a_movie_in_open")}<br></br>{t("20___joining_the_international")}<br></br>{t("21___joining__world_food_forum")}<br></br>{t("22___finally__to_learn_more_ab")}<br></br>
                                    </p>
                                </div>}
                        </div>

                        {/* APPLICATIONS OPEN BOX */}
                        <div className="reasons22-applications-box">
                            <h3>{t("applications_for_fall_2026_are")}</h3>
                            <button className="reasons22-apply-btn">{t("start_your_application_")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
}