const apiUrl = "https://api.adviceslip.com/advice";
const advice = document.getElementById("advice");
const id = document.getElementById("id");
function getAdvice(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      advice.textContent = data.slip.advice;
      id.textContent = `ADVICE #${data.slip.id}`;
    });
}
getAdvice(apiUrl);
