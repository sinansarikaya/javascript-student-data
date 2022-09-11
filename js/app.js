const submit = document.querySelector(".submit");
const alertDom = document.querySelector(".alert-info");
const alertTitle = document.querySelector(".infoTitle");
const alertMessage = document.querySelector(".alertMessage");
const nameDom = document.querySelector("#name");
const scoreDom = document.querySelector("#score");
const infoContainer = document.querySelector(".info-container");

let scoreCheck = false;

const alert = (title, message, type) => {
  alertTitle.innerText = title;
  alertMessage.innerText = message;
  alertDom.style.backgroundColor = type;
  alertDom.style.top = 0;
  setTimeout(() => {
    alertDom.style.top = "-70px";
  }, 2000);
};
submit.addEventListener("click", () => {
  let onTimeAlert = false;
  if (Number(scoreDom.value) <= 100 && Number(scoreDom.value) >= 0) {
    scoreCheck = true;
  } else {
    scoreCheck = false;
    onTimeAlert = true;
    alert("Error :", "Score must be between 100 and 0!", "#f46677");
  }
  if (nameDom.value && scoreDom.value && scoreCheck) {
    alert("Success :", "Data successfully added!", "#3EB281");
    const newData = document.createElement("div");
    const dataName = document.createElement("div");
    const dataScore = document.createElement("div");
    const deleteEl = document.createElement("span");
    const iEl = document.createElement("i");

    newData.classList.add("info-item");
    dataName.classList.add("info-name");
    dataScore.classList.add("info-score");
    deleteEl.classList.add("info-delete");
    iEl.classList.add("fa-solid", "fa-xmark");

    dataName.innerText = nameDom.value;
    dataScore.innerText = scoreDom.value;

    deleteEl.appendChild(iEl);
    infoContainer.appendChild(newData);
    newData.appendChild(dataName);
    newData.appendChild(dataScore);
    newData.appendChild(deleteEl);

    nameDom.value = "";
    scoreDom.value = "";

    deleteEl.addEventListener("click", () => {
      infoContainer.removeChild(deleteEl.parentNode);
      alert("Warning :", "Selected data deleted!", "#f5ab6a");
    });
  } else {
    if (!onTimeAlert) {
      alert("Error :", "You should fill the form!", "#f46677");
    }
  }
});

nameDom.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    clickSubmit();
  }
});
