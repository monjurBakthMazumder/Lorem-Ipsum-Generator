function generateLorem() {
    const numWords = document.getElementById("input").value;
    const outputElement = document.getElementById("output");
    const wordCountElement = document.getElementById("wordCount");

    if (!numWords || numWords <= 0) {
        outputElement.textContent = "Please enter a valid number!";
        wordCountElement.textContent = "Word Count: 0";
        return;
    }

    let loremText = '';
    const styles = ['bold', 'italic', 'underline'];
    const sampleWords = [
        "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
        "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "enim", "ad", "minim", "veniam"
    ];

    for (let i = 0; i < numWords; i++) {
        let word = sampleWords[Math.floor(Math.random() * sampleWords.length)];
        loremText += applyRandomStyles(word, styles) + ' ';
    }

    outputElement.innerHTML = loremText;
    wordCountElement.textContent = `Word Count: ${numWords}`;
}

function applyRandomStyles(word, styles) {
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    return `<span style="${randomStyle === 'bold' ? 'font-weight: bold;' : randomStyle === 'italic' ? 'font-style: italic;' : 'text-decoration: underline;'}">${word}</span>`;
}

function copyToClipboard() {
    const outputElement = document.getElementById("output");
    const textToCopy = outputElement.textContent;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            showAlert();
        })
        .catch(err => console.error('Error copying text: ', err));
}

function showAlert() {
    const alertElement = document.getElementById("alert");
    alertElement.classList.add("show");
    setTimeout(() => alertElement.classList.remove("show"), 2000);
}

function downloadText() {
    const outputElement = document.getElementById("output");
    const text = outputElement.textContent;

    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'lorem_ipsum.txt';
    link.click();
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function clearText() {
    document.getElementById("output").textContent = "Your Lorem Ipsum text will appear here...";
    document.getElementById("wordCount").textContent = "Word Count: 0";
}

function randomizeText() {
    const numWords = document.getElementById("input").value;
    if (numWords && numWords > 0) {
        generateLorem();
    }
}

