import {useHistory, useParams} from "react-router-dom";
import {useFetch} from "../useFetch";

export const BlogDetails = () => {
    const {id} = useParams()
    const history = useHistory()
    const {data: blog, isPending, error} = useFetch(`http://localhost:5000/blogs/${id}`)

    const handleDelete = () => {
        fetch(`http://localhost:5000/blogs/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                history.push('/')
            })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h4>Written by: {blog.author}</h4>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete blog</button>
                </article>
            )}
        </div>
    );
};