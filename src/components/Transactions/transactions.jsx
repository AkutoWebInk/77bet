import { useState } from "react";
import styles from "./transactions.module.css";


function TransactionCard({ data }) {
  return (
    <section className={styles.TransactionCard}>
      <p>ID: {data.id}</p>
      <p>Amount: {data.amount}</p>
      <p>Status:</p>
    </section>
  );
}



export default function TransactionsHistory() {
  
  const withdrawnData = [
    { id: 1, amount: 100 },
    { id: 1, amount: 100 },
    { id: 1, amount: 100 },
    { id: 1, amount: 100 },
    { id: 1, amount: 100 }
  ];
    const depositData = [
    { id: 3, amount: 200 }
  ];

  const [tab, setTab] = useState("withdrawn");
  const [expanded, setExpanded] = useState(false)


  
  return (
    <section className={styles.component}>

      <div className={styles.buttons}>
        <button onClick={() => setTab("withdrawn")} className={styles.b1}>
          Saques
        </button>

        <button onClick={() => setTab("deposits")} className={styles.b2}>
          Depositos
        </button>
      </div>

      <div className={styles.transactions}>
        {(tab === "withdrawn" ? withdrawnData : depositData).map((tx,i) => (
          <TransactionCard key={`${tab}-${i}`} data={tx} />
        ))}
      </div>
    </section>
  );
}
