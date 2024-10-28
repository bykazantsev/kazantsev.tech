const texts = ["kazantsev.tech", "python3 kazantsev.tech", "lua kazantsev.tech", "fastapi dev kazantsev.tech", "java -jar kazantsev.tech", "bash kazantsev.tech", "SELECT * FROM kazantsev.tech", "� ���?", "لا شيء لتفعله؟"];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

const textElement = document.querySelector('.text-container .text');


function type() {
    const currentText = texts[currentTextIndex];

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        textElement.textContent += currentText.charAt(currentCharIndex);
        currentCharIndex++;
    }

    if (!isDeleting && currentCharIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 150);
    }
}

type();