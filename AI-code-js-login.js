<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ログインページ</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f7f7f7; }
    .login-container {
      background: #fff;
      padding: 32px 24px;
      max-width: 320px;
      margin: 60px auto;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.12);
    }
    .login-container h2 { margin-bottom: 18px; }
    .input-group { margin-bottom: 16px; }
    .input-group label { display: block; font-size: 14px; margin-bottom: 6px; }
    .input-group input {
      width: 100%; padding: 8px; border: 1px solid #ccc;
      border-radius: 5px; box-sizing: border-box;
    }
    .login-btn {
      width: 100%; padding: 10px; background: #1976d2;
      color: #fff; border: none; border-radius: 5px; font-size: 16px;
      cursor: pointer;
    }
    .error { color: red; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="login-container">
    <h2>ログイン</h2>
    <form id="loginForm">
      <div class="input-group">
        <label for="username">ユーザー名</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div class="input-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button class="login-btn" type="submit">ログイン</button>
      <div class="error" id="error"></div>
    </form>
  </div>
  <script>
    document.getElementById('loginForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      var user = document.getElementById('username').value;
      var pass = document.getElementById('password').value;
      document.getElementById('error').textContent = '';
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: user, password: pass })
        });
        if (response.ok) {
          alert('ログイン成功！');
          // 必要に応じてリダイレクト処理などを追加
        } else {
          document.getElementById('error').textContent = 'ユーザー名またはパスワードが違います';
        }
      } catch (err) {
        document.getElementById('error').textContent = '通信エラーが発生しました';
      }
    });
  </script>
</body>
</html>