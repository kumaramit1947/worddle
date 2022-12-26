import { useEffect, useState } from "react";
const Keypad = ({keyColor}) => {
    const [letters, setLetters] = useState(null);
    useEffect(() => {
        let url = "http://localhost:8000/letters";
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                return setLetters(data);
            });
    },[]);
    return (
        <div id="keypad">
            {letters && letters.map((l, i) => {
                let classStr="keyBox ";
                classStr+=keyColor[l.key.charCodeAt(0)-97] ? keyColor[l.key.charCodeAt(0)-97] : "pinkBackground";
                return (
                    <div className={classStr} key={i}>{l.key}</div>
                );
            })}
        </div>

    );
}
export default Keypad;