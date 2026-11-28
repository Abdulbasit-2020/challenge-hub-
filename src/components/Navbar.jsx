import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const close = () => setOpen(false);
  const goToDownload = (event) => {
    event.preventDefault();
    close();
    const scroll = () => document.getElementById("download")?.scrollIntoView({ behavior: "smooth", block: "center" });
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(scroll, 120);
    } else {
      scroll();
    }
  };

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={close}>
          <img className="brand-logo" src={`${import.meta.env.BASE_URL}challengehub-logo.jpg`} alt="ChallengeHub logo" />
          <span>Challenge<span className="brand-accent">Hub</span></span>
        </Link>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
        <div className={open ? "nav-links open" : "nav-links"}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/about" onClick={close}>About Us</NavLink>
          <NavLink to="/contact" onClick={close}>Contact Us</NavLink>
          <a className="button button-small" href="#download" onClick={goToDownload}>Download App <span>↗</span></a>
        </div>
      </nav>
    </header>
  );
}