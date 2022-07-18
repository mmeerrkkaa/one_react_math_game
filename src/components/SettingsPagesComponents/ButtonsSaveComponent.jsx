import React, {useEffect, useState} from 'react';

const ButtonsSaveComponent = ( {settings} ) => {

    const [difficulty, setDifficulty] = useState();
    const [operators, setOperators] = useState();

    useEffect(() => {
        setDifficulty(settings.difficulty);
        setOperators(settings.operators);
    }, [settings.difficulty, settings.operators]);

    const ClickButton = () => {
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
        }
        );
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <button onClick={ClickButton} type="submit" className="btn btn-primary">Сохранить</button>
                </div>
            </div>
        </div>
    );
};

export default ButtonsSaveComponent;