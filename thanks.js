document.addEventListener("DOMContentLoaded", () => {
  const inputEmail = document.getElementById("inputEmail");
  const storedEmail = localStorage.getItem('email');
  console.log(inputEmail)
  inputEmail.textContent = `${storedEmail}.`;
  if (storedEmail !== null && storedEmail !== '') {
    localStorage.removeItem('email');
  }
})
