import { useEffect } from "react";
import { useStore } from "../../store/useStore";



export const AdminUsers = () => {
    const getAuthors = useStore((state) => state.getAuthors)
    const authors = useStore((state) => state.authors)
    const error = useStore((state) => state.error)
    const loading = useStore((state) => state.loading)



    useEffect(() => {
        getAuthors().then()
    }, [getAuthors])

    if (loading) {
        return <p>Loading ...</p>
    }


    return (
        <div className="container">
            <h1>Admin users</h1>
            <h5>Authors:</h5>
            {error && <p>{error}</p>}
            {authors.map((author) => (
                <li key={author.id}>{author.last_name}</li>
            ))}
        </div>
    );
};

