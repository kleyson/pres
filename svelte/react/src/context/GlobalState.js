import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await fetch("/api/v1/transactions");
      const data = await res.json();

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: data.data
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await fetch(`/api/v1/transactions/${id}`, {
        method: "DELETE"
      });

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error
      });
    }
  }

  async function addTransaction(transaction) {
    try {
      const res = await fetch("/api/v1/transactions", {
        method: "POST",
        body: JSON.stringify(transaction),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      dispatch({
        type: "ADD_TRANSACTION",
        payload: data.data
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
