<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bellzup Signup</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: url('path-to-illustration.png') no-repeat center right;
            background-size: contain;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 400px;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            position: relative;
        }
        h1 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
        }
        .login-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            background-color: #4a90e2;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
        .login-btn:hover {
            background-color: #357abd;
        }
        .onboarding {
            background-color: #28a745;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            margin-bottom: 20px;
            font-size: 14px;
        }
        .form-group {
            margin-bottom: 15px;
            width: 100%;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #666;
        }
        .form-group input {
            width: 100%;
            padding: 10px;
            border: none;
            background-color: #ffcccc;
            border-radius: 5px;
            font-size: 14px;
        }
        .form-group input::placeholder {
            color: #999;
        }
        .btn {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #4a90e2;
            color: white;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        .btn:hover {
            background-color: #357abd;
        }
        .google-btn {
            background-color: #ffcccc;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            margin-bottom: 10px;
        }
        .google-btn img {
            width: 20px;
            height: 20px;
        }
        .google-btn span {
            color: #333;
        }
        .nav-link {
            color: #4a90e2;
            text-decoration: none;
            font-size: 14px;
            display: block;
            text-align: center;
            margin-top: 10px;
        }
        .nav-link:hover {
            text-decoration: underline;
        }
        p {
            color: #666;
            text-align: center;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Onboarding Indicator -->
        <div class="onboarding">
            01 Onboarding
        </div>

        <h1>Bellzup Login</h1>
        <a href="login.html" class="login-btn">Login</a>

        <form id="signupForm" class="form">
            <h2>Create Account</h2>
            <div class="form-group">
                <button type="button" class="google-btn" id="googleLogin">
                    <img src="https://www.google.com/favicon.ico" alt="Google Logo"> Continue with Google
                </button>
                <p>or Create Account</p>
            </div>
            <div class="form-group">
                <label for="username">User Name</label>
                <input type="text" id="username" placeholder="Enter User Name">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email id">
            </div>
            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Enter your phone number">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your new password">
            </div>
            <button type="submit" class="btn">Sign Up</button>
            <p>Already have an account? <a href="login.html" class="nav-link">Login</a></p>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>