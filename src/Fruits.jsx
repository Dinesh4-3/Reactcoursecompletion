function Fruits(props){

 const itemlist = props.items
 const category = props.category

   const renderedfruits= itemlist.map(item=><li key = {item.keys}>{item.name}</li>)

    return(
        <div>
            <h2>{category}</h2>
            <ol>
            {renderedfruits}

            </ol>

        </div>
    )
}
export default Fruits