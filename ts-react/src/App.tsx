import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"

function App() {
    return (
        <>
            <Heading title={"Hello World"} />
            <Section title={"My Subheading"}>
                This is my section content.
            </Section>
            <Counter />
        </>
    )
}

export default App
