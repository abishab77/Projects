const username = document.querySelector("#uname");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const cpassword = document.querySelector("#cpass");
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  if (!validateform()) {
    e.preventDefault();
  }
});

function validateform() {
  usernameValidate(username);
  emailValidate(email);
  passwordValidate(password);
  confirmPassValidate(password, cpassword);

  return (
    usernameValidate(username) &&
    emailValidate(email) &&
    passwordValidate(password) &&
    confirmPassValidate(password, cpassword)
  );
}

function usernameValidate(username) {
  let Noerror = true;
  let usernameValue = username.value.trim();

  if (usernameValue === "") {
    Noerror = false;
    setError(username, "Provide a username must");
  } else if (usernameValue.length < 8) {
    Noerror = false;
    setError(username, "Username length should be atleast 8 characters");
  } else {
    setSuccess(username);
  }

  return Noerror;
}

function emailValidate(email) {
  let Noerror = true;
  let emailValue = email.value;

  if (emailValue === "") {
    Noerror = false;
    setError(email, "Email should not be empty");
  } else if (!emailcheck(emailValue)) {
    Noerror = false;
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }
  console.log(emailValue);
  return Noerror;
}

function passwordValidate(password) {
  let Noerror = true;
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let passwordValue = password.value.trim();

  if (passwordValue === "") {
    Noerror = false;
    setError(password, "Password Should not be empty");
  } else if (passwordValue.length < 8) {
    Noerror = false;
    setError(password, "Password length Should be atleast 8 characters");
  } else if (
    !(
      passwordValue.match(upperCaseLetters) &&
      passwordValue.match(lowerCaseLetters)
    )
  ) {
    Noerror = false;
    setError(password, "Password Should contatins both uppercase and lowecase");
  } else {
    setSuccess(password);
  }
  return Noerror;
}
function confirmPassValidate(password, cpassword) {
  let Noerror = true;
  let confirmPassValue = cpassword.value.trim();
  let passwordValue = password.value.trim();

  if (confirmPassValue === "") {
    Noerror = false;
    setError(cpassword, "Password Should not be empty");
  } else if (!(passwordValue === confirmPassValue)) {
    Noerror = false;

    setError(cpassword, "Password mismatching");
  } else {
    setSuccess(cpassword);
  }

  return Noerror;
}
function emailcheck(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function setError(element, message) {
  const mainElement = element.parentElement;
  const er = mainElement.querySelector(".error");
  er.innerText = message;
  mainElement.classList.add("error");
  mainElement.classList.remove("setSuccess");
}
function setSuccess(element) {
  const mainElement = element.parentElement;
  const er = mainElement.querySelector(".error");
  er.innerText = "";
  mainElement.classList.add("setSuccess");
  mainElement.classList.remove("error");
}
