import { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  sortOption: string;
  setSortOption: (option: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContext');
  }
  return context;
};

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [sortOption, setSortOption] = useState('Most Upvotes');

  return (
    <AppContext.Provider value={{ sortOption, setSortOption }}>
      {children}
    </AppContext.Provider>
  );
};
