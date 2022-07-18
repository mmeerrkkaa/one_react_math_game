

class Stats:
	def __init__(self):
		self.games = 0
		self.wins = 0
		self.losses = 0

	def getGames(self):
		return self.games

	def getWins(self):
		return self.wins

	def getLosses(self):
		return self.losses

	def addGame(self):
		self.games += 1

	def addWin(self):
		self.wins += 1

	def addLoss(self):
		self.losses += 1

	def getWinRate(self):
		return self.wins / self.games