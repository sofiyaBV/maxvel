// https://newsapi.org/v2/everything?q=bitcoin&apiKey=1794e0543ed34c36b7a21b4265f3bde6

import { API_PROFILE } from "./ApiProfile";

export let newsData;

export default async function GetData(...obj) {
  const searchValue = obj[0] || "ukraine";
  try {
    const response = await fetch(
      `${API_PROFILE.apiUrl}${API_PROFILE.newsPath}?q=${searchValue}&${API_PROFILE.apiKey} `
    );
    const data = await response.json();
    newsData = data;
    return newsData;
  } catch (error) {
    console.error(error);
  }
}
