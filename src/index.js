function generatePoem(event) {
    event.preventDefault();

new Typewriter("#poem", {
  strings: "Here's to the next year, to the best year yet",
  autoStart: true,
  cursor: "",
  delay: 10,
});
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);