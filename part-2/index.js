const App = ()=> (
    <div className="tweetContainer">
            <Tweet name="Juan" username="juanjo" date="12/06/23" message="Hello world!"/>
            <Tweet name="Pablo Neruda" username="pablito" date="09/12/1963" message="I love you as certain dark things are to be loved,
                in secret, between the shadow and the soul." />
            <Tweet name="plato" username="plato" date="360 BC" message="Every heart sings a song, incomplete, until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover, everyone becomes a poet."/>
    </div>

)

ReactDOM.render(<App />, document.getElementById('root'))