# This file contains all queries used by the front end to gather data for the
# beer wizard app. It is basically a communication medium to the database.
#
# Author: Fredrik Omstedt
# Date: 2018-10-08

from app import app
from flask import render_template, jsonify, request
from flask_cors import cross_origin
import traceback
import psycopg2
import psycopg2.extras

# Routes the address to show the interface html file
@app.route('/test')
@cross_origin()
def test():
    return 200, jsonify({'test': 4})
