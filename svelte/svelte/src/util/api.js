const HOST = "http://localhost:4000";

export async function getTransactions() {
  const res = await fetch(`${HOST}/api/v1/transactions`);
  return await res.json();
}

export async function deleteTransaction(id) {
  await fetch(`${HOST}/api/v1/transactions/${id}`, {
    method: "DELETE"
  });
}

export async function addTransaction(transaction) {
  const res = await fetch(`${HOST}/api/v1/transactions`, {
    method: "POST",
    body: JSON.stringify(transaction),
    headers: {
      "Content-Type": "application/json"
    }
  });

  return await res.json();
}

export default {
  getTransactions,
  deleteTransaction,
  addTransaction
};
