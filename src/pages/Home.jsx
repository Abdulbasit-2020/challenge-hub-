import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ChartNoAxesCombined, CheckCircle2, Medal, Sparkles, Target, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import DownloadButtons from "../components/DownloadButtons.jsx";
import VideoBanner from "../components/VideoBanner.jsx";

const features = [
  { icon: BookOpen, title: "Practice with purpose", text: "Build understanding and confidence through focused practice and learning activities." },
  { icon: Trophy, title: "Compete and challenge", text: "Put your knowledge to the test, take on challenges and celebrate your progress." },
  { icon: Medal, title: "Earn recognition", text: "Stay motivated as you reach milestones and work towards your learning goals." },
  { icon: ChartNoAxesCombined, title: "Track your growth", text: "See how far you have come and identify the areas where you can improve." },
];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            <div className="eyebrow"><Sparkles size={15} /> A smarter way to learn</div>
            <h1>Turn what you learn into <span>what you can achieve.</span></h1>
            <p className="hero-description">ChallengeHub makes learning more engaging through practice, competition and measurable progress. Learn at your pace, challenge yourself and keep growing.</p>
            <div className="hero-actions"><a className="button" href="#download">Get the ChallengeHub App <ArrowRight size={18} /></a><Link className="text-link" to="/about">Discover ChallengeHub <ArrowRight size={17} /></Link></div>
            <div className="hero-proof"><span><CheckCircle2 size={16} /> Learn at your pace</span><span><CheckCircle2 size={16} /> Challenge yourself</span></div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }}>
            <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />

            <div className="learning-card">
              <div className="card-topline"><span className="live-dot" /> YOUR LEARNING JOURNEY</div>
              <div className="visual-symbol"><Target size={43} /></div>
              <h2>Make every challenge count.</h2>
              <p>Small steps. Stronger skills. Bigger possibilities.</p>
              <div className="progress-label"><span>Keep moving forward</span><span>100%</span></div>
              <div className="progress-track"><span /></div>
              <div className="card-footer"><span>LEARN</span><span>COMPETE</span><span>GROW</span></div>
            </div>
            <div className="float-chip chip-top"><Trophy size={17} /> Challenge accepted</div>
            <div className="float-chip chip-bottom"><ChartNoAxesCombined size={17} /> Progress with purpose</div>
          </motion.div>
        </div>
        <div className="container hero-bottom"><span>LEARN WITH PURPOSE</span><span className="hero-line" /><span>GROW WITH CONFIDENCE</span></div>
      </section>
      <VideoBanner className="home-video" src="https://videos.pexels.com/video-files/5676169/5676169-hd_1080_1920_25fps.mp4" poster="https://images.pexels.com/videos/5676169/free-video-5676169.jpg?auto=compress&cs=tinysrgb&w=1600" title="Learning is better together" />
      <section className="section features-section"><div className="container"><div className="section-heading"><div className="eyebrow">THE CHALLENGEHUB EXPERIENCE</div><h2>Learning should move you <span>forward.</span></h2><p>More than just studying: build a habit of learning, testing yourself and improving every day.</p></div><div className="feature-grid">{features.map(({ icon: Icon, title, text }, index) => <motion.article className="feature-card" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><div className="feature-icon"><Icon size={24} /></div><span className="feature-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p><span className="feature-arrow"><ArrowRight size={18} /></span></motion.article>)}</div></div></section>
      <section className="section purpose-section"><div className="container purpose-grid"><div><div className="eyebrow">BUILT AROUND YOUR POTENTIAL</div><h2>Your next level starts with <span>one challenge.</span></h2></div><div className="purpose-copy"><p>Whether you are strengthening what you know or discovering what you can do, ChallengeHub gives your learning journey a clear direction.</p><Link className="text-link" to="/about">Learn about our mission <ArrowRight size={17} /></Link></div></div></section>
      <section className="download-section" id="download"><div className="container download-panel"><div><div className="eyebrow">YOUR JOURNEY STARTS HERE</div><h2>Ready to learn, compete and grow?</h2><p>Get the ChallengeHub app and take your next step.</p></div><DownloadButtons /></div></section>
    </>
  );
}