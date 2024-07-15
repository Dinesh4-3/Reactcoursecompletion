import React,{useState} from 'react';
function State(){

    const [name,setname] = useState("Guest")
    const [count,setcount] = useState(0)
    const [isemployee,setemployee] = useState(false)

    const updatename = () =>{
        setname("Dinesh")

    }
    const updatecount = () =>{
        setcount(count+1)
    }
    const updateemployee = () =>{
        setemployee(!isemployee)
    }
   
    const [counts, setcounts] = useState(0)

    const updateincrement = () =>{
        setcounts(counts + 1)
    }
    const updatedecrement = () =>{
        setcounts(counts - 1)
    }
    const updatereset=() =>{
        setcounts(0)
    }


return(
    <div className="v">
        <h2 onClick={updatename}>name is : {name}</h2>
        <h2 onClick={updatecount}>count is : {count}</h2>
        <h2 onClick={updateemployee}>True or false is : {isemployee?"yes":"no"}</h2>
         <div className="counter">
            <span>
                <button onClick={updateincrement}>increment</button>
                <h3>{counts}</h3>
                <button onClick={updatedecrement}>decrement</button>
                <button onClick = {updatereset}>reset</button>


            </span>
         </div>


    </div>
)
}
export default State