<script>
  import { addTransaction } from "../util/service";
  let text = "";
  let amount = "";
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
  };
</script>

<h3>Add new transaction</h3>
<form on:submit={onSubmit}>
  <div class="form-control">
    <label for="text">Text</label>
    <input type="text" bind:value={text} placeholder="Enter text..." />
  </div>
  <div class="form-control">
    <label for="amount">
      Amount
      <br />
      (negative - expense, positive - income)
    </label>
    <input type="number" bind:value={amount} placeholder="Enter amount..." />
  </div>
  <button class="btn">Add transaction</button>
</form>
