# Tic-Tac-Toe Game

## Overview

Welcome to the **Tic-Tac-Toe Game**! You can play the Tic-Tac-Toe Game directly on the web. The project is hosted [here](https://shashank-m-n.github.io/Tic-Tac-Toe-Game/). This is an update to my [previous repository](https://github.com/Shashank-M-N/Tic-Tac-Toe-game-jupyternotebook.git), where I created a similar project in a Jupyter notebook. This version is a web-based implementation of the classic Tic-Tac-Toe game, created using HTML, CSS, and JavaScript. The game features two gameplay modes:
- **Human vs. Human**: Two players can play against each other on the same device.
- **Human vs. Computer**: Challenge yourself against an AI-powered opponent, which is a model trained using reinforcement learning.

## Features

- **Interactive UI**: A simple and intuitive user interface that makes the game enjoyable to play.
- **Two Modes**: Choose between playing against another human or the computer.
- **AI Opponent**: The computer opponent is a reinforcement learning model that adds a challenging twist to the classic game.
- **Difficulty Levels**: When playing against the computer, you can choose the level of difficulty to match your skill level.
- **Responsive Design (Upcoming)**: Future updates will include enhancements to make the game more responsive and adaptable to different screen sizes.

## How the AI Works

The AI in this game is powered by a reinforcement learning model. If you're interested in learning how to train your own model and integrate it into a project like this, you can refer to my [previous repository](https://github.com/Shashank-M-N/Tic-Tac-Toe-game-jupyternotebook.git). This repo provides detailed instructions on how to train a model and convert it for use in a web-based game.

## Converting Model from Binary to JSON

To integrate your own trained model into this game, you need to convert the binary model generated from the file to JSON format. The code snippet for this conversion is provided below:

```python
import pickle
import json

# Read and deserialize the binary file
file_path = 'policy'
with open(file_path, 'rb') as file:
    data = pickle.load(file)

# Convert the deserialized data to a JSON string
json_data = json.dumps(data)

# Save the JSON data to a file
json_file_path = 'policy.json'
with open(json_file_path, 'w') as json_file:
    json_file.write(json_data)
```

## Future Plans

- **Responsive Design**: The next step for this project is to make the game fully responsive, ensuring it works seamlessly on both desktop and mobile devices.

## Contributing

Contributions are welcome! If you have ideas to improve the game or want to fix any issues, feel free to open a pull request.