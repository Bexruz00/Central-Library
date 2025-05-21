"use client";

import { ContextType } from "@/types/ContextType";
import { createContext, useEffect, useState, ReactNode, FC } from "react";

export const Context = createContext<ContextType>({
  token: null,
  setToken: () => {},
  collapsed: false,
  setCollapsed: () => {},
  openCategory: false,
  setOpenCategory: () => {},
});

interface GlobalContextProps {
  children: ReactNode;
}

export const GlobalContextProvider: FC<GlobalContextProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [openCategory, setOpenCategory] = useState<boolean>(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(JSON.parse(savedToken));
    }
  }, []);

  useEffect(() => {
    if (token !== null) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        collapsed,
        setCollapsed,
        openCategory,
        setOpenCategory,
      }}
    >
      {children}
    </Context.Provider>
  );
};
