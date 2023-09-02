function isValidEmail(email) {
  // Regular expression pattern to validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

function SubscriptionChecker() {
  const emailInfo = document.getElementById("emailInput");
  const email = emailInfo.value;

  localStorage.setItem("email", email);

  if (isValidEmail(email)) {
    window.location.href = "subscriptionPopUp.html";
  } else {
    const invalidText = document.querySelector(".notifyInvalidEmail");
    invalidText.innerHTML = "Valid email required";
    const element = document.querySelector("#emailInput");
    element.setAttribute(
      "style",
      "color: red; border: 1px solid tomato; background-color: hsl(4, 59%, 89%);"
    );
  }
}
