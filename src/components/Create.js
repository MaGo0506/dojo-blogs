import {useState} from "react";

export const Create = () => {
    const [title, setTitle] = useState(''),
        [body, setBody] = useState(''),
        [selectedOption, setSelectedOption] = useState('mario')

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
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="ryu">Ryu</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{selectedOption}</p>
            </form>
        </div>
    );
};