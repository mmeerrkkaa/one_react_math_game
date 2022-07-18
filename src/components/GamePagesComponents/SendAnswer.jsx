import React, {useEffect, useState} from 'react';

const SendAnswer = ( {answers, timers, getServerData} ) => {

    const sendAnswerToServer = () => {
        fetch('/sendAnswer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                answer: answers,
                timer: timers
            })
        }).then(response => response.json()).then(data => {
                console.log(data);
                setServerData(data);
            }
        );
    }


    const [serverData, setServerData] = useState({"message": 0, 'result': 0});

    useEffect(() => {
        getServerData(serverData);
    }, [serverData]);


    return (

            <div className="col-md-12">
                <button type="button" className="btn btn-primary" onClick={sendAnswerToServer}>Отправить</button>
            </div>
    );
};

export default SendAnswer;