import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PageOptionsContextType {
  showScrollPrompt: boolean;
  setShowScrollPrompt: (show: boolean) => void;
  startPageAsScrolled: boolean;
  setStartPageAsScrolled: (startScrolled: boolean) => void;
}

const PageOptionsContext = createContext<PageOptionsContextType | undefined>(undefined);

export const PageOptionsProvider = ({ children }: { children: ReactNode }) => {
  const [showScrollPrompt, setShowScrollPrompt] = useState(true);
  const [startPageAsScrolled, setStartPageAsScrolled] = useState(false);

  return (
    <PageOptionsContext.Provider value={{ showScrollPrompt, setShowScrollPrompt, startPageAsScrolled, setStartPageAsScrolled }}>
      {children}
    </PageOptionsContext.Provider>
  );
};

export const usePageOptions = () => {
  const context = useContext(PageOptionsContext);
  if (context === undefined) {
    throw new Error('usePageOptions must be used within a PageOptionsProvider');
  }
  return context;
}; 