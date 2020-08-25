#!/bin/bash

python3 -m venv /bingo
cd /bingo
source bin/activate
pip3 install -r requirements.txt

export FLASK_APP=bingo.py
flask run --host=0.0.0.0 
