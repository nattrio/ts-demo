import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"

import { useState } from "react"

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Heading title={"Hello World"} />
            <Section title={"My Subheading"}>
                This is my section content.
            </Section>
            <Counter setCount={setCount} />
            Count is {count}
            <Counter />
        </>
    )
}

export default App
