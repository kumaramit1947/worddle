const Row = ({ guess, currentGuess }) => {
    if (guess) {
        return(
            <div className="row">
                {
                    guess.map((l,i)=>{
                        return(
                            <div key={i} className={`box ${l.color}`} >{l.key}</div>
                        );
                    })
                }
            </div>
        );
    }
    if (currentGuess){
        let currLetters=currentGuess.split("");
        return (
            <div className="row">
                {
                    currLetters.map((l,i)=>{
                        return(
                            <div className="box current" key={i}>{l}</div>
                        );
                    })
                }
                {
                    [...Array(5-currLetters.length)].map((val,i)=>{
                        return(
                            <div className="box" key={currLetters.length+i}></div>
                        );
                    })
                }
            </div>
        );
    }
    return (
        <div className="row">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </div>
    );

}
export default Row;