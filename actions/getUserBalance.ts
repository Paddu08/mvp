'use server'
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { error } from "console"


async function getUserBalance() : Promise <{
    balance?:number
    error?:string 
}>
{
    const {userId} =await auth() 

if (!userId){
    return {error:'no user '}
}
try {
    const transactions=await db.transaction.findMany({
        where:{userId},
    })

    const balance=transactions.reduce((sum,transaction)=>sum+transaction.amount,0)
    return {balance}
} catch (error) {
    return {error:'db problems'}
    
}
}

export default getUserBalance