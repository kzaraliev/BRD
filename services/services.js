import { fetchAPI } from "./api";

/**
 * Get all services
 * @returns {Promise<Array>} - List of services
 */
export const getServices = async () => {
    return await fetchAPI("services");
};

/**
 * Get a single service by slug
 * @param {string} slug - Service slug
 * @returns {Promise<Object|null>} - Service data
 */
export const getServiceBySlug = async (slug) => {
    return await fetchAPI(`services?slug=${slug}`);
};

/**
 * Get services by category
 * @param {number} categoryId - Category ID
 * @returns {Promise<Array>} - List of services in category
 */
export const getServicesByCategory = async (categoryId) => {
    return await fetchAPI(`services?categories=${categoryId}`);
};
