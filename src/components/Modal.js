const Modal = ({solution, turn, isCorrect}) =>{
    if(isCorrect){
        return(
            <div id="modal">
                <div className="modalBox">
                    <div className="win">You win!</div>
                    <div className="solution">{solution}</div>
                    <div className="turns">Number of guesses: {turn}</div>
                </div>
            </div>
        );
    }
    return(
        <div id="modal">
            <div className="modalBox">
                <div className="lose">You lose!</div>
                <div className="solution">{solution}</div>
                <div className="turns">Number of guesses: {turn}</div>
            </div>
        </div>
    );
    
}
export default Modal;