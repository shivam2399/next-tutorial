import { useRouter } from "next/router"

const Developer = () => {
    const router = useRouter()

    const details = [
        { id : 1, name: 'Yash', role: 'Senior Developer'},
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    ]

    const devId = parseInt(router.query.devId) - 1;
    const developer = details[devId];

    if(!developer) {
        return <h1>Developer not found</h1>
    }

    return (
        <>
            <h1>{developer.name} is a {developer.role}</h1>
        </>
    )
}

export default Developer