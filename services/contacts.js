// import { fetchAPI } from "./api";

// export const getContactInfo = async () => {
//     const data = await fetchAPI("contacts?_fields=acf");
//     return data && data.length > 0 ? data[0].acf : null;
// };

import { fetchAPI } from "./api";

const CACHE_KEY = "contact_info";
const CACHE_EXPIRATION = 20 * 1000; // 20 seconds in milliseconds

export const getContactInfo = async () => {
    const cachedData = localStorage.getItem(CACHE_KEY);

    if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);

        if (Date.now() - timestamp < CACHE_EXPIRATION) {
            return data; // Return cached data if still valid
        }
    }

    // Fetch new data from API
    const data = await fetchAPI("contacts?_fields=acf");
    const contactInfo = data && data.length > 0 ? data[0].acf : null;

    if (contactInfo) {
        localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ data: contactInfo, timestamp: Date.now() })
        );
    }

    return contactInfo;
};