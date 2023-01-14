import {useState} from "react";
import {useHistory} from "react-router-dom";

export const Create = () => {
    const [title, setTitle] = useState(''),
        [body, setBody] = useState(''),
        [author, setAuthor] = useState('mario'),
        [isPending, setIsPending] = useState(false)

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        setIsPending(true)

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('New blog added')
                setIsPending(false)
                history.push('/')
            })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="ryu">Ryu</option>
                </select>
                {isPending && <button disabled>Adding Blog..</button>}
                {!isPending && <button onClick={handleSubmit}>Add Blog</button>}
            </form>
        </div>
    );
};