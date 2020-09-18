<script>
  import { numberWithCommas } from "../util/format";
  import { transactions } from "../util/store";

  let income;
  let expense;

  transactions.subscribe(value => {
    const amounts = value.map(transaction => transaction.amount);
    income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);
  });
</script>

<div class="inc-exp-container">
  <div>
    <h4>Income</h4>
    <p class="money plus">${numberWithCommas(income)}</p>
  </div>
  <div>
    <h4>Expense</h4>
    <p class="money minus">${numberWithCommas(expense)}</p>
  </div>
</div>
