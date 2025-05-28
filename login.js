document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password); // ⚠️ Not safe in real apps

  alert("Login successful! Data saved in localStorage.");
});
