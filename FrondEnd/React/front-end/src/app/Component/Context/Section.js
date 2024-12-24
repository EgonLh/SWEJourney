import Heading from "./Heading";

export default function Section({ level }) {
    console.log("Rendering Section")
    return (
        <section className="section">
            <Heading >Heading With Level</Heading>
        </section>
    );
}
