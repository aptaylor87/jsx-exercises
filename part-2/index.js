const App = () => (
    <div>
        <Tweet 
        name="Alex Taylor"
        username="Flex"
        date={new Date().toDateString()}
        message="I'm writing React components"
         />
        <Tweet 
        name="Tiberius Taylor"
        username="TribbleBaby"
        date={new Date().toDateString()}
        message="Cats don't tweet"
        />
        <Tweet 
        name="Danielle Taylor"
        username="D-day"
        date={new Date().toDateString()}
        message="tweet tweet tweet"
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
