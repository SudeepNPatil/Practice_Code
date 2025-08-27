import { createContext, useState } from 'react';

export const TheamContext = createContext();

export function TheamContextProvider({ children }) {
  const [state, setstate] = useState('dark');

  const changetheam = () => {
    setstate('white');
  };

  return (
    <TheamContext.Provider value={{ state, changetheam }}>
      {children}
    </TheamContext.Provider>
  );
}
