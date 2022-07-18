import React, {useEffect, useState} from 'react';

const ResultPages = () => {

    const LogsGetServer = () => {
        fetch('/getLogs').then(response => response.json()).then(data => {
                setLogs(data)
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

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h3>Логи</h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Пример</th>
                                    <th>Правильный ответ</th>
                                    <th>Ваш ответ</th>
                                    <th>Время</th>
                                    <th>Сложность</th>
                                </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResultPages;