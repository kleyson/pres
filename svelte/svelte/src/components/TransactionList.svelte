<script>
  import { transactions } from "../util/store";
  import Transaction from "./Transaction.svelte";
</script>

<div>
  <h3>History</h3>
  <ul class="list">
    {#each $transactions as transaction}
      <Transaction {transaction} />
    {/each}
  </ul>
</div>
