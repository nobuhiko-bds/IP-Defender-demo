<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ログインページ</title>
  <style>
    body { font-family: Arial, sans-serif; }
    .login-container {
      width: 300px; margin: 100px auto; padding: 20px;
      border: 1px solid #ccc; border-radius: 8px;
      background: #f9f9f9;
    }
    input[type="text"], input[type="password"] {
      width: 100%; padding: 8px; margin: 8px 0; box-sizing: border-box;
    }
    button { width: 100%; padding: 10px; }
    .error { color: red; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="login-container">
    <h2>ログイン</h2>
    <form id="loginForm">
      <input type="text" id="username" placeholder="ユーザー名" required>
      <input type="password" id="password" placeholder="パスワード" required>
      <button type="submit">ログイン</button>
      <div id="errorMsg" class="error"></div>
    </form>
  </div>
  <script>
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      // サーバー側で認証するためのHTTPリクエスト的な処理を行う場所
      // ここではあくまでフロント側の処理に留める
      console.log("Entered credentials:", username, password);
      // 以下に認証処理を追加する
    });
  </script>
</body>
</html>