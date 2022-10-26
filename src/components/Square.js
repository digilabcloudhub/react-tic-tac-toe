

const Square =(props) =>{
    
   
    return(
        <>
            <button className="btn" onClick={()=>props.saveData()}>{props.value}</button>
        </>
    )
}

export default Square;