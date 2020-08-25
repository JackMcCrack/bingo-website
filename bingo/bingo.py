from flask import Flask
from flask import flash
from flask import request
from flask import render_template
from flask import send_from_directory
from flask_wtf.csrf import CSRFProtect
import json
import logging
from logging.handlers import RotatingFileHandler
from os import path


app = Flask(__name__)
csrf = CSRFProtect(app)

app.config['SECRET_KEY'] = 'changeme'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/bingo', methods=['GET'])
def bingo():
    return render_template('bingo.html')

@app.route('/bingomaster', methods=['GET'])
def bingomaster():
    return render_template('bingomaster.html')

@app.route('/bingono', methods=['GET'])
def bingono():
    import random
    numbers = []
    ret = {}
    if "" == request.args.get('all'):
        for i in range(1,76):
            numbers.append(i)
        random.shuffle(numbers)
        for i in range(75):
            ret[i] = numbers[i] 

        return json.dumps(ret)
    else:
        a = []
        offset = 0
        while offset < 75:
            numbers = []
            for i in range(1+offset,16+offset):
                numbers.append(i)
            random.shuffle(numbers)
            a = a + numbers[0:5]
            offset = offset +15
        a.sort() 
        return json.dumps({'n': a})

    #return render_template('bingono.html', numbers)

@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)


if __name__ == '__main__':
    handler = RotatingFileHandler('foo.log', maxBytes=10000, backupCount=1)
    handler.setLevel(logging.INFO)
    app.logger.addHandler(handler)
    app.run()
