from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import chatbot
import memory

app = Flask(__name__)
CORS(app)  

API_URL = "https://api-inference.huggingface.co/models/lxyuan/distilbert-base-multilingual-cased-sentiments-student"

@app.route('/analyse-sentiment', methods=['POST'])
def analyse_sentiment():
    data = request.json
    text = data['text']
    output = query({
	"inputs": text,
})
    sentiment = find_highest_score(output[0])
    return jsonify({"sentiment": sentiment})

@app.route('/product-info', methods=['POST'])
def product_info():
    data = request.json
    query = data['query']
    output = chatbot.get_answer(query)
    return jsonify({"answer": output})
    

def query(payload):
    headers = {"Authorization": "Bearer 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"}
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()
	

def find_highest_score(output):
    # Initialize variables to hold the highest score and its corresponding label
    highest_score = 0
    highest_label = None
    
    # Iterate through each entry in the output variable
    for entry in output:
        # Check if the current score is higher than the highest score found so far
        if entry['score'] > highest_score:
            # Update the highest score and its corresponding label
            highest_score = entry['score']
            highest_label = entry['label']
    
    return highest_label

@app.route('/customer-service', methods=['POST'])
def customer_service():
    data = request.json
    query = data['query']
    output = memory.get_answer(query)
    return jsonify({"answer": output})

if __name__ == '__main__':
    app.run(debug=True)
