import os
from flask import Flask, render_template_string, request, redirect, url_for, session, flash
from werkzeug.security import check_password_hash
from dotenv import load_dotenv

# Load environment variables for secrets
load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('FLASK_SECRET_KEY', os.urandom(24))

# Simulated user database (store securely in production)
users_db = {
    'user1': os.getenv('USER1_HASHED_PASSWORD')  # Password hash, e.g. from werkzeug.security.generate_password_hash
}

LOGIN_PAGE = '''
<!doctype html>
<title>Login</title>
<h2>Login</h2>
<form method="post">
  <label>Username:</label>
  <input name="username" required>
  <br>
  <label>Password:</label>
  <input name="password" type="password" required>
  <br>
  <input type="submit" value="Login">
</form>
{% with messages = get_flashed_messages() %}
  {% if messages %}
    <ul>{% for msg in messages %}<li style="color: red;">{{ msg }}</li>{% endfor %}</ul>
  {% endif %}
{% endwith %}
'''

@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        stored_hash = users_db.get(username)
        if stored_hash and check_password_hash(stored_hash, password):
            session["user"] = username
            return redirect(url_for("dashboard"))
        else:
            flash("Invalid credentials.")
    return render_template_string(LOGIN_PAGE)

@app.route("/dashboard")
def dashboard():
    if "user" in session:
        return f"Welcome, {session['user']}!"
    return redirect(url_for("login"))

if __name__ == "__main__":
    app.run()