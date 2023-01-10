
export const Home = () => {
    const handleClick = (event) => {
        console.log('hello, ninjas', event.target)
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name + ' ' + e.target)
    }

    return (
        <div>
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
        </div>
    );
};