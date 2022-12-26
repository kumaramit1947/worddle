import Row from "./Row";
const Grid = ({ guesses, currentGuess, turn }) => {
    return (
        <div id="grid">
            {
                guesses.map((g,i) => {
                    if(i === turn) {
                        return (<Row key={i} currentGuess={currentGuess} />)
                    }
                    return (<Row guess={g} key={i}/>);
                })
            }
        </div>
    );
}
export default Grid;