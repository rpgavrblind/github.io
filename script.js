document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("rollButton");
    const resultElement = document.getElementById("result");

    rollButton.addEventListener("click", function () {
        const rollResult = Math.floor(Math.random() * 6) + 1;
        const resultDescription = `Você rolou um dado de 6 lados e obteve o resultado ${rollResult}`;

        // Fale o resultado usando a função de síntese de fala do navegador (Web Speech API)
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(resultDescription);
            speech.lang = 'pt-BR'; // Defina o idioma para português (Brasil)

            // Converte o número em palavras usando a API Web Speech Synthesis
            const numbersInWords = ["Um", "Dois", "Três", "Quatro", "Cinco", "Seis"];
            const numberInWords = numbersInWords[rollResult - 1];

            // Adiciona a descrição em áudio ao texto falado
            speech.text += `. O resultado é ${numberInWords}.`;

            window.speechSynthesis.speak(speech);

            // Exibe o resultado na página
            resultElement.textContent = `Resultado: ${rollResult}`;
        }
    });
});
