import React from "react";

export const themes = {
    light: {
      foreground: '#ffffff',
      background: '#7FB3D5',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };
  
  export const GulzhanContext = React.createContext(
    themes.dark // значение по умолчанию
  );