import logo from "../images/logo.svg";
import PageLinks from "../components/PageLinks";
import SocialLinks from "../components/SocialLinks";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* PAGE LINK */}
          <PageLinks parentClass="nav-links" itemClass="nav-link" />

          <SocialLinks parentClass="nav-icons" itemClass="nav-icon" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
