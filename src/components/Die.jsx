export default function Die(props){
    return(
        <main className="die_container">
            <div className="die">{props.value}</div>
            <div className="die">{props.value}</div>
            <div className="die">{props.value}</div>
            <div className="die">{props.value}</div>
            <div className="die">{props.value}</div>
            <div className="die">{props.value}</div>
        </main>
    )
}