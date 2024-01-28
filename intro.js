const introText = "Hi 👋 , \nI am Debrup, a Cryptography Enthusiast.🧔🏻‍♂️";
const additionalInfo = "Delving into the realms of secure communication, I dedicate some part of my time to researching and implementing groundbreaking cryptographic solutions📃 .  My journey is chronicled here, where I share insights, tutorials, and innovative projects.\n\nExplore my latest blogs, YouTube videos, and collaborations👾. Engage with my content and let's unlock the mysteries of cryptography together🚘.";
const interestText = "My areas of interest include Zero-Knowledge Proofs (ZKP), Multi-Party Computation (MPC), Homomorphic Encryption, and Post-Quantum Cryptography, among others.";

let introIndex = 0, additionalIndex = 0, interestIndex = 0;

function typeWriter(elementId, text, index, callback) {
    if (index < text.length) {
        let charToAdd = text.charAt(index);
        let currentContent = document.getElementById(elementId).innerHTML;
        let isHi = (elementId === "introText" && text.substring(0, index + 1) === "Hi,");
        let updatedContent = isHi ? `<span class='hi'>${text.substring(0, index + 1)}</span>` : currentContent + charToAdd;

        document.getElementById(elementId).innerHTML = updatedContent;
        setTimeout(() => typeWriter(elementId, text, index + 1, callback), 50); // Adjust typing speed
    } else if (callback) {
        callback();
    }
}

function startAdditionalInfo() {
    typeWriter("additionalInfo", additionalInfo, additionalIndex, startInterestInfo);
}

function startInterestInfo() {
    typeWriter("interestText", interestText, interestIndex, null);
}

window.onload = () => {
    typeWriter("introText", introText, introIndex, startAdditionalInfo);
};
