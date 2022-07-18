import React, {useEffect, useState} from 'react';

const DifficultyComponent = ({updateDataDifficulty} ) => {

    const DifficultyGetServer = () => {
        fetch('/getDifficulty').then(response => response.json()).then(data => {
                setDifficulty(data['difficulty'])
                setMaxNumber(data['difficulty'] * 5)
            }
        );
    }


    const [difficulty, setDifficulty] = useState(0);
    const [maxNumber, setMaxNumber] = useState(5);

    useEffect(() => {
        DifficultyGetServer();
    }
    , []);

    useEffect(() => {
        updateDataDifficulty(difficulty);
    }, [difficulty])



    const handleChangeValue = (event) => {
        setMaxNumber(event.target.value * 5);
        setDifficulty(event.target.value);
    }

    return (
        <div className="row">
            <div className='col-md-12'>
                <div className="form-group">
                    <label htmlFor="difficulty">Сложность игры (Максимальное число: {maxNumber})</label>
                    <input type="number" className="form-control" id="difficulty" min="1" value={difficulty} onChange={(e) => handleChangeValue(e)}/>
                </div>
            </div>
        </div>
    );
};

export default DifficultyComponent;