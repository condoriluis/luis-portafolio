import { resumen } from "@/src/lib/constants";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <img src="/assets/images/logo.png" alt="Logo" />
        <span className="designation">{resumen.basics.label}</span>
      </div>
      <img className="me" src="/assets/images/me.png" alt="Me" />
      <div className="cont-work">
        <span className="theme-btn-work">{resumen.basics.searchWork}</span>
      </div>
      <h2 className="email">{resumen.basics.email}</h2>
      <h2 className="phone">{resumen.basics.phone}</h2>
      <h2 className="address">{resumen.basics.location.region}, {resumen.basics.location.city}</h2>
      <p className="copyright">&copy; {new Date().getFullYear()} Powered By {resumen.basics.firstName} {resumen.basics.middleName}</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">

        {resumen.basics.profiles.map((profile, index) => (
          <li key={index}>
            <a href={profile.url} target="_blank" rel="noopener noreferrer">
              {profile.network.toLowerCase() === 'github' && <i className={`lab la-github`} title={profile.network}></i>}
              {profile.network.toLowerCase() === 'linkedin' && <i className={`lab la-linkedin`} title={profile.network}></i>}
              {profile.network.toLowerCase() === 'curriculum vitae' && <i className={`las la-file-invoice`} title={profile.network}></i>}
            </a>
          </li>

        ))}

      </ul>
      <div className="cont-work">
        <a href={`mailto:${resumen.basics.email}`} className="theme-btn">
          <i className="las la-envelope"></i> ¡Contáctame!
        </a>
      </div>
    </div>
  );
};

export default LeftSidebar;
