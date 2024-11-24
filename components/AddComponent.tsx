"use client"
import AddTransaction from "@/actions/addTransaction"
import { useRef } from "react"

const AddComponent = () => {
    const formRef=useRef<HTMLFormElement>(null)
const clientAction= async (formData:FormData)=>{
const {data,error}= await AddTransaction(formData)
if(error){
    alert(error)

}
else{
    alert('transaction added')
    console.log(data )
    formRef.current?.reset();
}
}

    return (  <>
    <h3>Add transactions    </h3>
    <form ref={formRef}action={clientAction}>
        <div  className="form-control">
            <label>Text</label>
            <input type='text' id='text' name='text' placeholder="Enter Text" ></input>

            <label>Amount</label>
            <input type='number'  id='amount' name='amount' placeholder="Enter amount " step="0.01"></input>
        <button className="btn" >Add transaction</button>
        </div>
    </form>
    </>);
}
 
export default AddComponent;