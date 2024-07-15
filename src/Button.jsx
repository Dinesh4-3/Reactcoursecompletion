function Button(){
    let count = 0
    const buttons = (name) => {
        if (count<3){
            count++
            console.log(
                "click me",count)
        }
        else{
            console.log('Stop that shit')
        }
    }

    return(
        <div className="">
            <button onClick={()=>buttons("bro")}>Click me</button>

        </div>
    )
}
export default Button