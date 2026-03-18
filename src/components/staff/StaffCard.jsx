import { IoMailOutline } from "react-icons/io5";
import "./StaffCard.css";

export default function StaffCard({ member }) {
  return (
    <article className="stc-card">
      <div className="stc-photoWrap">
        <img src={member.photoUrl} alt={member.name} className="stc-photo" loading="lazy" />
        
        {member.email && (
          <a className="stc-email-float" href={member.email === "#" ? "#" : `mailto:${member.email}`}>
            <div className="stc-email-circle">
               <IoMailOutline />
            </div>
          </a>
        )}
      </div>

      <div className="stc-body">
        <h3 className="stc-name">{member.name}</h3>
        <div className="stc-line" />
        <p className="stc-position">{member.position}</p>
      </div>
    </article>
  );
}
