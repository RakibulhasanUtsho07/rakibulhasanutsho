import type { ProjectVisualVariant } from "@/data/projects";

type ProjectVisualProps = {
  variant: ProjectVisualVariant;
  compact?: boolean;
};

const chartBars = [32, 52, 39, 73, 46, 88, 59, 66, 44, 81, 57, 93];

export default function ProjectVisual({ variant, compact = false }: ProjectVisualProps) {
  const classes = "project-visual" + (compact ? " project-visual--compact" : "");

  if (variant === "job-tracker") {
    return (
      <div className={classes + " project-visual--jobs"} aria-label="Stylised job-tracking dashboard preview">
        <div className="jobs-sidebar">
          <span className="jobs-brand-mark">H</span>
          <span className="jobs-nav-item jobs-nav-item--active" />
          <span className="jobs-nav-item" />
          <span className="jobs-nav-item" />
          <span className="jobs-nav-item" />
        </div>
        <div className="jobs-main">
          <div className="jobs-topbar"><span>Candidate workspace</span><span className="jobs-avatar">U</span></div>
          <div className="jobs-heading"><div><span className="jobs-eyebrow">YOUR NEXT CHAPTER</span><strong>Application overview</strong></div><span className="jobs-demo-pill">DEMO DATA</span></div>
          <div className="jobs-stat-grid">
            <div><span>Applications</span><strong>08</strong><i /></div>
            <div><span>In review</span><strong>03</strong><i /></div>
            <div><span>Next step</span><strong>02</strong><i /></div>
          </div>
          <div className="jobs-list">
            <div className="jobs-list-title"><strong>Recent applications</strong><span>VIEW ALL ↗</span></div>
            <div className="jobs-list-row"><b className="jobs-company jobs-company--one">N</b><span><strong>Frontend Developer</strong><small>Northstar Careers · Remote</small></span><i className="jobs-status jobs-status--review">In review</i></div>
            <div className="jobs-list-row"><b className="jobs-company jobs-company--two">A</b><span><strong>Product Engineer</strong><small>Atlas Studio · Hybrid</small></span><i className="jobs-status jobs-status--sent">Submitted</i></div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "agency") {
    return (
      <div className={classes + " project-visual--agency"} aria-label="Stylised Pixel and Code agency website preview">
        <div className="agency-topbar"><span className="agency-brand">PIXEL<span>&</span>CODE</span><span className="agency-nav">SERVICES&nbsp;&nbsp;&nbsp; WORK&nbsp;&nbsp;&nbsp; ABOUT</span><span className="agency-menu">↗</span></div>
        <div className="agency-hero">
          <span className="agency-eyebrow">DIGITAL AGENCY · BANGLADESH</span>
          <strong>Digitize your<br /><em>imagination.</em></strong>
          <span className="agency-cta">START A PROJECT ↗</span>
        </div>
        <div className="agency-bottom">
          <div className="agency-tile agency-tile--one"><span>01 / DEVELOPMENT</span><strong>Web & app<br />experiences</strong></div>
          <div className="agency-tile agency-tile--two"><span>02 / CREATIVE</span><strong>Brand & visual<br />identity</strong></div>
          <div className="agency-tile agency-tile--three"><span>03 / GROWTH</span><strong>Content &<br />marketing</strong></div>
        </div>
      </div>
    );
  }

  if (variant === "food") {
    return (
      <div className={classes + " project-visual--food"} aria-label="Stylised Real Foods bakery storefront preview">
        <div className="food-topline"><span>REAL FOODS</span><span>FRESH · SIMPLE · GOOD</span></div>
        <div className="food-brand">Good food,<br />good days.</div>
        <div className="food-tagline">Freshly made, thoughtfully chosen.</div>
        <div className="food-products">
          {["Croissant", "Cookies", "Bakery"].map((name) => (
            <div className="food-product" key={name}><span className="food-product-shape" /><span className="food-product-name">{name}</span></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={classes + " project-visual--payment"} aria-label="Stylised digital wallet landing-page preview">
      <div className="payment-sidebar"><span className="payment-logo" />{[0, 1, 2, 3, 4].map((item) => <span className={"payment-side-dot" + (item === 0 ? " active" : "")} key={item} />)}</div>
      <div className="payment-main">
        <div className="payment-topline"><span>Wallet interface</span><span>PRODUCT / UI</span></div>
        <div className="payment-balance">
          <div className="payment-balance-label">DIGITAL PAYMENT EXPERIENCE</div>
          <div className="payment-balance-amount">Move money, made clear.</div>
          <div className="payment-balance-line"><span /><span /><span /></div>
        </div>
        <div className="payment-lower">
          <div className="payment-mini-panel"><div className="payment-mini-title">Feature highlights</div><div className="payment-bars">{chartBars.slice(0, 6).map((height, index) => <span key={index} style={{ height: height + "%" }} />)}</div></div>
          <div className="payment-mini-panel"><div className="payment-mini-title">Product sections</div><div className="payment-bars">{chartBars.slice(6).map((height, index) => <span key={index} style={{ height: height + "%" }} />)}</div></div>
        </div>
      </div>
    </div>
  );
}
