
from flask import Flask, render_template, redirect, request
app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/index.html")
def my_home():
    return render_template('index.html')

@app.route("/about.html")
def about():
    return render_template('about.html')

@app.route("/works.html")
def works():
    return render_template('works.html')

@app.route("/work.html")
def work():
    return render_template('work.html')

@app.route("/contact.html")
def contact():
    return render_template('contact.html')

@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method == 'POST':
        data = request.form.to_dict()
        print(data)
        return redirect('/thankyou.html')
    else:
        return 'something went wrong'