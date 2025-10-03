from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secure_secret_key'

# Dummy user credentials (replace with secure authentication)
USER_DATA = {
    "username": "user",
    "password": "pass123"
}

@app.route("/login", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        if username == USER_DATA["username"] and password == USER_DATA["password"]:
            return redirect(url_for("dashboard"))
        else:
            error = "Invalid username or password"
    return render_template("login.html", error=error)

@app.route("/dashboard")
def dashboard():
    return "<h2>Welcome to the Dashboard!</h2>"

if __name__ == "__main__":
    app.run()