import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";
import Balance from "@/components/Balance";

import AddComponent from "@/components/AddComponent";
import TransactionList from "@/components/TransactionList";
const Home =  async() => {
  const user= await currentUser()

  if (!user){
    return <Guest/>
  }
  return (  
    <main>
      <h1>expense tracker</h1>
<Balance/>

      <h1> {user?.lastName}</h1>
      <AddComponent/>
      <TransactionList/>
    </main>

  );
}
 
export default Home;