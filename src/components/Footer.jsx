import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle, Zap } from "lucide-react";
import { SOCIAL_LINKS } from "../config.js";

const socialItems = [
  ["facebook", Facebook], ["instagram", Instagram], ["linkedin", Linkedin],
  ["youtube", Youtube], ["whatsapp", MessageCircle],
];

export default function Footer() {
  const goToDownload = (event) => {
    event.preventDefault();
    if (window.location.hash !== "#/") window.location.hash = "/";
    window.setTimeout(() => document.getElementById("download")?.scrollIntoView({ behavior: "smooth", block: "center" }), 120);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <span className="brand-mark"><Zap size={21} fill="currentColor" /></span>
            <span>Challenge<span className="brand-accent">Hub</span></span>
          </Link>
          <p>Learn with purpose. Challenge your limits. Grow beyond them.</p>
          <div className="social-links">
            {socialItems.filter(([key]) => SOCIAL_LINKS[key]).map(([key, Icon]) => (
              <a key={key} href={SOCIAL_LINKS[key]} target="_blank" rel="noreferrer" aria-label={key}><Icon size={18} /></a>
            ))}
          </div>
        </div>
        <div className="footer-column"><h3>Explore</h3><Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/contact">Contact Us</Link></div>
        <div className="footer-column"><h3>Get the app</h3><p>Take your learning journey with you.</p><a href="#download" onClick={goToDownload}>Download options <span>↗</span></a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} ChallengeHub. All rights reserved.</span><span>Learn. Compete. Grow.</span></div>
    </footer>
  );
}