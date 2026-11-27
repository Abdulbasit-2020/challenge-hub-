import { Apple, Play } from "lucide-react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../config.js";

export default function DownloadButtons({ compact = false }) {
  return (
    <div className={compact ? "download-actions compact" : "download-actions"} id="download">
      <a className="store-button primary-store" href={GOOGLE_PLAY_URL || "#download"} onClick={!GOOGLE_PLAY_URL ? (event) => event.preventDefault() : undefined} aria-label="Download ChallengeHub on Google Play">
        <Play size={19} fill="currentColor" />
        <span><small>GET IT ON</small><strong>Google Play</strong></span>
      </a>
      <a className="store-button secondary-store" href={APP_STORE_URL || "#download"} onClick={!APP_STORE_URL ? (event) => event.preventDefault() : undefined} aria-label="Download ChallengeHub on the App Store">
        <Apple size={21} />
        <span><small>DOWNLOAD ON THE</small><strong>App Store</strong></span>
      </a>
    </div>
  );
}