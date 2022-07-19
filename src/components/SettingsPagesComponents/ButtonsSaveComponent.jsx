import React, {useEffect, useState} from 'react';

const ButtonsSaveComponent = ( {settings} ) => {

    const [difficulty, setDifficulty] = useState();
    const [operators, setOperators] = useState();

    useEffect(() => {
        setDifficulty(settings.difficulty);
        setOperators(settings.operators);
    }, [settings.difficulty, settings.operators]);

    const ClickButton = (e) => {
        fetch('/saveSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                difficulty: difficulty,
                operators: operators
            })
        }).then(response => response.json()).then(data => {
            console.log(data);
            // Поменять цвет кнопки
            e.target.style.backgroundColor = '#00ff00';
            setTimeout(() => {
                e.target.style.backgroundColor = '#0d6efd';
            }, 500)
        }
        );
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <button onClick={(e) => ClickButton(e)} type="submit" className="btn btn-primary btn" id='saveSettings'>Сохранить</button>
                </div>
            </div>
        </div>
    );
};

export default ButtonsSaveComponent;