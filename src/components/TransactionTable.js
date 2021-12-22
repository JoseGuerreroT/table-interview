import React from "react";


const dateDefault = "2019-11-29"

function TransactionTable({txns}) {
  const [dateSelected, setDateSelected] = React.useState(dateDefault);
  const [transactions, setTransactions] = React.useState(txns);

  const sort = () => setTransactions([ ...transactions.sort( (prev, curr) =>  prev.amount - curr.amount) ]);

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input 
          id="date" 
          type="date" 
          defaultValue={dateDefault} 
          value={dateSelected} 
          onChange={ e  => setDateSelected(e.target.value)} 
        />
        <button onClick={() => setTransactions([...txns.filter(({date}) => date === dateSelected)]) } className="small">Filter</button>
      </section>

      <div className="card mt-50">
          <table className="table">
              <thead>
              <tr className="table">
                  <th className="table-header">Date</th>
                  <th className="table-header">Description</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">
                      <span id="amount" onClick={sort}>Amount ($)</span>
                  </th>
                  <th className="table-header">Available Balance</th>
              </tr>
              </thead>
              <tbody>
                {
                  transactions.map( ({date, description, type, amount, balance}) => 
                    <tr key={description}>
                        <td>{date}</td>
                        <td>{description}</td>
                        <td>{type === 1 ? "Debit" : "Credit"}</td>
                        <td>{amount}</td>
                        <td>{balance}</td>
                    </tr>
                  ) 
                }
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default TransactionTable;
