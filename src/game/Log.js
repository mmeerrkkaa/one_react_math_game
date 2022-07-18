

export class Log {
    constructor() {
        // {id: 1, example: [5, 5], correct: true, result: 10, time: 10, difficulty: 1}
        this.log = {};

    }

    addLog(example, correct, result, time, difficulty) {
        this.log[Object.keys(this.log).length + 1] = {
            example: example,
            correct: correct,
            result: result,
            time: time,
            difficulty: difficulty
        };
    }

    getLog() {
        return this.log;
    }


}