from flask import Flask, render_template, request, redirect
import json

app = Flask(__name__)


@app.route('/')
def hello_star_wars():
    return render_template('layout.html')


if __name__ == '__main__':
    app.run(debug=True,
            port=8888)