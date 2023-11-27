const notifBell = document.getElementById("bell");
const profileButton = document.getElementById("merchant");
const alertModal = document.querySelector(".alert-container");
const profileModal = document.querySelector(".profile-modal");

notifBell.addEventListener("click", () => {
    console.log("notification")
  if (alertModal.classList.contains("hide")) {
    alertModal.classList.remove("hide");
  } else {
    alertModal.classList.add("hide");
  }

  if(profileModal.classList.contains("hide")) {
    return null
  } else {
    profileModal.classList.add("hide")
  }
});

profileButton.addEventListener("click", () => {
  if (profileModal.classList.contains("hide")) {
    profileModal.classList.remove("hide");
  } else {
    profileModal.classList.add("hide");
  }

  if(alertModal.classList.contains("hide")) {
    return null
  } else {
    alertModal.classList.add("hide")
  }
});

alertModal.addEventListener("click", () => {
    alertModal.classList.add("hide")
})

profileModal.addEventListener("click", () => {
    profileModal.classList.add("hide")
})
console.log(notifBell, profileButton);
