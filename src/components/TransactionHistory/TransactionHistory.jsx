import transactions from './transactions';
import cl from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={cl.transactions}>
      <thead className={cl.tableHead}>
        <tr>
          <th className={cl.tableHeading}>Type</th>
          <th className={cl.tableHeading}>Amount</th>
          <th className={cl.tableHeading}>Currency</th>
        </tr>
      </thead>

      <tbody className={cl.tableBody}>
        {transactions.map(({ id, type, amount, currency }) => {
          console.log(id);
          return (
            <tr key={id} className={cl.tableRow}>
              <td className={cl.tableData}> {type}</td>
              <td className={cl.tableData}> {amount}</td>
              <td className={cl.tableData}> {currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
