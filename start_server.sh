#Starts the interface, making it accessible at port 8085
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
export PYTHONPATH="${PYTHONPATH}:$DIR"
./watchdog.sh python3 /usr/local/bin/twistd -n web --port "tcp:port=8332" --wsgi run_beer_wizard.app
