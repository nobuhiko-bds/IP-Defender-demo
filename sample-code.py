import os
from flask import Flask, render_template_string, request

app = Flask(__name__)
app.secret_key = os.environ.get('FLASK_SECRET_KEY', 'change-me')  # 本番は環境変数で強固なキー必須

users = {'user1': 'password123'}  # データベース利用推奨

login_form = '''
<!doctype html>
<title>Login</title>
<h2>Login</h2>
<form method="post">
  Username: <input name="username"><br>
  Password: <input type="password" name="password"><br>
  <input type="submit" value="Login">
</form>
{% if error %}
<p style="color: red;">{{ error }}</p>
{% endif %}
'''

@app.route('/', methods=['GET', 'POST'])
def login():
    error = None
    # POSTだけ認証処理をさせる
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        if username in users and users[username] == password:
            return f"Welcome, {username}!"
        else:
            error = "Invalid username or password."
    # GETなら状態変更無しでフォーム表示
    return render_template_string(login_form, error=error)

if __name__ == '__main__':
    app.run()