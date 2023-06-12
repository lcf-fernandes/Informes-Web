var showPassword = false;

function toggleShowPassword() {
  var passwordInput = document.getElementById("password");
  var eyeIcon = document.getElementById("eyeIcon");

  showPassword = !showPassword;
  if (showPassword) {
    passwordInput.type = "text";
    eyeIcon.innerHTML = "&#128065;";
  } else {
    passwordInput.type = "password";
    eyeIcon.innerHTML = "&#128064;";
  }
}

function handleLogin() {
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");
  var username = usernameInput.value;
  var password = passwordInput.value;

  // Logic to verify login credentials
  // Here you can implement the logic to authenticate the user
  if (username === "admin" && password === "admin") {
    // User authenticated successfully
    console.log("User authenticated:", username);
    alert("Successful login: User authenticated successfully!");
  } else {
    // Invalid credentials
    console.log("Invalid credentials");
    alert("Login error: Invalid username or password.");
  }
}

function toggleLogin() {
  var toggleText = document.getElementsByClassName("toggle-text")[0];
  var buttonText = document.getElementsByTagName("button")[0];

  if (toggleText.innerHTML === "¿Aún no tienes una cuenta? Regístrate") {
    toggleText.innerHTML = "¿Ya tienes una cuenta? Inicia sesión";
    buttonText.innerHTML = "Registrarse";
    buttonText.setAttribute("onclick", "handleRegister()");
  } else {
    toggleText.innerHTML = "¿Aún no tienes una cuenta? Regístrate";
    buttonText.innerHTML = "Iniciar Sesión";
    buttonText.setAttribute("onclick", "handleLogin()");
  }
}

function handleRegister() {
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");
  var username = usernameInput.value;
  var password = passwordInput.value;

  // Logic to create a new user account
  // Here you can implement the logic to create a new user account
  console.log("New user registered:", username);
  console.log("Password:", password);
  alert("Successful registration: New user account created!");
}
