import { fetchAPI } from "./api";

export const getContactInfo = async () => {
    const data = await fetchAPI("contacts?_fields=acf");
    return data && data.length > 0 ? data[0].acf : null;
};
