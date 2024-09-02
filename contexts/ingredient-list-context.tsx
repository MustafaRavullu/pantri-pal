"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

type IngredientListContextType = {
  ingredientList: string[] | null;
  addIngredient: (name: string) => void;
  deleteIngredient: (name: string) => void;
  autocompleteQuery: string;
  setAutocompleteQuery: React.Dispatch<React.SetStateAction<string>>;
};

const IngredientListContext = createContext<
  IngredientListContextType | undefined
>(undefined);

export const IngredientListContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [autocompleteQuery, setAutocompleteQuery] = useState("");
  const [ingredientList, setIngredients] = useState<string[]>([]);
  const addIngredient = (name: string) => {
    setIngredients([...ingredientList, name]);
  };
  const deleteIngredient = (name: string) => {
    setIngredients([...ingredientList].filter((item) => item !== name));
  };

  return (
    <IngredientListContext.Provider
      value={{
        ingredientList,
        addIngredient,
        deleteIngredient,
        autocompleteQuery,
        setAutocompleteQuery,
      }}
    >
      {children}
    </IngredientListContext.Provider>
  );
};

export const useIngredientListContext = () => {
  const context = useContext(IngredientListContext);
  if (!context) {
    throw new Error(
      "useIngredientListContext must be used within a IngredientListContextProvider"
    );
  }
  return context;
};
