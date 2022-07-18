import React, {useEffect, useState} from 'react';
import TimerComponents from "../TimerComponents";

const InformationZone = ({ updateTimer, stopTimers, resetTimers}) => {

    const getInfo = () => {
        fetch('/getInfo').then(response => response.json()).then(data => {
            setGames(data['games'])
            setWins(data['wins'])
            setLosses(data['losses'])
        }
        );
    }

    const [games, setGames] = useState(-1);
    const [wins, setWins] = useState(-1);
    const [losses, setLosses] = useState(-1);
    const [timer, setTimer] = useState(1);


    useEffect(() => {
        getInfo();
    }, [resetTimers]);


    useEffect(() => {
        updateTimer(timer);
    }
    , [timer])



    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-1'>
                                <h5 className='card-title'>Игры</h5>
                                <p className='card-text'>
                                    {games}
                                </p>
                    </div>
                    <div className='col-sm-1'>
                                <h5 className='card-title'>Победы</h5>
                                <p className='card-text'>
                                    {wins}
                                </p>
                    </div>
                    <div className='col-sm-3'>
                                <h5 className='card-title'>Проигрыши</h5>
                                <p className='card-text'>
                                    {losses}
                                </p>
                    </div>
                    <div className='col-sm-2'>
                        <TimerComponents updateTime={(time) => setTimer(time)} stopTimer={stopTimers} resetTimers={resetTimers}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationZone;