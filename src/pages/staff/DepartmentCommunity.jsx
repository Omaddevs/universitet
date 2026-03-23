import { useTranslation } from "react-i18next";
import { Link, Navigate, useParams, useLocation } from "react-router-dom";
import departments from "../../data/departments.json";
import StaffCard from "../../components/staff/StaffCard";
import "./DepartmentCommunity.css";
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
export default function DepartmentCommunity() {
  const {
    t
  } = useTranslation();
  const {
    deptId
  } = useParams();
  const location = useLocation();
  const department = departments.find(item => item.id === deptId);
  if (!department) {
    return <Navigate to="/staff" replace />;
  }
  return <main className="dcp-page">
      <section className="dcp-body">
        <div className="dcp-container">
          <div className="dcp-layout">
            <section className="dcp-main">
              <p className="dcp-subtitle">{department.title}</p>
              <h1 className="dcp-title">{t("department_community")}</h1>

              <div className="dcp-grid">
                {department.members.map(member => <StaffCard key={`${member.name}-${member.position}`} member={member} />)}
              </div>
            </section>

            <aside className="dcp-side">
              <div className="dcp-sideCard">
                <h2 className="dcp-sideTitle">{t("our_team")}</h2>

                {teamMenu.map(item => <Link key={item.label} to={item.href} className={`dcp-sideLink ${location.pathname === item.href ? "is-active" : ""}`}>
                    <span className="dcp-sideMark" />
                    {item.label}
                  </Link>)}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>;
}