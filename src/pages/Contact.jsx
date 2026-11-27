import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { CONTACT_EMAIL } from "../config.js";
import VideoBanner from "../components/VideoBanner.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = (event) => {
    event.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <>
      <section className="page-hero contact-hero"><div className="container"><div className="eyebrow">LET'S TALK</div><h1>We would love to <span>hear from you.</span></h1><p>Have a question, suggestion or partnership idea? Send us a message and let's start a conversation.</p><VideoBanner className="contact-video" src="https://videos.pexels.com/video-files/5676150/5676150-hd_1920_1080_25fps.mp4" poster="https://images.pexels.com/videos/5676150/free-video-5676150.jpg?auto=compress&cs=tinysrgb&w=1600" title="Let’s build better learning" /></div></section>
      <section className="section contact-section"><div className="container contact-grid"><div className="contact-info"><div className="eyebrow">GET IN TOUCH</div><h2>Every great connection starts with a conversation.</h2><p>Reach out to the ChallengeHub team. We welcome questions, feedback and ideas that can make the learning experience better.</p><div className="contact-method"><span><Mail size={20} /></span><div><strong>Email</strong><p>{CONTACT_EMAIL === "YOUR_EMAIL@example.com" ? "Add your official email in src/config.js" : CONTACT_EMAIL}</p></div></div><div className="contact-method"><span><MessageCircle size={20} /></span><div><strong>We welcome your feedback</strong><p>Tell us what is working and what you would love to see.</p></div></div></div>
        <form className="contact-form" onSubmit={submit}><h3>Send us a message</h3><p>Complete the fields below. Your email app will open with your message ready to send.</p><label htmlFor="name">Your name</label><input id="name" name="name" value={form.name} onChange={update} required placeholder="Enter your name" /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" value={form.email} onChange={update} required placeholder="you@example.com" /><label htmlFor="subject">Subject</label><input id="subject" name="subject" value={form.subject} onChange={update} required placeholder="What is this about?" /><label htmlFor="message">Message</label><textarea id="message" name="message" value={form.message} onChange={update} required rows="5" placeholder="Write your message..." /><button className="button form-submit" type="submit">Prepare message <Send size={17} /></button></form>
      </div></section>
    </>
  );
}