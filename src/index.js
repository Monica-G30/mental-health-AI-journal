function generateResponse(event) {
  event.preventDefault();

  new Typewriter("#response", {
    strings: [
      " Holding on to those feelings of warmth can help brighten your day.",
    ],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let responseFormElement = document.querySelector("#response-generator-form");
responseFormElement.addEventListener("submit", generateResponse);
