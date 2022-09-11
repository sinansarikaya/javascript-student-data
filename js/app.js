const submit = document.querySelector(".submit");
const alertDom = document.querySelector(".alert-info");
const alertTitle = document.querySelector(".infoTitle");
const alertMessage = document.querySelector(".alertMessage");
const nameDom = document.querySelector("#name");
const scoreDom = document.querySelector("#score");
const infoContainer = document.querySelector(".info-container");

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
  if (nameDom.value && scoreDom.value) {
    alert("Success :", "Data successfully added!", "#3EB281");
    const newData = document.createElement("div");
    const dataName = document.createElement("div");
    const dataScore = document.createElement("div");
    newData.classList.add("info-item");
    dataName.classList.add("info-name");
    dataScore.classList.add("info-score");

    dataName.innerText = nameDom.value;
    dataScore.innerText = scoreDom.value;

    infoContainer.appendChild(newData);
    newData.appendChild(dataName);
    newData.appendChild(dataScore);

    nameDom.value = "";
    scoreDom.value = "";
  } else {
    alert("Error :", "You should fill the form!", "#f46677");
  }
});

nameDom.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    clickSubmit();
  }
});
