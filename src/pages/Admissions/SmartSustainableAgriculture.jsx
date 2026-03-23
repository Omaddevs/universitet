import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import "./AdmissionsShared.css";
import "./Agri.css";
import { Link } from "react-router-dom";
import bgVideo from "../../all-bg-videos/iau-bg.mp4";
import begzodImg from "../../images/begzod.png";
export default function SmartSustainableAgriculture() {
  const {
    t
  } = useTranslation();
  const [activeTab, setActiveTab] = useState("courseContent");
  return <div className="admissions-page">
               {/* PAGE HEADER */}
               <div className="admissions-hero">
                    <video className="admissions-hero-video" autoPlay loop muted playsInline>
                         <source src={bgVideo} type="video/mp4" />
                    </video>
                    <div className="hero-overlay"></div>
                    <div className="admissions-hero-content">
                         <div className="breadcrumbs">
                              <Link to="/">🏠</Link>
                              <span className="separator">&gt;</span>
                              <span>{t("admissions")}</span>
                              <span className="separator">&gt;</span>
                              <Link to="/admissions/postgraduate">{t("postgraduate")}</Link>
                              <span className="separator">&gt;</span>
                              <span className="current">{t("msc_sustainable_agriculture_an")}</span>
                         </div>
                         <h1>{t("msc_sustainable_agriculture_an")}</h1>
                    </div>
               </div>

               {/* MAIN CONTENT AREA */}
               <div className="admissions-container">

                    {/* LEFT COMPONENT */}
                    <div className="admissions-main">
                         {/* TABS */}
                         <div className="tabs-container">
                              <div className="tabs-list">
                                   <button className={`tab-btn ${activeTab === "courseContent" ? "active" : ""}`} onClick={() => setActiveTab("courseContent")}>{t("course_content")}</button>
                                   <button className={`tab-btn ${activeTab === "modules" ? "active" : ""}`} onClick={() => setActiveTab("modules")}>{t("modules")}</button>
                                   <button className={`tab-btn ${activeTab === "entryRequirements" ? "active" : ""}`} onClick={() => setActiveTab("entryRequirements")}>{t("entry_requirements")}</button>
                                   <button className={`tab-btn ${activeTab === "fees" ? "active" : ""}`} onClick={() => setActiveTab("fees")}>{t("fees")}</button>
                                   {/* <button
                                                  className={`tab-btn ${activeTab === "scholarships" ? "active" : ""}`}
                                                  onClick={() => setActiveTab("scholarships")}
                                             >
                                                  Scholarships
                                             </button> */}
                              </div>
                         </div>

                         {/* TAB CONTENT */}
                         <div className="tab-content-box">
                              {activeTab === "courseContent" && <div className="content-pane fade-in">
                                        <h2>{t("course_content")}</h2>
                                        <p>{t("the_bsc__hons__smart_sustainab")}</p>
                                        <p>{t("this_is_a_multi_disciplinary_d")}</p>
                                   </div>}

                              {activeTab === "modules" && <div className="content-pane fade-in">
                                        <h2>{t("modules")}</h2>
                                        <p>{t("all_our_programmes_provide_pra")}<br></br>
                                        </p>
                                        <h3>{t("year_one")}</h3>
                                        <p>{t("u1007___soil_and_the_environme")}<br></br>{t("new___data_science_and_managem")}<br></br>{t("u1422___ecosystem_services_and")}<br></br>{t("u1441___applied_animal_science")}<br></br>{t("u1442___applied_plant_science")}<br></br>{t("u1001___english_for_academic_p")}<br></br>{t("u1325___agriculture_and_food_s")}<br></br>{t("u1445___innovation_and_technol")}<br></br>
                                        </p>
                                        <h3>{t("year_two")}</h3>
                                        <i>
                                             <h3>{t("core_modules")}</h3>
                                        </i>
                                        <p>{t("u2004___professional_developme")}<br></br>{t("new___managing_smart_agricultu")}<br></br>{t("u2011___introduction_to_resear")}<br></br>{t("u2373___agronomy")}<br></br>{t("u2372___animal_health_and_welf")}<br></br>{t("u2349___the_resilience_of_agro")}<br></br>
                                        </p>
                                        <i>
                                             <h3>{t("plus_any_two_electives_from_th")}</h3>
                                        </i>
                                        <p>{t("new___regenerative_food_system")}<br></br>{t("new___fresh_produce_production")}<br></br>{t("new___grassland_and_forage_pro")}<br></br>{t("new___fibre_production__plant")}<br></br>{t("new___urban_and_controlled_env")}<br></br>{t("new___precision_agriculture")}<br></br>
                                        </p>
                                        <h3>{t("year_three")}</h3>
                                        <i>
                                             <h3>{t("core_modules")}</h3>
                                        </i>
                                        <p>{t("u3004___research_project___dis")}<br></br>{t("u3330___technology_and_agroeco")}<br></br>{t("u3329___climate_change_and_nat")}<br></br>{t("u3331___food_supply_systems_an")}<br></br>{t("u3332___specialist_study__shel")}<br></br>
                                        </p>
                                        <i>
                                             <h3>{t("plus_any_two_electives_from_th")}</h3>
                                        </i>
                                        <p>{t("new___sustainable_farm_managem")}<br></br>{t("new___agronomy_challenges_and")}<br></br>{t("new___land_tenure_and_governan")}<br></br>{t("new___livestock_system_challen")}<br></br>{t("new___data_application_and_inn")}<br></br>{t("new___applied_agri_finance")}<br></br>
                                        </p>
                                        <h2>{t("careers_and_graduate_destinati")}</h2>
                                        <p>{t("upon_graduation__students_are_1")}<br></br>{t("you_could_progress_into_a_rang")}<br></br>{t("livestock_nutrition")}<br></br>{t("herd_flock_health_planning")}<br></br>{t("biosecurity")}<br></br>{t("agricultural_policy")}<br></br>{t("research")}<br></br>{t("farm_management")}<br></br>{t("food_and_fibre_processing")}<br></br>{t("food_security_and_safety")}<br></br>{t("agricultural_consultancy")}<br></br>
                                        </p>
                                   </div>}

                              {activeTab === "entryRequirements" && <div className="content-pane fade-in">
                                        <h2>{t("entry_requirements")}</h2>
                                        <p>{t("students_completing_successful")}<br></br>{t("1__ielts_academic__ukvi_versio_1")}<br></br>{t("b1_level___cefr__common_europe")}<br></br>{t("85_90_scores_on_duolingo_engli")}<br></br>{t("please_note_that_university_of")}<br></br>{t("2__104_ucas_tariff_points_or_t")}<br></br>{t("successful_completion_of_year")}<br></br>{t("successful_completion_of_year_1")}<br></br>
                                        </p>
                                   </div>}

                              {activeTab === "fees" && <div className="content-pane fade-in">
                                        <h2>{t("fees")}</h2>
                                        <p>{t("tuition_fees_uzb_29_900_000_uz")}</p>
                                        <p>{t("tuition_fees_international_3_7")}</p>
                                        <p>{t("duration_4_years___full_time")}</p>
                                   </div>}

                              {/* {activeTab === "scholarships" && (
                                             <div className="content-pane fade-in">
                                                  <h2>Scholarships</h2>
                                                  <p>
                                                       The International Agriculture University offers scholarships and grants for local students. Grantees will have an opportunity to study postgraduate or undergraduate courses with 0 tuition fee, covered by the Ministry of Agriculture. Currently, local students of the International Agriculture University are able to apply for scholarships from the Ministry of Agriculture and more.
                                                  </p>
                                             </div>
                                        )} */}
                         </div>

                         {/* BOTTOM ROW: PROFILE & APPLICATIONS */}
                         <div className="agri-bottom-row">
                              {/* PROFILE CARD */}
                              <div className="profile-card">
                                   <a href="mailto:bekhzod.kodirkhonov@iau.uz" className="profile-email-icon" title="Send Email">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                             <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                        </svg>
                                   </a>
                                   <img src={begzodImg} alt="Bekhzod Kodirkhonov" />
                                   <div className="profile-info">
                                        <h4>{t("bekhzod_kodirkhonov")}</h4>
                                        <p>{t("head_of_department")}</p>
                                   </div>
                              </div>

                              {/* APPLICATIONS OPEN BOX */}
                              <div className="applications-box">
                                   <h3>{t("applications_for_fall_2026_are")}</h3>
                                   <button className="apply-btn">{t("start_your_application_")}</button>
                              </div>
                         </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="admissions-sidebar">
                         <div className="sidebar-box">
                              <h3>{t("admissions")}</h3>
                              <ul className="sidebar-links">
                                   <li>
                                        <Link to="/admissions/pre-foundation" className="active-link">{t("pre_foundation")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/foundation">{t("foundation")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/undergraduate" className="active-link">{t("undergraduate")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/postgraduate">{t("postgraduate")}</Link>
                                   </li>
                                   <li>
                                        <Link to="/admissions/phd">{t("phd_and_dsc_programmes")}</Link>
                                   </li>
                              </ul>
                         </div>
                    </div>

               </div>
          </div>;
}