import { useState, useEffect } from "react";
import useWordle from "../hooks/useWordle.js";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";
const Wordle = ({solution}) =>{
    const {currentGuess, turn, isCorrect, guesses, keyColor, handleKeyup} = useWordle(solution);
    const [isModalNeeded, setIsModalNeeded] = useState(false);

    useEffect(()=>{
        window.addEventListener('keyup', handleKeyup);
        if(isCorrect){
            setTimeout(()=>{
                setIsModalNeeded(true);
            },2000);
            window.removeEventListener('keyup',handleKeyup);
        }
        if(turn>5){
            setTimeout(()=>{
                setIsModalNeeded(true);
            },2000);
            window.removeEventListener('keyup',handleKeyup);
        }
        return ()=>{window.removeEventListener('keyup',handleKeyup)};
    },[handleKeyup,isCorrect,turn]);


    return(
        <div id="content">
            <Grid guesses={guesses} currentGuess={currentGuess} turn ={turn}/>
            <Keypad keyColor={keyColor} />
            {isModalNeeded && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </div>
    );
}
export default Wordle;