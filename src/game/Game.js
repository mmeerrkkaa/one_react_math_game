import {Settings} from "./Settings.js";
import {Stats} from "./Stats.js";
import {Log} from "./Log.js";


    class Game {
    constructor() {
        this.setting = new Settings();
        this.stats = new Stats();
        this.log = new Log();

        this.current_example = this.setExample()
    }

    setExample() {
        let dif = this.setting.getDifficulty()
        return [this.generateExample(dif), this.generateExample(dif), this.generateOperators(this.setting.getOptions())]
    }


    generateExample(difficulty) {
        return Math.floor(Math.random() * (difficulty * 5));
    }

    generateOperators(options) {
        // {"plus": true, "minus": false, "multiply": false, "divide": false}
        // Добавляем в массив знаки  которые включены и рандомим знак
        let operators = [];
        for (let key in options) {
            if (options[key]) {
                operators.push(key);
            }
        }
        return operators[Math.floor(Math.random() * operators.length)];
    }

    checkAnswer(answer) {
        const OPERATORS = {
            "plus": "+",
            "minus": "-",
            "multiply": "*",
            "divide": "/"
        }
        this.stats.addGame()
        let result = eval(this.current_example[0] + OPERATORS[this.current_example[2]] + this.current_example[1]);
        if (answer === result) {
            this.stats.addWin();

            this.log.addLog(this.current_example, true, result, result, this.setting.getDifficulty());
            return true;
        }
        this.stats.addLoss();
        this.log.addLog(this.current_example, false, result, result, this.setting.getDifficulty());
        return false;

    }
}


export default Game;
