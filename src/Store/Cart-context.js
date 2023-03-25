import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItems: (id) => {},
});

export default CartContext;
