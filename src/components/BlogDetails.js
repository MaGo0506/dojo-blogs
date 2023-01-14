import {useParams} from "react-router-dom";
import {useFetch} from "../useFetch";

export const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, isPending, error} = useFetch(`http://localhost:5000/blogs/${id}`)

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h4>Written by: {blog.author}</h4>
                    <p>{blog.body}</p>

                </article>
            )}
        </div>
    );
};