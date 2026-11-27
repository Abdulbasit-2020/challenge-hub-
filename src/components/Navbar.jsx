import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={close}>
          <span className="brand-mark"><Zap size={21} fill="currentColor" /></span>
          <span>Challenge<span className="brand-accent">Hub</span></span>
        </Link>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
        <div className={open ? "nav-links open" : "nav-links"}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/about" onClick={close}>About Us</NavLink>
          <NavLink to="/contact" onClick={close}>Contact Us</NavLink>
          <a className="button button-small" href="/#download" onClick={close}>Download App <span>↗</span></a>
        </div>
      </nav>
    </header>
  );
}