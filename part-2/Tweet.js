const Tweet = ({username,name,date,message})=> (
    <div className="tweet">
        <div className="header">
            <h3>{name} </h3>
             <a href="nowhere"><small>@{username}</small></a>
        </div>
        <p>{message}</p>
        <div className="footer">
            <small>Posted {date}</small>
        </div>
        
    </div>
)