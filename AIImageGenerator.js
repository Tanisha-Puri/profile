document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const textInput = document.getElementById("textInput");
    const imageContainer = document.getElementById("imageContainer");

    generateBtn.addEventListener("click", function () {
        const userInput = textInput.value;

        // Replace the API URL with the AI image generation API if available.
        const imageUrl = `https://picsum.photos/800/400/?${userInput}`;

        // Clear previous image
        imageContainer.innerHTML = "";

        // Create image element
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageContainer.appendChild(imageElement);
    });
});

