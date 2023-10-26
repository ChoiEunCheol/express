from flask import Flask, request, send_file

app = Flask(__name__)

# GET 요청을 처리
@app.route('/')
def index():
    return send_file('index.html')

# POST 요청을 처리
@app.route('/submit', methods=['POST'])
def submit():
    data = request.form['inputData']  # "inputData"는 입력 필드의 이름입니다
    print('POST 요청을 받았습니다:', data)
    return 'POST 요청을 받았습니다. 입력한 내용: ' + data

if __name__ == "__main__":
    app.run(port=8000)
