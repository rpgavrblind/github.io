document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("rollButton");
    const resultElement = document.getElementById("result");
    const audioElement = document.getElementById("audioElement");

    let sound = new Howl({
        src: ["dice_roll.mp3"]
    });

    const audioDescriptions = [
        "Um",
        "Dois",
        "Três",
        "Quatro",
        "Cinco",
        "Seis"
    ];

    rollButton.addEventListener("click", function () {
        const rollResult = Math.floor(Math.random() * 6) + 1;
        const resultDescription = `Você rolou um dado de 6 lados e obteve o resultado ${rollResult}`;
        resultElement.textContent = `Resultado: ${rollResult}`;
        
        // Reproduz o som usando Howler.js
        sound.play();

        // Fale o resultado usando a função de síntese de fala do navegador (Web Speech API)
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(resultDescription + ". " + audioDescriptions[rollResult - 1]);
            speech.lang = 'pt-BR'; // Defina o idioma para português (Brasil)
            window.speechSynthesis.speak(speech);
        }
    });
});
