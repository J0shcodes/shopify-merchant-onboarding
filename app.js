const notifBell = document.getElementById("bell");
const profileButton = document.getElementById("merchant");
const alertModal = document.querySelector(".alert-container");
const profileModal = document.querySelector(".profile-modal");
const setupContainer = document.querySelector(".setup-container");

const customizeRadio = document.querySelector(".customize-radio");
const customizeRotate = document.querySelector(".customize-rotate");

const productRadio = document.querySelector(".product-radio");
const productRotate = document.querySelector(".product-rotate");

const domainRadio = document.querySelector(".domain-radio");
const domainRotate = document.querySelector(".domain-rotate");

const storeRadio = document.querySelector(".store-radio");
const storeRotate = document.querySelector(".store-rotate");

const providerRadio = document.querySelector(".provider-radio");
const providerRotate = document.querySelector(".provider-rotate");

const customizeCheckmark = document.querySelector(".customize-checkmark");
const productCheckmark = document.querySelector(".product-checkmark");
const domainCheckmark = document.querySelector(".domain-checkmark");
const storeCheckmark = document.querySelector(".store-checkmark");
const providerCheckmark = document.querySelector(".provider-checkmark");

const customize = document.querySelector(".customize");
const customizeText = document.querySelector(".customize-text");
const customizeImage = document.querySelector(".customize-img");

const product = document.querySelector(".product");
const productText = document.querySelector(".product-text");
const productImage = document.querySelector(".product-img");

const domain = document.querySelector(".domain");
const domainText = document.querySelector(".domain-text");
const domainImage = document.querySelector(".domain-img");

const store = document.querySelector(".store");
const storeText = document.querySelector(".store-text");
const storeImage = document.querySelector(".store-img");

const provider = document.querySelector(".provider");
const providerText = document.querySelector(".provider-text");
const providerImage = document.querySelector(".provider-img");

const bar2 = document.getElementById("bar-2");

let completedCounter = 0;

notifBell.addEventListener("click", () => {
  alertModal.classList.toggle("hide");

  const isExpanded = element.attributes["aria-expanded"].value === "true";

  if (isExpanded) {
    notifBell.ariaExpanded = "false";
  } else {
    notifBell.ariaExpanded = "true";
  }

  if (profileModal.classList.contains("hide")) {
    return null;
  } else {
    profileModal.classList.add("hide");
  }
});

profileButton.addEventListener("click", () => {
  profileModal.classList.toggle("hide");

  const allMenuItems = document.querySelectorAll("[role='menu-item']");

  const isExpanded = profileButton.attributes["aria-expanded"].value === "true";

  if (isExpanded) {
    profileButton.ariaExpanded = "false";
    profileButton.focus();
  } else {
    profileButton.ariaExpanded = "true";
    allMenuItems.item(0).focus();
  }

  if (alertModal.classList.contains("hide")) {
    return null;
  } else {
    alertModal.classList.add("hide");
  }
});

alertModal.addEventListener("click", () => {
  alertModal.classList.add("hide");
});

profileModal.addEventListener("click", () => {
  profileModal.classList.add("hide");
});

document.getElementById("dropdown").addEventListener("click", () => {
  if (setupContainer.classList.contains("hide")) {
    setupContainer.classList.remove("hide");
    document.getElementById("arrow").src =
      "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg";
  } else {
    setupContainer.classList.add("hide");
    document.getElementById("arrow").src =
      "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";
  }
});

customizeRadio.addEventListener("mouseover", () => {
  console.log("Hovered");
  customizeRadio.classList.add("hide");
  customizeRotate.classList.remove("hide");
});
customizeRotate.addEventListener("mouseout", () => {
  customizeRotate.classList.add("hide");
  customizeRadio.classList.remove("hide");
});

productRadio.addEventListener("mouseover", () => {
  console.log("Hovered");
  productRadio.classList.add("hide");
  productRotate.classList.remove("hide");
});
productRotate.addEventListener("mouseout", () => {
  productRotate.classList.add("hide");
  productRadio.classList.remove("hide");
});

domainRadio.addEventListener("mouseover", () => {
  console.log("Hovered");
  domainRadio.classList.add("hide");
  domainRotate.classList.remove("hide");
});
domainRotate.addEventListener("mouseout", () => {
  domainRotate.classList.add("hide");
  domainRadio.classList.remove("hide");
});

storeRadio.addEventListener("mouseover", () => {
  console.log("Hovered");
  storeRadio.classList.add("hide");
  storeRotate.classList.remove("hide");
});
storeRotate.addEventListener("mouseout", () => {
  storeRotate.classList.add("hide");
  storeRadio.classList.remove("hide");
});

providerRadio.addEventListener("mouseover", () => {
  console.log("Hovered");
  providerRadio.classList.add("hide");
  providerRotate.classList.remove("hide");
});
providerRotate.addEventListener("mouseout", () => {
  providerRotate.classList.add("hide");
  providerRadio.classList.remove("hide");
});

customizeRotate.addEventListener("click", () => {
  document.querySelector(".customize-checkmark").classList.remove("hide");
  completedCounter += 1;

  console.log(completedCounter);

  checkCompletedCounter();
});

productRotate.addEventListener("click", () => {
  document.querySelector(".product-checkmark").classList.remove("hide");
  completedCounter += 1;

  console.log(completedCounter);

  checkCompletedCounter();
});

domainRotate.addEventListener("click", () => {
  document.querySelector(".domain-checkmark").classList.remove("hide");
  completedCounter += 1;

  console.log(completedCounter);

  checkCompletedCounter();
});

storeRotate.addEventListener("click", () => {
  document.querySelector(".store-checkmark").classList.remove("hide");
  completedCounter += 1;

  console.log(completedCounter);

  checkCompletedCounter();
});

providerRotate.addEventListener("click", () => {
  providerCheckmark.classList.remove("hide");
  completedCounter += 1;

  console.log(completedCounter);

  checkCompletedCounter();
});

customizeCheckmark.addEventListener("click", () => {
  customizeCheckmark.classList.add("hide");

  if (completedCounter === 0) {
    return null;
  } else {
    completedCounter -= 1;
  }

  checkCompletedCounter();
});

productCheckmark.addEventListener("click", () => {
  productCheckmark.classList.add("hide");

  if (completedCounter === 0) {
    return null;
  } else {
    completedCounter -= 1;
  }

  checkCompletedCounter();
});

domainCheckmark.addEventListener("click", () => {
  domainCheckmark.classList.add("hide");

  if (completedCounter === 0) {
    return null;
  } else {
    completedCounter -= 1;
  }

  checkCompletedCounter();
});

storeCheckmark.addEventListener("click", () => {
  storeCheckmark.classList.add("hide");

  if (completedCounter === 0) {
    return null;
  } else {
    completedCounter -= 1;
  }

  checkCompletedCounter();
});
providerCheckmark.addEventListener("click", () => {
  providerCheckmark.classList.add("hide");

  if (completedCounter === 0) {
    return null;
  } else {
    completedCounter -= 1;
  }

  checkCompletedCounter();
});

product.addEventListener("click", () => {
  productText.classList.remove("hide");
  product.classList.add("highlight");
  productImage.classList.remove("hide");

  customizeText.classList.add("hide");
  customize.classList.remove("highlight");
  customizeImage.classList.add("hide");

  domainText.classList.add("hide");
  domain.classList.remove("highlight");
  domainImage.classList.add("hide");

  storeText.classList.add("hide");
  store.classList.remove("highlight");
  storeImage.classList.add("hide");

  providerText.classList.add("hide");
  provider.classList.remove("highlight");
  providerImage.classList.add("hide");
});

domain.addEventListener("click", () => {
  domainText.classList.remove("hide");
  domain.classList.add("highlight");
  domainImage.classList.remove("hide");

  customizeText.classList.add("hide");
  customize.classList.remove("highlight");
  customizeImage.classList.add("hide");

  productText.classList.add("hide");
  product.classList.remove("highlight");
  productImage.classList.add("hide");

  storeText.classList.add("hide");
  store.classList.remove("highlight");
  storeImage.classList.add("hide");

  providerText.classList.add("hide");
  provider.classList.remove("highlight");
  providerImage.classList.add("hide");
});

store.addEventListener("click", () => {
  storeText.classList.remove("hide");
  store.classList.add("highlight");
  storeImage.classList.remove("hide");

  customizeText.classList.add("hide");
  customize.classList.remove("highlight");
  customizeImage.classList.add("hide");

  domainText.classList.add("hide");
  domain.classList.remove("highlight");
  domainImage.classList.add("hide");

  productText.classList.add("hide");
  product.classList.remove("highlight");
  productImage.classList.add("hide");

  providerText.classList.add("hide");
  provider.classList.remove("highlight");
  providerImage.classList.add("hide");
});

provider.addEventListener("click", () => {
  providerText.classList.remove("hide");
  provider.classList.add("highlight");
  providerImage.classList.remove("hide");

  customizeText.classList.add("hide");
  customize.classList.remove("highlight");
  customizeImage.classList.add("hide");

  domainText.classList.add("hide");
  domain.classList.remove("highlight");
  domainImage.classList.add("hide");

  storeText.classList.add("hide");
  store.classList.remove("highlight");
  storeImage.classList.add("hide");

  productText.classList.add("hide");
  product.classList.remove("highlight");
  productImage.classList.add("hide");
});

customize.addEventListener("click", () => {
  customizeText.classList.remove("hide");
  customize.classList.add("highlight");
  customizeImage.classList.remove("hide");

  productText.classList.add("hide");
  product.classList.remove("highlight");
  productImage.classList.add("hide");

  domainText.classList.add("hide");
  domain.classList.remove("highlight");
  domainImage.classList.add("hide");

  storeText.classList.add("hide");
  store.classList.remove("highlight");
  storeImage.classList.add("hide");

  providerText.classList.add("hide");
  provider.classList.remove("highlight");
  providerImage.classList.add("hide");
});

const checkCompletedCounter = () => {
  if (completedCounter === 1) {
    bar2.style.width = "20%"
  }

  if (completedCounter === 2) {
    bar2.style.width = "40%"
  }

  if (completedCounter === 3) {
    bar2.style.width = "60%"
  }

  if (completedCounter === 4) {
    bar2.style.width = "80%"
  }

  if (completedCounter === 5) {
    bar2.style.width = "100%"
  }
};
