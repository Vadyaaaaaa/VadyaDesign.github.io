from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__, static_folder='assets', static_url_path='/assets')

@app.get('/health')
def healthcheck():
	return jsonify(status='ok')

@app.get('/')
def index():
	return send_from_directory('.', 'kaito-style.html')

@app.get('/kaito-style.html')
def kaito_style():
	return send_from_directory('.', 'kaito-style.html')

@app.get('/<path:path>')
def static_proxy(path: str):
	if os.path.exists(path) and path != 'kaito-style.html':
		return send_from_directory('.', path)
	return ('Not found', 404)




if __name__ == '__main__':
	app.run(host='0.0.0.0', port=8000)

















