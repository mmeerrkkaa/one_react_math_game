import React, {useEffect, useMemo, useState} from 'react';

const OperatorsCheckBoxesComponent = ({updateDataOperators} ) => {
    const SetOperatorsGetServer = () => {
        fetch('/getOperators').then(response => response.json()).then(data => {
                setOperators({"plus": data['plus'], "minus": data['minus'], "multiply": data['multiply'], "divide": data['divide']})
            }
        );
    }

    const [operators, setOperators] = useState({"plus": false, "minus": false, "multiply": false, "divide": false});

    useEffect(() => {
        SetOperatorsGetServer();
    }, [])

    useEffect(() => {
        updateDataOperators(operators);
    }, [operators])

    const handleChange = (event) => {
        const {id, checked} = event.target;
        if (checked) {
            setOperators({...operators, [id]: true});
        } else {
            setOperators({...operators, [id]: false});
        }
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <label htmlFor="difficulty">Какие задачи будут?</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="plus" checked={operators['plus']} onChange={(e) => handleChange(e)} />
                        <label className="form-check-label" htmlFor="task1">
                            Плюс
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="minus" checked={operators['minus']} onChange={(e) => handleChange(e)} />
                        <label className="form-check-label" htmlFor="task2">
                            Минус
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="multiply" checked={operators['multiply']} onChange={(e) => handleChange(e)} />
                        <label className="form-check-label" htmlFor="task3">
                            Умножение
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="divide" checked={operators['divide']} onChange={(e) => handleChange(e)} />
                        <label className="form-check-label" htmlFor="task4">
                            Деление
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OperatorsCheckBoxesComponent;