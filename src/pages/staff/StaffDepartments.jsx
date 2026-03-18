import { Link, useLocation } from "react-router-dom";
import departments from "../../data/departments.json";
import DepartmentCard from "../../components/staff/DepartmentCard";
import "./StaffDepartments.css";

const teamMenu = [
  { label: "University Staff", href: "/staff" },
  { label: "Rectorate", href: "/staff/rectorate" },
  { label: "Deans", href: "/staff/deans" },
  { label: "Heads of Departments", href: "/staff/heads" },
  { label: "Academic Staff", href: "/staff/academic-staff" },
];

export default function StaffDepartments() {
  const location = useLocation();
  return (
    <main className="sdp-page">
      <section className="sdp-hero">
        <div className="sdp-hero__container">
          <nav className="sdp-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our team</span>
            <span>/</span>
            <strong>University Staff</strong>
          </nav>
          <h1 className="sdp-title">University Staff</h1>
        </div>
      </section>

      <section className="sdp-body">
        <div className="sdp-container">
          <div className="sdp-layout">
            <section className="sdp-main">
              <div className="sdp-grid">
                {departments.map((department) => (
                  <DepartmentCard key={department.id} department={department} />
                ))}
              </div>
            </section>

            <aside className="sdp-side">
              <div className="sdp-sideCard">
                <h2 className="sdp-sideTitle">Our team</h2>

                {teamMenu.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`sdp-sideLink ${location.pathname === item.href ? "is-active" : ""}`}
                  >
                    <span className="sdp-sideMark" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
