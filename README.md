The following is the code for converting binary files to .json files
```
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