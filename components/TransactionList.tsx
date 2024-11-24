import {Transaction} from '@/types/transaction'
import getTransaction from '@/actions/getTransaction';
 const TransactionList =async () => {
    const {transactions,error}= await getTransaction()
    return ( <>
    <h3>History</h3>
    <ul>
        {transactions &&  transactions.map((transaction:Transaction)=>(
            <p>{transaction.text}</p>
        ))}
    </ul>
    </> );
 }
  
 export default TransactionList;