import { PRODUCTS_JSON } from "../data/products.js";

const MOCK_NETWORK_DELAY_MS = 500;

export async function fetchLatestProducts() {
  await new Promise((resolve) => {
    setTimeout(resolve, MOCK_NETWORK_DELAY_MS);
  });

  return [...PRODUCTS_JSON];
}
