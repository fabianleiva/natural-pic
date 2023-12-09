import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="animate__animated animate__fadeInDown bg-success">
        <div className="navbar">
          <div className="navbarSection1">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/favorites">
              Favoritos
            </Link>
          </div>
          <div className="navbarSection2">
            <h3 className="webName">Natural Pic</h3>
            <h3 className="planetIcon">🌎</h3>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
