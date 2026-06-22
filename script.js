const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "Урааааааа! До завтра!! 🥰";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  // Удаляем кнопку "Нет"
  noBtn.removeEventListener("mouseover", handleNoMouseOver);
  noBtn.remove();

  // Варианты ответов про переписку
  const dateIdeas = [
    "А чем именно займемся — решим уже в переписке, как получится! 😉",
    "Куда именно пойдем — обсудим уже в ЛС! 📱",
    "План действий договоримся в чате, как пойдёт! ✨",
    "Все детали обсудим в личке, главное — что мы идём! 🚀"
  ];

  // Создаем кнопку "Погнали!"
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Погнали! 🚀";
  letsGoBtn.classList.add("letsgo-btn"); 
  letsGoBtn.style.position = "absolute";

  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px";

  // Выводим сообщение в алерт
  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];

    alert(selectedDateIdea);
  });

  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
