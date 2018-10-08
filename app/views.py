# This file contains all queries used by the front end to gather data for the
# beer wizard app. It is basically a communication medium to the database.
#
# Author: Fredrik Omstedt
# Date: 2018-10-08

from app import app, mysql
from flask import jsonify, request
from flask_cors import cross_origin
import traceback

# Retrieves all spells possible to cast
@app.route('/api/get_all_spells')
@cross_origin()
def get_all_spells():
    status_code = 200
    spells = []
    try:
        # Fetch the spells from the database
        cur = mysql.connection.cursor()
        cur.execute('''SELECT * FROM spell ORDER BY level ASC''')
        results = cur.fetchall()

        # Add the spells to a list
        for result in results:
            spells.append(result)
    except:
        traceback.print_exc()
        status_code = 500
    return jsonify({'spells': spells}), status_code

# Retrieves all players in the game
@app.route('/api/get_all_players')
@cross_origin()
def get_all_players():
    status_code = 200
    players = []
    try:
        # Fetch the players from the database
        cur = mysql.connection.cursor()
        cur.execute('''SELECT name, level FROM user''')
        results = cur.fetchall()

        # Add the spells to a list
        for result in results:
            players.append(result)
    except:
        traceback.print_exc()
        status_code = 500
    return jsonify({'players': players}), status_code
