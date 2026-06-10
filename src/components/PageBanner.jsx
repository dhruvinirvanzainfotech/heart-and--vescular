import "./PageBanner.css";
import { Link } from "react-router-dom";

export default function PageBanner({
  title,
  subtitle,
  backgroundImage,
}) {
  return (
    <section
      className="page-banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="page-banner-overlay"></div>

      <div className="page-banner-content">
        <h1 className="banner-title">{title}</h1>

        {subtitle && (
          <p className="banner-subtitle">
            {subtitle}
          </p>
        )}

        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>

          <span>/</span>

          {title}
        </div>
      </div>
    </section>
  );
}