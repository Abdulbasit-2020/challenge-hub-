import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Lightbulb, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import DownloadButtons from "../components/DownloadButtons.jsx";
import AnimatedPhoto from "../components/AnimatedPhoto.jsx";

const values = [
  { icon: Lightbulb, title: "Curiosity", text: "We believe every question can open the door to deeper understanding." },
  { icon: Target, title: "Progress", text: "We value consistent improvement, meaningful effort and personal growth." },
  { icon: HeartHandshake, title: "Opportunity", text: "We want learning experiences to inspire confidence and wider possibilities." },
  { icon: Zap, title: "Innovation", text: "We use technology to make learning more engaging and accessible." },
];

export default function About() {
  return (
    <>
      <section className="page-hero"><div className="container"><div className="eyebrow">ABOUT CHALLENGEHUB</div><h1>We turn learning into a <span>challenge worth taking.</span></h1><p>ChallengeHub is built around a simple belief: learning becomes more powerful when people are encouraged to practise, test their knowledge and keep improving.</p></div></section>
      <section className="section about-story"><div className="container story-grid"><motion.div className="story-visual" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><AnimatedPhoto className="about-photo" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85" alt="Learners collaborating in a classroom" caption="Knowledge creates opportunity" /></motion.div><div className="story-copy"><div className="eyebrow">OUR PURPOSE</div><h2>Make every learning step <span>count.</span></h2><p>ChallengeHub brings practice and challenge-based learning together in one experience. Our goal is to help learners stay curious, build confidence and recognise their progress.</p><p>We are creating a space where knowledge is not only acquired, but also applied, tested and strengthened through consistent effort.</p><Link className="text-link" to="/contact">Talk to our team <ArrowRight size={17} /></Link></div></div></section>
      <section className="section values-section"><div className="container"><div className="section-heading"><div className="eyebrow">WHAT GUIDES US</div><h2>Our values shape <span>the experience.</span></h2><p>The principles behind the way we think about learning and growth.</p></div><div className="values-grid">{values.map(({ icon: Icon, title, text }) => <article className="value-card" key={title}><div className="feature-icon"><Icon size={23} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="download-section"><div className="container download-panel"><div><div className="eyebrow">TAKE THE NEXT STEP</div><h2>Be part of a better learning journey.</h2><p>Discover what you can achieve with ChallengeHub.</p></div><DownloadButtons /></div></section>
    </>
  );
}