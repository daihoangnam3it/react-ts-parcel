import { PropTypes } from "@material-ui/core";
import React, { createContext, ReactNode, useState } from "react";

interface ThemeContextProps{
  children:ReactNode
}
interface ThemContextDefault{
  theme:PropTypes.Color,
  toggleTheme:(theme:PropTypes.Color)=>void
}
const themContextDefaultData = {
  theme:'secondary' as PropTypes.Color,
  toggleTheme:()=>{}
}
export const ThemeContext = createContext<ThemContextDefault>(themContextDefaultData);

const ThemeContextProvider=({children}:ThemeContextProps)=>{
  const [theme,setTheme]= useState<PropTypes.Color>(themContextDefaultData.theme)
  const toggleTheme = (theme: PropTypes.Color)=>{
    setTheme(theme)
  }
  const themeContextDynamicData = {theme,toggleTheme}
  return <ThemeContext.Provider value={themeContextDynamicData}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeContextProvider