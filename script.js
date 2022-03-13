const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  alert(
    `You have been phished! Your credentials are ${email} and ${password}, be careful next time!`
  );
});
