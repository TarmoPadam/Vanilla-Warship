from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def hello():
    name = "Eimantas"
    tiny_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return render_template("base.html", name=name, tiny_list=tiny_list)


# VARIABLE FROM URL
@app.route("/<number>")
def hello_number(number):
    return f"Hello world {number} times!"


# @app.route("/test")
# def whatever():
#    return "Whatever"

# {{}} = variable
# {%%} = Statement
