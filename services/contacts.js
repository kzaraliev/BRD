import { fetchAPI } from "./api";

export const getContactInfo = async (locale = "bg") => {
  const data = await fetchAPI(`contacts?_fields=acf&lang=${locale}`);
  const contactInfo = data && data.length > 0 ? data[0].acf : null;
  return contactInfo;
};
