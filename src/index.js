function displayPoem(response) {
  new Typewriter("#response", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateResponse(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2ab48f58932e542cdo049f3057b190t0";
  let context =
    "You are a kind, supportive mental health journaling companion.Your role is to listen, reflect, and help users process their emotions in a gentle and non-judgmental way.Never offer medical advice or diagnoses.Encourage mindfulness, gratitude, and self-kindness.Keep your responses under 150 words.End each message with a warm affirmation or gentle reminder.Please sign with SheCodesAI inside a <strong> element at the end of the response and let it be inside a </br> element.";
  let prompt = `Generate a response about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating response");
  console.log(`Prompt ${prompt}`);
  console.log(`Context ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let responseFormElement = document.querySelector("#response-generator-form");
responseFormElement.addEventListener("submit", generateResponse);
