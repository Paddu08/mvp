'use client'
import { Transaction } from "@/types/transaction";
import deleteTransaction from "@/actions/deleteTransaction";

const TransactionItem = ({transaction}:{transaction:Transaction}) => {

    const handledeleteTransaction= async (transactionId:string)=>{
        const confirmed =window.confirm('do you want to delete this transaction')
        if (!confirmed) return
       const {message,error}= await deleteTransaction(transactionId)
    }
    return (<li>
        {transaction.text}  
        <span  className="amount">{transaction.amount}</span>
        <button onClick={()=>handledeleteTransaction(transaction.id)}>Delete</button>
    </li>  );
}
 
export default TransactionItem;