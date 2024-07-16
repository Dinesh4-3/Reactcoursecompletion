import React,{useState} from "react"
function Newcomponent(){

    const [placeholder,setplaceholder] = useState("Type")
    const [number,setnumber] = useState(0)
    const [radio,setradio] = useState('')


    function updateplaceholder(e){
        setplaceholder(e.target.value);
    }
    function updatenumber(e){
        setnumber(e.target.value);
    }
    function updateradio(e){
        setradio(e.target.value);
    }
    return(
        <div className="">
            <input type="text" onChange={updateplaceholder} />
            <p>Name : {placeholder}</p>
            <input type="number" onChange={updatenumber} />
            <p>Number : {number}</p>
            <label htmlFor="">
                  <input type="radio" onChange={updateradio}checked={radio === 
                "pick up"}  value="pick up" name="" id="" />
          Pick up
            </label>
            <label htmlFor="">
                  <input type="radio" onChange={updateradio}checked={radio === 
                "shipping"}  value=" shipping" name="" id="" />
               Shipping          
            </label>
            <label htmlFor="">
                  <input type="radio" onChange={updateradio}checked={radio === 
                "choice"}  value=" choice" name="" id="" />
               choice          
            </label>
            <p>choice : {radio}</p>

        </div>
    )
}export default Newcomponent