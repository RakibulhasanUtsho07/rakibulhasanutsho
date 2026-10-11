import type { ProjectVisualVariant } from "@/data/projects";

type ProjectVisualProps = {
  variant: ProjectVisualVariant;
  compact?: boolean;
};

const chartBars = [32, 52, 39, 73, 46, 88, 59, 66, 44, 81, 57, 93];

export default function ProjectVisual({ variant, compact = false }: ProjectVisualProps) {
  const classes = "project-visual" + (compact ? " project-visual--compact" : "");

  if (variant === "payment") {
    return (
      <div className={classes + " project-visual--payment"} aria-label="Stylised digital wallet dashboard preview">
        <div className="payment-sidebar"><span className="payment-logo" />{[0, 1, 2, 3, 4].map((item) => <span className={"payment-side-dot" + (item === 0 ? " active" : "")} key={item} />)}</div>
        <div className="payment-main">
          <div className="payment-topline"><span>Overview</span><span>WALLET / ADMIN</span></div>
          <div className="payment-balance">
            <div className="payment-balance-label">FINANCIAL OPERATIONS</div><div className="payment-balance-amount">Wallet analytics</div>
            <div className="payment-balance-line"><span /><span /><span /></div>
          </div>
          <div className="payment-lower">
            <div className="payment-mini-panel"><div className="payment-mini-title">Activity</div><div className="payment-bars">{chartBars.slice(0, 6).map((height, index) => <span key={index} style={{ height: height + "%" }} />)}</div></div>
            <div className="payment-mini-panel"><div className="payment-mini-title">Transactions</div><div className="payment-bars">{chartBars.slice(6).map((height, index) => <span key={index} style={{ height: height + "%" }} />)}</div></div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "lesson") {
    return (
      <div className={classes + " project-visual--lesson"} aria-label="Stylised LessonUp application preview">
        <div className="lesson-topline"><span>LESSONUP</span><span>COLLECT · REFLECT · GROW</span></div>
        <div className="lesson-hero-copy">
          <span className="lesson-pill">A LITTLE WISDOM, EVERY DAY</span>
          <h4>Small lessons.<br /><em>Meaningful growth.</em></h4>
          <p>Keep the ideas that move you forward.</p>
        </div>
        <div className="lesson-cards">
          <div className="lesson-note lesson-note--violet"><span>01 / MINDSET</span><strong>Progress over perfection</strong><i>Saved to your collection ↗</i></div>
          <div className="lesson-note lesson-note--blue"><span>02 / PERSPECTIVE</span><strong>Make room for change</strong><i>Community lesson ↗</i></div>
        </div>
        <div className="lesson-orb lesson-orb--one" /><div className="lesson-orb lesson-orb--two" />
      </div>
    );
  }

  if (variant === "food") {
    return (
      <div className={classes + " project-visual--food"} aria-label="Stylised Real Foods storefront preview">
        <div className="food-topline"><span>REAL FOODS</span><span>FRESH · SIMPLE · GOOD</span></div>
        <div className="food-brand">Good food,<br />good days.</div><div className="food-tagline">Freshly made, thoughtfully chosen.</div>
        <div className="food-products">{["Croissant", "Cookies", "Bakery"].map((name) => <div className="food-product" key={name}><span className="food-product-shape" /><span className="food-product-name">{name}</span></div>)}</div>
      </div>
    );
  }

  return (
    <div className={classes + " project-visual--sports"} aria-label="Stylised sports facility booking preview">
      <div className="sports-topline"><span>SPORTSGROUND</span><span>FIND YOUR GAME</span></div>
      <div className="sports-heading">Your next game<br /><em>starts here.</em></div>
      <p className="sports-subtitle">Find a space. Bring your team.</p>
      <div className="sports-facility">
        <div className="sports-court-art"><span /><i /><b /></div>
        <div className="sports-facility-info"><span className="sports-facility-label">FEATURED FACILITY</span><strong>Indoor court</strong><small>Available slots · Today</small></div>
        <span className="sports-facility-arrow">↗</span>
      </div>
      <div className="sports-time-slots"><span>09:00 AM</span><span>11:30 AM</span><span>04:00 PM</span></div>
    </div>
  );
}
