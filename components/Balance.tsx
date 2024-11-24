import getUserBalance from "@/actions/getUserBalance";



const Balance = async () => {
    const {balance}= await getUserBalance()

    return (  <>
    <h4>Balance</h4>

    <>{balance}</>
    </>)



    ;
}
 
export default Balance;