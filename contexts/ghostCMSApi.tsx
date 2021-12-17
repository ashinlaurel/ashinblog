import { createContext, useContext, useState } from "react";

const apiContext = createContext({});

export function apiProvider({ children }) {
  const [api, setApi] = useState();

  return (
    <apiContext.Provider value={{ api, setApi }}>
      {children}
    </apiContext.Provider>
  );
}

export function useapiContext() {
  return useContext(apiContext);
}
