import { createContext, useContext, useState } from "react";
import { API_PROFILE } from "./ApiProfile";

//створення котексту
const AppContext = createContext();
//функція при виклику якої можемо отримати данні з контексту
export const useApp = () => {
  return useContext(AppContext);
};

//провайдер
export const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState([]);
  const get_data = async (...obj) => {
    const searchValue = obj[0] || "ukraine";
    try {
      const response = await fetch(
        `${API_PROFILE.apiUrl}${API_PROFILE.newsPath}?q=${searchValue}&${API_PROFILE.apiKey} `
      );
      const data = await response.json();
      setGlobalState(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AppContext.Provider value={{ get_data, globalState }}>
      {children}
    </AppContext.Provider>
  );
};
