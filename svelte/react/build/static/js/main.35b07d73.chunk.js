(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(13),n(2)),u=n(1),s=n.n(u),i=n(4),m=n(7),p=n(3),d=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(p.a)({},e,{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(p.a)({},e,{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(p.a)({},e,{transactions:[].concat(Object(m.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(p.a)({},e,{error:t.payload});default:return e}},E={transactions:[],error:null,loading:!0},f=Object(a.createContext)(E),v=function(e){var t=e.children,n=Object(a.useReducer)(d,E),c=Object(l.a)(n,2),o=c[0],u=c[1];function m(){return(m=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/v1/transactions");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,u({type:"GET_TRANSACTIONS",payload:n.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),u({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function p(){return(p=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/v1/transactions/".concat(t),{method:"DELETE"});case 3:u({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),u({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function v(){return(v=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/v1/transactions",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,u({type:"ADD_TRANSACTION",payload:a.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),u({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return r.a.createElement(f.Provider,{value:{transactions:o.transactions,error:o.error,loading:o.loading,getTransactions:function(){return m.apply(this,arguments)},deleteTransaction:function(e){return p.apply(this,arguments)},addTransaction:function(e){return v.apply(this,arguments)}}},t)},b=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),u=Object(l.a)(o,2),s=u[0],i=u[1],m=Object(a.useContext)(f).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m({text:n,amount:+s})}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:s,onChange:function(e){return i(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};function h(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var O=function(){var e=Object(a.useContext)(f).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"$",h(e)))},T=function(){return r.a.createElement("h2",null,"Expense Tracker")},x=function(){var e=Object(a.useContext)(f).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"$",h(t))),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"$",h(n))))},y=function(e){var t=e.transaction,n=Object(a.useContext)(f).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,c,"$",h(Math.abs(t.amount))),r.a.createElement("button",{onClick:function(){return n(t._id)},className:"delete-btn"},"x"))},N=function(){var e=Object(a.useContext)(f),t=e.transactions,n=e.getTransactions;return Object(a.useEffect)((function(){n()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement(y,{key:e.id,transaction:e})}))))};var A=function(){return r.a.createElement(v,null,r.a.createElement(T,null),r.a.createElement("div",{className:"container"},r.a.createElement(O,null),r.a.createElement(x,null),r.a.createElement(N,null),r.a.createElement(b,null)))};o.a.render(r.a.createElement(A,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.35b07d73.chunk.js.map