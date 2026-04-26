import { useState } from "react";

function getFallbackSrc(src) {
  if (!src.includes("via.placeholder.com")) return src;
  return src.replace("https://via.placeholder.com", "https://placehold.co");
}

export function ProductCard({ name, price, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const displayPrice = price === 0 ? "Free" : `₹${price.toLocaleString("en-IN")}`;

  return (
    <article className="card latest-card border-0 shadow-sm h-100">
      <img
        className="card-img-top"
        src={imgSrc}
        alt={name}
        width={400}
        height={220}
        loading="eager"
        onError={() => setImgSrc((current) => getFallbackSrc(current))}
      />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h6 mb-2">{name}</h3>
        <p className="product-card__price mb-2">{displayPrice}</p>
      </div>
    </article>
  );
}
