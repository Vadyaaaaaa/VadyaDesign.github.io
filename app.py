from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__)

@app.get('/health')
def healthcheck():
	return jsonify(status='ok')

@app.get('/')
def index():
	return send_from_directory('.', 'kaito-style.html')

@app.get('/kaito-style.html')
def kaito_style():
	return send_from_directory('.', 'kaito-style.html')

@app.get('/test-images.html')
def test_images():
	return send_from_directory('.', 'test-images.html')

@app.get('/works/<filename>')
def works_file(filename):
	return send_from_directory('works', filename)

@app.get('/12345/<filename>')
def ekolife_file(filename):
	return send_from_directory('12345', filename)

@app.get('/123456/<filename>')
def newproject_file(filename):
	return send_from_directory('123456', filename)

@app.get('/1234567/<filename>')
def project5_file(filename):
	return send_from_directory('1234567', filename)

@app.get('/123456789/<filename>')
def royalhorse_file(filename):
	return send_from_directory('123456789', filename)

@app.get('/<path:path>')
def static_proxy(path: str):
	if os.path.exists(path) and path not in ['kaito-style.html', 'test-images.html']:
		return send_from_directory('.', path)
	return ('Not found', 404)




if __name__ == '__main__':
	app.run(host='0.0.0.0', port=8000)

















