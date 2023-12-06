import "../scss/style.scss";

const main = () => {
  let waitFlag = false;
  let clearNum = 0;

  // カードをセット
  setCards();

  const cards = document.querySelectorAll(".js-card");

  cards.forEach((card) => {
    card.addEventListener("click", function (e: Event) {
      if (e.target instanceof HTMLElement && !waitFlag) {
        openCard(e.target);
        judgeCard();
      }
    });
  });

  function openCard(el: HTMLElement) {
    if(!el.classList.contains("clear"))el.classList.add("is-open");
  }

  function judgeCard() {
    const openCards = document.querySelectorAll(".card.is-open") as any;
    if (openCards.length === 2) {
      waitFlag = true;
      setTimeout(() => {
        const num1 = openCards[0].dataset.num;
        const num2 = openCards[1].dataset.num;
        if (num1 === num2) {
          openCards.forEach((el: HTMLElement) => {
            el.classList.remove("is-open");
            el.classList.add("clear");
            clearNum += 1;
            if(clearNum === 26) congratulations();
          })
        }else{
          openCards.forEach((el: HTMLElement) => {
            el.classList.remove("is-open");
          });
        }
        waitFlag = false;
      }, 800);
    }
  }
  function congratulations() {
    document.querySelector(".congratulations")?.classList.add("is-show");
  }

  function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  function setCards() {
    let numArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
    numArray = shuffleArray(numArray);

    const cardBox = document.querySelector(".js-box");
    numArray.forEach((el) => {
      const cardHtml =
        `
      <div class="card js-card" data-num="` +
        el +
        `">
        <div class="card_back">
          <img src="./assets/img/card_back.png" alt=""/>
        </div>
        <div class="card_front">
          <img src="./assets/img/card_spade_` +
        el +
        `.png" alt=""/>
        </div>
      </div>
      `;
      cardBox?.insertAdjacentHTML("beforeend", cardHtml);
    });
  }
};

window.addEventListener("DOMContentLoaded", () => {
  main();
});
