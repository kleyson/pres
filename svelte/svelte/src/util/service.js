import api from "./api";
import { transactions } from "./store";

export const hydrateStore = async () => {
  try {
    const response = await api.getTransactions();
    transactions.set(response.data);
  } catch (e) {
    console.log(e);
  }
};

export const deleteTransaction = async id => {
  try {
    await api.deleteTransaction(id);
    transactions.update(t => t.filter(transaction => transaction._id !== id));
  } catch (e) {
    console.log(e);
  }
};

export const addTransaction = async transaction => {
  try {
    const response = await api.addTransaction(transaction);
    transactions.update(t => [...t, response.data]);
  } catch (e) {
    console.log(e);
  }
};
