import './Student.css'; // Import the custom CSS file
function Student(props){
    // if (props.age>15){
    //     return <p>Hello gentleman { props.name}</p>
    // }
    // else{
    //     return <p>Pls become a adult {props.name}</p>
    // }
    
return(
    
    <div className="Student">
        
        <h3>Student Name: {props.name}</h3>
        <p>age: {props.age}</p>
        <p>Hobby: {props.hobby}</p>
    </div>
)
}
export default Student