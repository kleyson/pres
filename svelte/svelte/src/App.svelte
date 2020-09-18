<script>
  import Balance from "./components/Balance.svelte";
  import IncomeExpenses from "./components/IncomeExpenses.svelte";
  import TransactionList from "./components/TransactionList.svelte";
  import AddTransaction from "./components/AddTransaction.svelte";
  import { hydrateStore } from "./util/service";
  import { onMount } from "svelte";

  onMount(hydrateStore);
</script>

<main>
  <h2>Expense Tracker</h2>
  <div class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
</main>
