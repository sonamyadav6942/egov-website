import { useMemo, useState, useEffect } from "react";
import { CATEGORIES } from "../data/products.js";
import { fetchLatestProducts } from "../api/mockApi.js";
import { ProductCard } from "./ProductCard.jsx";

export function LatestAtEgov() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    let ignoreResult = false;

    async function loadProducts() {
      setLoading(true);
      const list = await fetchLatestProducts();
      if (!ignoreResult) {
        setProducts(list);
        setLoading(false);
      }
    }

    loadProducts();

    return () => {
      ignoreResult = true;
    };
  }, []);

  const visibleProducts = useMemo(() => {
    const normalizedSearch = searchText.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesName =
        !normalizedSearch || product.name.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesName;
    });
  }, [products, searchText, selectedCategory]);

  const emptyStateLabel = searchText.trim() || selectedCategory;

  return (
    <section className="latest-react" id="latest">
      <div className="container">
        <div className="latest-react__head">
          <h2 className="latest-react__title m-0">
            <span className="latest-react__title-light">Latest at </span>
            <span className="latest-react__title-strong">eGov</span>
          </h2>
        </div>

        <div className="latest-react__filters-row mb-3">
          <div className="latest-react__search">
            <span className="latest-react__search-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="1.7" />
                <path d="M16.2 16.2 21 21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
            <input
              id="search-products"
              type="search"
              className="search-input"
              placeholder="Search by name"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="latest-react__category">
            <label className="sr-only" htmlFor="category-filter">
              Category filter
            </label>
            <select
              id="category-filter"
              className="latest-react__category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {!loading && visibleProducts.length > 0 && (
          <p className="latest-meta mb-3">Showing {visibleProducts.length} items</p>
        )}

        {loading && (
          <div className="state state--loading" role="status" aria-live="polite">
            <div className="spinner" aria-hidden="true" />
            <p className="state__title">Loading latest items...</p>
            <p className="state__hint">Fetching products from mock API.</p>
          </div>
        )}

        {!loading && visibleProducts.length === 0 && (
          <div className="latest-react__no-results" role="status">
            <div className="latest-react__no-results-panel">
              <p className="latest-react__no-results-title">
                Search Results for : <span>{emptyStateLabel}</span>
              </p>
              <p className="latest-react__no-results-count">Total Results Found :- 0</p>
            </div>
            <p className="latest-react__no-results-note">Ah! Sorry No results found.</p>
          </div>
        )}

        {!loading && visibleProducts.length > 0 && (
          <ul className="product-grid latest-card">
            {visibleProducts.map((product) => (
              <li key={product.id}>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
