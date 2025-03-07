import { fetchAPI } from "./api";

const CACHE_KEY = "member_info";
const CACHE_EXPIRATION = 20 * 1000; // 20 seconds in milliseconds

/**
 * Get all members
 * @returns {Promise<Array>} - List of members
 */
export const getMembers = async () => {
  const fetchedMembers = await fetchAPI("members?_fields=id,acf,slug&acf_format=standard");

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
    profilepircture: member.acf.profilepircture
  }));
};

/**
 * Get single member by slug
 * @param {string} slug - Member slug
 * @returns {Promise<Object|null>} - Member data
 */
export const getMemberInfo = async (slug) => {
  const cachedData = localStorage.getItem(CACHE_KEY);

  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);

    if (Date.now() - timestamp < CACHE_EXPIRATION) {
      return data; // Return cached data if still valid
    }
  }

  // Fetch new data from API
  const data = await fetchAPI(`members?slug=${slug}&_fields=acf`);
  const memberInfo = data && data.length > 0 ? data[0].acf : null;

  if (memberInfo) {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data: memberInfo, timestamp: Date.now() })
    );
  }

  return memberInfo;
};
