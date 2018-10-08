from flask import Flask
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)

#CORS configuration
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#MySQL configuration
mysql = MySQL(app)
app.config['MYSQL_USER'] = 'beerwizard'
app.config['MYSQL_PASSWORD'] = 'B33rW1z4rd'
app.config['MYSQL_DB'] = 'beer_wizard'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

from app import views
