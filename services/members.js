import { fetchAPI } from "./api";

/**
 * Get all members
 * @param {string} locale - Language code
 * @returns {Promise<Array>} - List of members
 */
export const getMembers = async (locale = "bg") => {
  const fetchedMembers = await fetchAPI(
    `members?_fields=id,acf,slug&acf_format=standard&lang=${locale}`
  );

  return fetchedMembers.map((member) => ({
    id: member.id,
    name: member.acf.name,
    position: member.acf.position,
    description: member.acf.description,
    phonenumber: member.acf.phonenumber,
    email: member.acf.email,
    linkedin: {
      title: member.acf.linkedin.title,
      url: member.acf.linkedin.url,
      target: member.acf.linkedin.target,
    },
    slug: member.slug,
    profilepircture: member.acf.profilepircture,
  }));
};

/**
 * Get single member by slug
 * @param {string} slug - Member slug
 * @param {string} locale - Language code
 * @returns {Promise<Object|null>} - Member data
 */
export const getMemberInfo = async (slug, locale = "bg") => {
  // Fetch new data from API
  const data = await fetchAPI(
    `members?slug=${slug}&_fields=acf&acf_format=standard&lang=${locale}`
  );

  return data && data.length > 0 ? data[0].acf : null;
};
