# This file contains all queries used by the front end to gather data for the
# beer wizard app. It is basically a communication medium to the database.
#
# Author: Fredrik Omstedt
# Date: 2018-10-08

from app import app, mysql
from flask import jsonify, request
from flask_cors import cross_origin
import json
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
        cur.execute('''SELECT * FROM spell ORDER BY level ASC;''')
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
        cur.execute('''SELECT name, level FROM user;''')
        results = cur.fetchall()

        # Add the players to a list
        for result in results:
            players.append(result)
    except:
        traceback.print_exc()
        status_code = 500
    return jsonify({'players': players}), status_code

# Retrieves a single player based on name
@app.route('/api/get_player')
@cross_origin()
def get_player():
    status_code = 200
    player = ''
    try:
        # Retrieve the name of the player looked for
        player_name = request.args['name']

        # Fetch the player from the database
        cur = mysql.connection.cursor()
        cur.execute('''SELECT name, level FROM user WHERE name=%s;''', [player_name])
        results = cur.fetchall()

        if results:
            player = results[0]
    except:
        traceback.print_exc()
        status_code = 500
    return jsonify({'player': player}), status_code

# Adds a player to the database if a player with that name does not
# already exist.
@app.route('/api/register_player', methods=['POST'])
@cross_origin()
def register_player():
    status_code = 200
    return_name = ''
    try:
        player = json.loads(request.json)
        name = player['name']
        password = player['password']

        # Add the player to the database
        cur = mysql.connection.cursor()
        cur.execute('''INSERT INTO user VALUES (%s, %s, 1);''', [name, password])
        mysql.connection.commit()

        return_name = name
    except:
        traceback.print_exc()
        status_code = 500
    return jsonify({'name': return_name}), status_code

# Attempts to login a player and returns true and the player's name
# if successful, false otherwise.
@app.route('/api/login_player')
@cross_origin()
def login_player():
    status_code = 200
    return_name = ''
    success = False
    try:
        player = request.args
        name = player['name']
        password = player['password']

        # Check if the player exists in the database and return true if true
        cur = mysql.connection.cursor()
        cur.execute('''SELECT name FROM user WHERE name=%s AND password=%s;''', [name, password])
        result = cur.fetchall()
        if result:
            return_name = result[0]['name']
            success = True
    except:
        traceback.print_exc()
        status_code = 500
    return jsonify({'name': return_name, 'success': success}), status_code

# Levels up a player
@app.route('/api/level_up', methods=['POST'])
@cross_origin()
def level_up():
    status_code = 200
    return_level = 0
    try:
        player = json.loads(request.json)
        name = player['name']

        # Fetch the player from the database
        cur = mysql.connection.cursor()
        cur.execute('''SELECT level FROM user WHERE name=%s;''', [name])
        results = cur.fetchall()
        level = 0
        if results:
            level = results[0]['level']
        else:
            return jsonify({'level': return_level}), status_code
        if level == 9:
            return jsonify({'level': level}), status_code

        # Update the level by 1
        print(level)
        cur.execute('''UPDATE user SET level=%s WHERE name=%s;''', [int(level) + 1, name])
        mysql.connection.commit()

        return_level = level + 1
    except:
        traceback.print_exc()
        status_code = 500
    return jsonify({'level': return_level}), status_code

# Levels down a player
@app.route('/api/level_down', methods=['POST'])
@cross_origin()
def level_down():
    status_code = 200
    return_level = 0
    try:
        player = json.loads(request.json)
        name = player['name']

        # Fetch the player from the database
        cur = mysql.connection.cursor()
        cur.execute('''SELECT level FROM user WHERE name=%s;''', [name])
        results = cur.fetchall()
        level = 0
        if results:
            level = results[0]['level']
        else:
            return jsonify({'level': return_level}), status_code
        if level == 1:
            return jsonify({'level': level}), status_code

        # Update the level by 1
        print(level)
        cur.execute('''UPDATE user SET level=%s WHERE name=%s;''', [int(level) - 1, name])
        mysql.connection.commit()

        return_level = level - 1
    except:
        traceback.print_exc()
        status_code = 500
    return jsonify({'level': return_level}), status_code
