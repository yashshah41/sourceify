from flask import Flask, request, jsonify
from metaphor_python import Metaphor
from flask_cors import CORS
from environs import Env
env = Env()
env.read_env()

app = Flask(__name__)
CORS(app)
API_KEY = env("API_KEY")
# http://127.0.0.1:5000/api/sources
@app.route('/api/sources', methods=['POST'])
def process_prompt():   
    metaphor = Metaphor(API_KEY)
    data = request.get_json()
    topic = data.get('prompt')
    response = metaphor.search(f"Sources for an article about {topic}", num_results=5, use_autoprompt=True)
    app.logger.info(response.length)
    return jsonify(response)
if __name__ == '__main__':
    app.run(debug= True)