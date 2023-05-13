import { createContext, useState } from "react";

export const PaginableContext = createContext({});

export const PaginableContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isActionsHidden, setIsActionsHidden] = useState(false);
  return (
    <PaginableContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        setIsActionsHidden,
        isActionsHidden,
      }}
    >
      {children}
    </PaginableContext.Provider>
  );
};
