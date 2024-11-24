'use server'
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData{
    text: string;
    amount:number
}

interface TransactionResult{
    data?:TransactionData;
    error?:string 
}
 
async function AddTransaction(formData:FormData): 
    Promise<TransactionResult> {
        const textValue=formData.get("text");
        const amountValue=formData.get("amount");
        if (!textValue || textValue=='' || !amountValue){
            return { error: 'text or amount missing'}
        }
        const text:string=textValue.toString()
        const amount:number=parseFloat(amountValue.toString())

        const {userId}= await auth();
        if (!userId){
            return {error:'no user id'}
        }
try {
    const transactionData: TransactionData = await db.transaction.create({
        data:{
            text,
            amount,
            userId

        }
    })
    revalidatePath('/')
    return {data:transactionData }
} catch (error) {
    return {error:'not added'}
    
}
        

    }

    export default AddTransaction

