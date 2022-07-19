import random

from game import Settings
from game import Stats
from game import Log

class Game:
	def __init__(self):
		self.settings = Settings.Settings()
		self.stats = Stats.Stats()
		self.log = Log.Log()

		self.current_example = []
		self.setExample()

	def setExample(self):
		dif = self.settings.difficulty
		self.current_example = [self.generateExample(dif), self.generateExample(dif), self.generateOperators(self.settings.get_options())]

	def generateExample(self, difficulty):
		return random.randint(1, int(difficulty) * 5)

	def generateOperators(self, options):
		operators = []
		for option in options:
			if options[option]:
				operators.append(option)
		return random.choice(operators)

	def checkanswer(self, answer, time):
		OPERATORS = {
            "plus": "+",
            "minus": "-",
            "multiply": "*",
            "divide": "/"
        }

		result = eval(str(self.current_example[0]) + str(OPERATORS[self.current_example[2]]) + str(self.current_example[1]))

		self.stats.addGame()
		self.log.addLog(self.current_example, answer, result, time, self.settings.difficulty)
		if answer == float(result):
			self.stats.addWin()
			return True
		else:
			self.stats.addLoss()
			return result

