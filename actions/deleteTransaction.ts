'use server'
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { error } from "console"
import { revalidatePath } from "next/cache";


async function deleteTransaction(transactionId:string) : Promise <{
     message?:string;
    error?:string 
}>
{
    const {userId} =await auth() 

if (!userId){
    return {error:'no user '}
}
try {
   await db.transaction.delete({
    where:{
        id:transactionId,
        userId

    }
   })
   revalidatePath('/')
   return {message:'transaction deleted'}
} catch (error) {
    return {error:'db problems'}
    
}
}

export default deleteTransaction