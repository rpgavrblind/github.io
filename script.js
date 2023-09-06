document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("rollButton");
    const resultElement = document.getElementById("result");

    rollButton.addEventListener("click", function () {
        const rollResult = Math.floor(Math.random() * 6) + 1;

        // Mapeie o número sorteado para sua descrição em áudio
        const numberToAudioDescription = {
            1: 'Um',
            2: 'Dois',
            3: 'Três',
            4: 'Quatro',
            5: 'Cinco',
            6: 'Seis'
        };

        const numberInWords = numberToAudioDescription[rollResult];
        const resultDescription = `Você rolou um dado de 6 lados e obteve o resultado ${numberInWords}.`;

        // Fale o resultado usando a API Web Speech Synthesis
        const speech = new SpeechSynthesisUtterance(resultDescription);
        speech.lang = 'pt-BR'; // Defina o idioma para português (Brasil)

        window.speechSynthesis.speak(speech);

        // Exibe o resultado na página
        resultElement.textContent = `Resultado: ${numberInWords}`;
    });
});
