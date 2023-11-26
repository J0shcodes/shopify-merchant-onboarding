const notifBell = document.getElementById("bell");
const profileButton = document.getElementById("merchant");
const alertModal = document.getElementById("alert-container");
const profileModal = document.querySelector(".profile-modal");

notifBell.addEventListener("click", () => {
  console.log(profileModal);
  // alertModal.style.setProperty("display", "inline-flex")
});

profileButton.addEventListener("click", () => {
  console.log(profileModal);
  if (profileModal.classList.contains("hide")) {
    profileModal.classList.remove("hide");
  } else {
    profileModal.classList.add("hide")
  }
});
console.log(notifBell, profileButton);
