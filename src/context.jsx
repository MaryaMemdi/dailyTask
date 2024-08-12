import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [register, setRegister] = useState(false);
  <AppContext.Provider value={{ register, setRegister }}>
    {children}
  </AppContext.Provider>;
};

