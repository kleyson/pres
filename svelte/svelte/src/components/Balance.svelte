<script>
  import { transactions } from "../util/store";
  import { numberWithCommas } from "../util/format";

  let total;

  transactions.subscribe(value => {
    const amounts = value.map(transaction => transaction.amount);
    total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  });
</script>

<h4>Your Balance</h4>
<h1>{numberWithCommas(total)}</h1>
