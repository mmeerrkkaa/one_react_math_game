import React, {useEffect, useState} from 'react';

const TimerPages = ( { updateTime, stopTimer, resetTimers}) => {

    const [timer, setTimer] = useState(0);
    const [resetTimer, setResetTimer] = useState(false);

    const addTimer = () => {
        setTimer(timer + 1);
    }

    useEffect(() => {
        setResetTimer(true);
        setTimer(0)
    }, [resetTimers])


    useEffect(() => {
        setInterval(() => {
            addTimer()
        }
        , 1000)}, [timer])


    useEffect(() => {
        updateTime(timer);
    }, [timer])




    return (
        <h5 className='card-title'>Время игры: {timer}</h5>
    );
};

export default TimerPages;