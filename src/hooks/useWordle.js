import { useState } from "react";
const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [keyColor, setKeyColor] = useState([...Array(26)]);

    const formatGuess = () => {
        const solutionArr=[...solution];
        const formatedGuess=[...currentGuess].map((l)=>{
            return {key: l, color: "grey"};
        });
        formatedGuess.forEach((l,i)=>{
            if(solutionArr[i] === l.key){
                l.color="green";
                solutionArr[i]=null;
            }
        });
        formatedGuess.forEach((l,i)=>{
            if(l.color !== "green" && solutionArr.includes(l.key)){
                l.color="yellow";
                solutionArr[solutionArr.indexOf(l.key)]=null;
            }
        });
        return formatedGuess;
        
    }
    const keypadColorChange = (formatedGuess) =>{
        let newKeyColor = [...keyColor];
        formatedGuess.forEach((l)=>{
            if(!newKeyColor[l.key.charCodeAt(0)-97]) {
                newKeyColor[l.key.charCodeAt(0)-97]=l.color;
            }
            else if(l.color === 'green') {
                newKeyColor[l.key.charCodeAt(0)-97] = 'green';
            }
        });
        setKeyColor(newKeyColor);
    }
    const addNewGuess = (formatedGuess) => {
        if(currentGuess === solution){
            setIsCorrect(true);
        }
        setGuesses((prev)=>{
            let newGuess=[...prev];
            newGuess[turn]=formatedGuess;
            return newGuess;
        });
        setHistory((prev)=>{
            return [...prev,currentGuess];
        });
        setCurrentGuess("");
        setTurn(turn+1);

    }

    const handleKeyup = ({ key }) => {
        if (key === 'Enter') {
            if (turn > 5) {
                return;
            }
            if (currentGuess.length < 5) {
                return;
            }
            if (history.includes(currentGuess)) {
                console.log("This word is already tried...");
                return;
            }

            const formatedGuess=formatGuess();
            keypadColorChange(formatedGuess);
            addNewGuess(formatedGuess);
            return;
        }
        if (key === 'Backspace') {
            setCurrentGuess(currentGuess.slice(0, -1));
            return;
        }
        if (/^[a-zA-Z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(currentGuess + key);
            }
        }
    }

    return { turn, currentGuess, guesses, isCorrect, keyColor, handleKeyup };
}
export default useWordle;