import React, {useEffect, useState} from 'react';

const ResultPages = () => {

    const LogsGetServer = () => {
        fetch('/getLogs').then(response => response.json()).then(data => {
                setLogs(data['logs'])
            }
        );
    }


    const [logs, setLogs] = useState({});
    /* log[len(log) + 1 if len(self.log) != 0 else 1] = {
			"example": example,
			"correct": correct,
			"result": result,
			"time": time,
			"difficulty": difficulty
		}


       {logs.map((log, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{log.example}</td>
                                            <td>{log.correct}</td>
                                            <td>{log.result}</td>
                                            <td>{log.time}</td>
                                            <td>{log.difficulty}</td>
                                        </tr>
                                    )
                                }
                                )}
     */

    useEffect(() => {
        LogsGetServer();
        console.log(logs, 1);
    }, []);


    const returnCard = (log) => {
        const OPERATORS = {"plus": "+", "minus": "-", "multiply": "*", "divide": "/"};
        let result = eval(`${log.example[0]} ${OPERATORS[log.example[2]]} ${log.example[1]}`);

        return (
            <tr key={log.id}>
                <td>{log.example[0]} {OPERATORS[log.example[2]]} {log.example[1]}</td>
                <td>{log.answer}</td>
                <td>{log.result}</td>
                <td>{log.time}</td>
                <td>{log.difficulty}</td>
                {log.answer == log.result ? <td><img src="https://img.icons8.com/color/48/000000/checkmark.png"/></td> : <td><img src="https://img.icons8.com/color/48/000000/delete-sign.png"/></td>}
            </tr>
        )
    }

    const returnLogs = () => {
        let cards = []
        for (const [key, value] of Object.entries(logs)) {
            cards.push(returnCard(value))
        }
        return cards
    }




    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Выражение</th>
                                <th>Правильный ответ</th>
                                <th>Ваш ответ</th>
                                <th>Время</th>
                                <th>Сложность</th>
                                <th>Результат</th>
                            </tr>
                            </thead>
                            <tbody>
                            {returnLogs()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ResultPages;