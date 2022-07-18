import React, {useState} from 'react';
import InformationZone from "../components/GamePagesComponents/infoZone/InformationZone";
import GameComponents from "../components/GamePagesComponents/GameComponents";



const GamePages = () => {

    const [timer, setTimer] = useState(0);
    const [stopTimer, setStopTimer] = useState(false);
    const [resetTimer, setResetTimer] = useState(false);

    return (
        <div className="container">
            <InformationZone updateTimer={(time) => setTimer(time)} stopTimers={stopTimer} resetTimers={resetTimer}/>
            <br></br>
            <GameComponents timers={timer} stopTimers={(isStop) => setStopTimer(isStop)} resetTimers={(edits) => setResetTimer(edits)}/>
        </div>
    );
}

export default GamePages;