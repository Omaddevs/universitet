import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import departments from "../../data/departments.json";
import DepartmentCard from "../../components/staff/DepartmentCard";
import "./StaffDepartments.css";
const teamMenu = [{
  label: "University Staff",
  href: "/staff"
}, {
  label: "Rectorate",
  href: "/staff/rectorate"
}, {
  label: "Deans",
  href: "/staff/deans"
}, {
  label: "Heads of Departments",
  href: "/staff/heads"
}, {
  label: "Academic Staff",
  href: "/staff/academic-staff"
}];
export default function StaffDepartments() {
  const {
    t
  } = useTranslation();
  const location = useLocation();
  return <main className="sdp-page">
      <section className="sdp-hero">
        <div className="sdp-hero__container">
          <nav className="sdp-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t("home")}</Link>
            <span>/</span>
            <span>{t("our_team")}</span>
            <span>/</span>
            <strong>{t("university_staff")}</strong>
          </nav>
          <h1 className="sdp-title">{t("university_staff")}</h1>
        </div>
      </section>

      <section className="sdp-body">
        <div className="sdp-container">
          <div className="sdp-layout">
            <section className="sdp-main">
              <div className="sdp-grid">
                {departments.map(department => <DepartmentCard key={department.id} department={department} />)}
              </div>
            </section>

            <aside className="sdp-side">
              <div className="sdp-sideCard">
                <h2 className="sdp-sideTitle">{t("our_team")}</h2>

                {teamMenu.map(item => <Link key={item.label} to={item.href} className={`sdp-sideLink ${location.pathname === item.href ? "is-active" : ""}`}>
                    <span className="sdp-sideMark" />
                    {item.label}
                  </Link>)}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>;
}