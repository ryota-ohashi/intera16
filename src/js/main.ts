import '../scss/style.scss';
import toggleCard from "./modules/toggleCard";

const main = () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", function (e:Event) {
      if (e.target instanceof HTMLElement) {
        toggleCard(e.target);
      }
    })
  });
}

window.addEventListener('DOMContentLoaded', () => {
  main();
});