from flask import Flask, render_template, request, jsonify
import math

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    try:
        result = eval(data["expression"], {"__builtins__": None}, math.__dict__)
        return jsonify({"result": result})
    except:
        return jsonify({"result": "Error"})

if __name__ == "__main__":
    app.run(debug=True)
