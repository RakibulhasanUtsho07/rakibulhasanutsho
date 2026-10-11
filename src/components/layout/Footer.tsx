import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Link className="brand" href="#home" aria-label="Return to top">
              <span className="brand-mark">U</span>
              <span className="brand-name">UTSHO<span>.DEV</span></span>
            </Link>
            <p>Thoughtful engineering for the modern web.</p>
          </div>
          <nav className="footer-links" aria-label="Social links">
            <a href={site.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={site.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={"mailto:" + site.email}>Email ↗</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Rakibul Hasan Utsho</span>
          <span>DESIGNED WITH INTENT · BUILT WITH CODE</span>
        </div>
      </div>
    </footer>
  );
}
