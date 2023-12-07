const Person = ({name, age=0, hobbies})=>(
    <div>
        <h2>{name.length > 8 ? name.substring(0,6): name}</h2>
        <p>Learn some information about this person!</p>
        <h3>{age >= 18 ? "Please go vote!": "You must be 18."}</h3>
        <h4>Hobbies</h4>
        <ul>
            {hobbies.map(h => <li>{h}</li>)}
        </ul>
        <hr />
    </div>
)