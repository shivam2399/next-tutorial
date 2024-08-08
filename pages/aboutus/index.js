import Link from "next/link";

const AboutUs = () => {
    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' }
    ]
    return (
        <>
         <h1>Developers List</h1>
         <ul>
            {details.map(dev => (
                <li key={dev.id}>
                    <Link href={`/aboutus/${dev.id}`}>
                      {dev.name}
                    </Link>
                </li>
            ))}
         </ul>
        </>
    )
}

export default AboutUs;