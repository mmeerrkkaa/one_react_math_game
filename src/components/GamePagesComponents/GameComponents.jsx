import React, {useEffect, useState} from 'react';
import Alert from "react-bootstrap/Alert";
import SendAnswer from "./SendAnswer";

const GameComponents = ( {timers, stopTimers, resetTimers} ) => {

    const getExample = () => {
        fetch('/currentExample').then(response => response.json()).then(data => {
                console.log(data);
                setCurrentExample(data['currentExample'])
            }
        );
    }


    const [currentExample, setCurrentExample] = useState([1,1,"+"]);
    const [serverData, setServerData] = useState({"message": 0, 'result': 0});
    const [answer, setAnswer] = useState();
    const [timer, setTimer] = useState(0);
    const [stopTimer, setStopTimer] = useState(false);
    const [resetTimer, setResetTimer] = useState(false);

    useEffect(() => {
        stopTimers(stopTimer)
    }, [stopTimer])

    useEffect(() => {
        resetTimers(resetTimer)
    }, [resetTimer])


    let OPERATORS = {"plus": "+", "minus": "-", "multiply": "*", "divide": "/"};

    const [show, setShow] = useState(false);

    useEffect(() => {
            setResetTimer(!resetTimer);
            getExample();
        }
        , [serverData]);

    useEffect(() => {
        setTimer(timers);
    }, [timers]);

    useEffect(() => {
        if (typeof(serverData['message']) === 'string') {
            setStopTimer(true);
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 3000)
            setAnswer("")
            setStopTimer(false);


        }

    }, [serverData])


    return (
        <div>
            <>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Задачка</h5>
                                    <p className="card-text">
                                        <p>{currentExample[0]} {OPERATORS[currentExample[2]]} {currentExample[1]}</p>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Введите ответ</label>
                                                    <input type="number" minLength='1' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите ответ" value={answer} onInput={(e) => setAnswer(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{marginTop: '5px'}}>
                                            <SendAnswer answers={answer} timers={timer} getServerData={(ServerData) => setServerData(ServerData)}/>
                                        </div>

                                        {show &&
                                            <div>
                                                <br></br>
                                                <Alert show={show} variant={serverData['result'] === true ? "success" : "danger"}>
                                                    <Alert.Heading>{serverData['message']}</Alert.Heading>
                                                    {serverData['result'] !== true &&
                                                        <>
                                                            <hr></hr>
                                                            <p>Правильный ответ: {serverData['result']}</p>
                                                        </>
                                                    }

                                                </Alert>
                                            </div>
                                        }

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default GameComponents;