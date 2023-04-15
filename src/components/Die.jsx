export default function Die(props){
    return(
        <div className="die_container">
            <h3 className="die" style={{backgroundColor: props.isHeld && '#59E391'}}>{props.value}</h3>
        </div>
    )
}