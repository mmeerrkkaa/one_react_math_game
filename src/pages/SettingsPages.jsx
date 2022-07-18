import React, {useState} from 'react';
import DifficultyComponent from "../components/SettingsPagesComponents/DifficultyComponent";
import OperatorsCheckBoxesComponent from "../components/SettingsPagesComponents/OperatorsCheckBoxesComponent";
import ButtonsSaveComponent from "../components/SettingsPagesComponents/ButtonsSaveComponent";

const SettingsPages = () => {

    const [difficulty, setDifficulty] = useState(0);
    const [operators, setOperators] = useState({"plus": true, "minus": true, "multiply": true, "divide": true});

    // использовать context для передачи данных между компонентами


    const updateDataDifficulty = (data) => {
        setDifficulty(data);
    }

    const updateDataOperators = (data) => {
        setOperators(data);
    }

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Настройки игры</h1>
                    </div>
                </div>
                <DifficultyComponent updateDataDifficulty={updateDataDifficulty}/>
                <OperatorsCheckBoxesComponent updateDataOperators={updateDataOperators}/>
                <ButtonsSaveComponent settings={{difficulty, operators}}/>
            </div>
        </div>
    );
};

export default SettingsPages;