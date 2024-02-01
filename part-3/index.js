const App = () => (
    <div>
        <Person
        name="Alex"
        age={36}
        hobbies={['Gaming', 'Cooking', 'Hiking']}
        />
        <Person
        name="Danielle"
        age={35}
        hobbies={['Crafts', 'Board Games', 'Being cool']}
        />
        <Person
        name="Tiberius"
        age={12}
        hobbies={['Snoozing', 'Eating', 'Meowing']}
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))