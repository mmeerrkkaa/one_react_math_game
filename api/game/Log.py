

class Log:
	def __init__(self):
		self.log = {}

	def addLog(self, example, correct, result, time, difficulty):
		self.log[len(self.log) + 1 if len(self.log) == 0 else 1] = {
			"example": example,
			"correct": correct,
			"result": result,
			"time": time,
			"difficulty": difficulty
		}

	def getLog(self):
		return self.log
