class Settings:
	def __init__(self):
		self.difficulty = 1
		self.options = {"plus": True, "minus": False, "multiply": False, "divide": False}


	def set_difficulty(self, difficulty):
		self.difficulty = difficulty

	def set_option(self, option, value):
		self.options[option] = value

	def get_difficulty(self):
		return self.difficulty

	def get_options(self):
		return self.options

