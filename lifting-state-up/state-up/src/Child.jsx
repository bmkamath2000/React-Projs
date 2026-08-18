
function Child(props){
    const greet = "Good Morning from Child Component";
    return(
        <div>
            <h1>Child Component</h1>
            <button onClick={()=>{props.func(greet)}}>Great Parent</button>
        </div>
    )
}
export default Child