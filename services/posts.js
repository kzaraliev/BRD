import { fetchAPI } from "./api";
import { cache } from "react";

/**
 * Get single post by slug
 * @param {string} slug - Post slug
 * @param {string} locale - Language code
 * @returns {Promise<Object|null>} - Post data
 */
export const getPostBySlug = cache(async (slug, locale = "bg") => {
  return await fetchAPI(
    `posts?slug=${slug}&_fields=id,slug,yoast_head_json,date,title,content&lang=${locale}`
  );
});

/**
 * Get latest posts
 * @param {string} locale - Language code
 * @returns {Promise<Array>} - List of latest posts
 */
export const getLatestPosts = cache(async (locale = "bg") => {
  return await fetchAPI(
    `posts?per_page=3&_fields=id,slug,yoast_head_json,date,title,content&lang=${locale}`
  );
});
