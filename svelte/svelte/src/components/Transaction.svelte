<script>
  import { fade, fly  } from "svelte/transition";
  import { numberWithCommas } from "../util/format";
  import { deleteTransaction } from "../util/service";
  export let transaction;
  const sign = transaction.amount < 0 ? "-" : "+";
</script>

<li class={transaction.amount < 0 ? 'minus' : 'plus'}>
  {transaction.text}
  <span in:fly>{sign}{numberWithCommas(Math.abs(transaction.amount))}</span>
  <button
    on:click={() => deleteTransaction(transaction._id)}
    class="delete-btn">
    x
  </button>
</li>
