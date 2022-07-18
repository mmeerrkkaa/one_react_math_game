
// Класс с настройками игры
export class Settings {
    constructor() {
        this.difficulty = 1;
        this.options = {"plus": true, "minus": false, "multiply": false, "divide": false};
    }

    // Установка сложности игры
    setDifficulty(difficulty) {
        this.difficulty = difficulty;
    }

    // Установка опции игры
    setOptions(options_name, value) {
        this.options[options_name] = value;
    }

    // Получение опций игры
    getOptions() {
        return this.options;
    }

    // Получение сложности игры
    getDifficulty() {
        return this.difficulty;
    }
}