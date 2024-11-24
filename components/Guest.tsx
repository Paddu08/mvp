import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
    return (  <div>

        <h1>welcome</h1>
        <p> sign  in to manage transactions</p>
        <SignInButton/>
    </div>);
}
 
export default Guest;