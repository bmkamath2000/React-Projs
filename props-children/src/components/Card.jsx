import ChildComponent from './ChildComponent.jsx';
const Card=(props)=>{
    return (
        <div>
            <ChildComponent {...props}/>
        </div>
    )
}

export default Card