import { fetchAPI } from "./api";
import { cache } from "react";

/**
 * Get all services
 * @param {string} locale - Language code
 * @returns {Promise<Array>} - List of services
 */
export const getServices = cache(async (locale = "bg") => {
  return await fetchAPI(
    `services?_fields=id,slug,yoast_head_json,date,title,content&per_page=100&lang=${locale}`,
    {
      next: { revalidate: 60 },
    }
  );
});

/**
 * Get all services for nav bar
 * @param {string} locale - Language code
 * @returns {Promise<Array>} - List of services
 */
export const getServicesNav = cache(async (locale = "bg") => {
  return await fetchAPI(
    `services?_fields=id,slug,yoast_head_json,title&per_page=16&lang=${locale}`
  );
});

/**
 * Get a single service by slug
 * @param {string} slug - Service slug
 * @param {string} locale - Language code
 * @returns {Promise<Object|null>} - Service data
 */
export const getServiceBySlug = cache(async (slug, locale = "bg") => {
  return await fetchAPI(
    `services?slug=${slug}&_fields=id,slug,yoast_head_json,date,title,content&lang=${locale}`
  );
});

/**
 * Get services by category
 * @param {number} categoryId - Category ID
 * @param {string} locale - Language code
 * @returns {Promise<Array>} - List of services in category
 */
export const getServicesByCategory = cache(async (categoryId, locale = "bg") => {
  return await fetchAPI(`services?categories=${categoryId}&lang=${locale}`);
});
