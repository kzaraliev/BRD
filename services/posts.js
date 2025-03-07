import { fetchAPI } from "./api";

/**
 * Get all posts
 * @returns {Promise<Array>} - List of posts
 */
export const getPosts = async () => {
    return await fetchAPI("posts");
};

/**
 * Get single post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<Object|null>} - Post data
 */
export const getPostBySlug = async (slug) => {
    return await fetchAPI(`posts?slug=${slug}`);
};

/**
 * Get all posts
 * @returns {Promise<Array>} - List of latest posts
 */
export const getLatestPosts = async () => {
    return await fetchAPI("posts?per_page=3")
}
