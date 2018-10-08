#
#
# Author: Fredrik Omstedt
# Date: 2018-10-08

from app import app
from flask import render_template, jsonify, request
import traceback
import psycopg2
import psycopg2.extras

# Routes the address to show the interface html file
@app.route('/')
@app.route('/index')
def index():
    return render_template('beer_wizard.html')
