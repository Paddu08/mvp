import {Transaction} from '@/types/transaction'
import getTransaction from '@/actions/getTransaction';
import TransactionItem from './TransactionItem';
 const TransactionList =async () => {
    const {transactions,error}= await getTransaction()
    return ( <>
    <h3>History</h3>
    <ul>
        {transactions &&  transactions.map((transaction:Transaction)=>(
           <TransactionItem key={transaction.id} transaction={transaction}/>
        ))}
    </ul>
    </> );
 }
  
 export default TransactionList;