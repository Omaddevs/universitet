import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import NewsSection from "./components/NewsSection";
import AcademicsProgram from "./components/AcademicsProgram/AcademicsProgram";
import PartnersSection from "./components/PartnersSection";
import UsefulLinks from "./components/UsefulLinks/UsefulLinks";
import SocialNetworks from "./components/SocialNetworks";
import Footer from "./components/Footer";

import StaffDepartments from "./pages/staff/StaffDepartments";
import DepartmentCommunity from "./pages/staff/DepartmentCommunity";
import PreFoundation from "./pages/Admissions/PreFoundation";
import Foundation from "./pages/Admissions/Foundation";
import Undergraduate from "./pages/Admissions/Undergraduate";
import Postgraduate from "./pages/Admissions/Postgraduate";
import PhDAndDSc from "./pages/Admissions/PhDAndDSc";
import ScientificCouncil from "./pages/Research/ScientificCouncil";
import ResearchProjects from "./pages/Research/ResearchProjects";
import AboutUs from "./pages/About/AboutUs";
import ContactUs from "./pages/Contact/ContactUs";
import Summary2025 from "./pages/Festivals/Summary2025";
import Summary2024 from "./pages/Festivals/Summary2024";
import FAQ from "./pages/Festivals/FAQ";
import AcademicCalendar from "./pages/StudentLife/AcademicCalendar";
import StudentHandbook from "./pages/StudentLife/StudentHandbook";
import LatestNews from "./pages/News/LatestNews";
import NewsDetail from "./pages/News/NewsDetail";

function Home() {
  return (
    <>
      <Header />
      <Section />
      <NewsSection />
      <AcademicsProgram />
      <PartnersSection />
      <UsefulLinks />
    </>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/staff" element={<StaffDepartments />} />
        <Route path="/staff/:deptId" element={<DepartmentCommunity />} />
        <Route path="/admissions/pre-foundation" element={<PreFoundation />} />
        <Route path="/admissions/foundation" element={<Foundation />} />
        <Route path="/admissions/undergraduate" element={<Undergraduate />} />
        <Route path="/admissions/postgraduate" element={<Postgraduate />} />
        <Route path="/admissions/phd" element={<PhDAndDSc />} />

        {/* Research Routes */}
        <Route path="/research/scientific-council" element={<ScientificCouncil />} />
        <Route path="/research/research-projects" element={<ResearchProjects />} />
        <Route path="/festivals/summary-2025" element={<Summary2025 />} />
        <Route path="/festivals/summary-2024" element={<Summary2024 />} />
        <Route path="/festivals/faq" element={<FAQ />} />
        <Route path="/student-life/academic-calendar" element={<AcademicCalendar />} />
        <Route path="/student-life/student-handbook" element={<StudentHandbook />} />
        <Route path="/latest-news" element={<LatestNews />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/our-staff" element={<Navigate to="/staff" replace />} />
        <Route path="/department-community" element={<Navigate to="/staff" replace />} />
      </Routes>

      <SocialNetworks />
      <Footer />
    </div>
  );
}
