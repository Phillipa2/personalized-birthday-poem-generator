function displayPoem(response) {
  new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  cursor: "",
  delay: 10,
});
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "92414bb17980of4b8b810faf837183tc";
    let prompt = `User Instructions: Generate a Personalized ${instructionsInput.value}`;
    let context = "You are a creative poet who writes deeply personal and emotionally touching birthday poems based on the details and memories provided. Your mission is to generate a 6 line poem in basic HTML. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<span class="blink">⏳ Generating a birthday poem about ${instructionsInput.value}..</span>`;
    
    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    
    axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);