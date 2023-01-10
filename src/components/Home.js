import {useState} from "react";

export const Home = () => {
    const [name, setName] = useState('mario'),
        [age, setAge] = useState(25)

    const handleClick = () => {
        name === 'mario' ? setName('ryu') : setName('mario');
        age === 25 ? setAge(20) : setAge(25);
    }

    return (
        <div>
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Change name</button>
        </div>
    );
};