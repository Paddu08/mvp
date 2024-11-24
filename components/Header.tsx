import { checkUser } from "@/lib/checkUser";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

const Header =  async () => {
    const user= await checkUser()
    return (  
        <nav className="navbar">
            <h2>Expense Tracker</h2>
            <div>
                <SignedOut><SignInButton/></SignedOut>
                <SignedIn><UserButton/></SignedIn>
            </div>
        </nav>
    );
}
 
export default Header;