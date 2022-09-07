const pwInput = document.getElementById("password");
const pwVerify = document.getElementById("confirm-password");
const pwAlert = document.getElementById("alert");


pwInput.addEventListener("change", () => {
  if (pwInput.value !== pwVerify.value) {
    pwInput.classList.add("error");
    pwVerify.classList.add("error");
    pwAlert.style.visibility = "visible";
  } else {
    pwInput.classList.remove("error");
    pwVerify.classList.remove("error");
    pwAlert.style.visibility = "hidden";
  };
});

pwVerify.addEventListener("change", () => {
  if (pwInput.value !== pwVerify.value) {
    pwInput.classList.add("error");
    pwVerify.classList.add("error");
    pwAlert.style.visibility = "visible";
  } else {
    pwInput.classList.remove("error");
    pwVerify.classList.remove("error");
    pwAlert.style.visibility = "hidden";
  };
});
