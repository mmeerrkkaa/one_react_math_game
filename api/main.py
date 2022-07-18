import time
from flask import Flask, json, request

from game.Game import Game

app = Flask(__name__)

game = Game()


@app.route('/currentExample')
def get_current():
    return json.dumps({'currentExample': game.current_example})


@app.route('/getDifficulty')
def get_difficulty():
    return json.dumps({'difficulty': game.settings.difficulty})


@app.route('/getInfo')
def get_game():
    return json.dumps({'games': game.stats.games, 'wins': game.stats.wins, 'losses': game.stats.losses})


@app.route('/getOperators')
def get_operators():
    operators = game.settings.get_options()

    return json.dumps({'plus': operators['plus'], 'minus': operators['minus'], 'multiply': operators['multiply'], 'divide': operators['divide']})


@app.route('/saveSettings', methods=['POST'])
def save_settings():
    data = request.get_json()
    game.settings.set_difficulty(data['difficulty'])

    data = data['operators']
    game.settings.set_option('plus', data['plus'])
    game.settings.set_option('minus', data['minus'])
    game.settings.set_option('multiply', data['multiply'])
    game.settings.set_option('divide', data['divide'])
    game.setExample()
    print(game.current_example)


    return json.dumps({'success': True})


@app.route('/sendAnswer', methods=['POST'])
def send_answer():
    data = request.get_json()

    answer = data['answer']
    if answer == "":
        answer = 0
    else:
        answer = int(answer)

    timer = int(data['timer'])

    checkanswer = game.checkanswer(answer)
    game.setExample()
    game.log.addLog(game.current_example, True if checkanswer else False, checkanswer, timer, game.settings.difficulty)
    if checkanswer == True:
        return json.dumps({'result': True, 'message': "Правильный ответ!"})
    else:
        return json.dumps({'result': checkanswer, 'message': "Неправильный ответ!"})



