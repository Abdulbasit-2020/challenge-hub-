import { useEffect, useRef } from "react";

export default function VideoBanner({ src, poster, title, className = "" }) {
  const videoRef = useRef(null);
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
    const preference = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (preference?.matches) videoElement.pause();
    const onPreferenceChange = (event) => {
      if (event.matches) videoElement.pause();
      else videoElement.play().catch(() => {});
    };
    preference?.addEventListener?.("change", onPreferenceChange);
    return () => preference?.removeEventListener?.("change", onPreferenceChange);
  }, []);

  return (
    <section className={`video-banner ${className}`} aria-label={title}>
      <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster={poster}>
        <source src={src} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      {title && <h2 className="video-banner-caption">{title}</h2>}
    </section>
  );
}
