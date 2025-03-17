function Card({ele}){
    return(
        <div style={{border:"1px solid black",margin:"10px"}}>
            <h2>{ele.userId}</h2>
            <h2>Title: {ele.title}</h2>
            <h3>Body: {ele.body}</h3>
        </div>
    )
    }
    
    export default Card