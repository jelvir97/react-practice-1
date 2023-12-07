const App = ()=>(
    <div>
        <Person name="juan" age="26" hobbies={['jumping rope','programming','kicking cans']}/>
        <Person name="sam" age="24" hobbies={['reading','being cute','publicly shaming children']}/>
        <Person name="andy" age="17" hobbies={['skiing','meme-ing','doing things that you can not do']}/>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))