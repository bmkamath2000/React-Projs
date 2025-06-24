const DynamicComponent=function(props){
    return(
        <div style={{border:'3px solid red'}}>
            <h1>{props.itemId})</h1><br/>
            <h6>{props.title}</h6><br/>
            <h6>{props.content}</h6>
        </div>
    );
}
export default DynamicComponent;