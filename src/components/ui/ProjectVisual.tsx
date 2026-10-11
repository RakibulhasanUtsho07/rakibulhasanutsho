import type { ProjectVisualVariant } from "@/data/projects";

type ProjectVisualProps = {
  variant: ProjectVisualVariant;
  compact?: boolean;
};

const mapBuildings = Array.from({ length: 48 }, (_, index) => index);
const chartBars = [32, 52, 39, 73, 46, 88, 59, 66, 44, 81, 57, 93];

export default function ProjectVisual({ variant, compact = false }: ProjectVisualProps) {
  if (variant === "map") {
    return (
      <div className={"project-visual project-visual--map" + (compact ? " project-visual--compact" : "")} aria-label="Stylized 3D geospatial project preview">
        <div className="preview-map-toolbar">
          <span>DHAKA / 3D VIEW</span><span>BUILDINGS · ROADS · POIs</span>
        </div>
        <div className="map-water" />
        <div className="map-road map-road--one" /><div className="map-road map-road--two" />
        <div className="map-road map-road--three" /><div className="map-road map-road--four" />
        <div className="map-buildings">{mapBuildings.map((building) => <span className="map-building" key={building} />)}</div>
        <span className="map-pin map-pin--one">⌖</span><span className="map-pin map-pin--two">+</span>
        <span className="map-label map-label--one">SELECTED BUILDING</span><span className="map-label map-label--two">NEARBY SERVICES</span>
      </div>
    );
  }

  if (variant === "payment") {
    return (
      <div className="project-visual project-visual--payment" aria-label="Stylized financial dashboard preview">
        <div className="payment-sidebar"><span className="payment-logo" />{[0, 1, 2, 3, 4].map((item) => <span className={"payment-side-dot" + (item === 0 ? " active" : "")} key={item} />)}</div>
        <div className="payment-main">
          <div className="payment-topline"><span>Overview</span><span>ADMIN DASHBOARD</span></div>
          <div className="payment-balance">
            <div className="payment-balance-label">TOTAL FLOW / SAMPLE UI</div><div className="payment-balance-amount">Wallet analytics</div>
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

  if (variant === "food") {
    return (
      <div className="project-visual project-visual--food" aria-label="Stylized Real Foods website preview">
        <div className="food-topline"><span>REAL FOODS</span><span>FRESH · SIMPLE · GOOD</span></div>
        <div className="food-brand">Good food,<br />good days.</div><div className="food-tagline">Freshly made, thoughtfully chosen.</div>
        <div className="food-products">{["Croissant", "Cookies", "Bakery"].map((name) => <div className="food-product" key={name}><span className="food-product-shape" /><span className="food-product-name">{name}</span></div>)}</div>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual--agency" aria-label="Stylized agency website preview">
      <div className="agency-topline"><span>PIXEL & CODE</span><span>DESIGN / BUILD / GROW</span></div>
      <div className="agency-title">Ideas into<br /><span>digital reality.</span></div>
      <div className="agency-sub">A sharper digital presence for ideas that deserve to be seen.</div>
      <div className="agency-bottom"><span className="agency-link">Explore services ↗</span><span className="agency-art" /></div>
    </div>
  );
}
