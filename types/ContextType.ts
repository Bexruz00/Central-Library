import React, { SetStateAction } from "react";

export interface ContextType {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  openCategory: boolean;
  setOpenCategory: React.Dispatch<React.SetStateAction<boolean>>;
}
