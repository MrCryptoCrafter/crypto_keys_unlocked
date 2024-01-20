document.addEventListener('DOMContentLoaded', function() {
    populateIterations();

    const form = document.getElementById('pbkdf2-form');
    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const password = document.getElementById('password').value;
        const salt = document.getElementById('salt').value;
        const iterations = parseInt(document.getElementById('iterations').value, 10);
        const keyLength = parseInt(document.getElementById('keyLength').value, 10);

        const { derivedKey, salt: usedSalt } = await pbkdf2(password, salt, iterations, keyLength / 8);

        document.getElementById('derived-key').textContent = derivedKey;
        document.getElementById('used-salt').textContent = usedSalt;
    });
});

function populateIterations() {
    const iterationsSelect = document.getElementById('iterations');
    for (let i = 1000; i <= 10000; i += 100) {
        const option = document.createElement('option');
        option.value = option.textContent = i;
        iterationsSelect.appendChild(option);
    }
}

// ...existing JavaScript code...

document.getElementById('copy-button').addEventListener('click', function() {
    const derivedKey = document.getElementById('derived-key').textContent;
    navigator.clipboard.writeText(derivedKey)
        .then(() => alert('Derived key copied to clipboard!'))
        .catch(err => console.error('Error in copying text: ', err));
});

document.getElementById('download-button').addEventListener('click', function() {
    const derivedKey = document.getElementById('derived-key').textContent;
    const usedSalt = document.getElementById('used-salt').textContent;
    const data = { derivedKey, usedSalt };
    downloadObjectAsJson(data, "pbkdf2-results");
});

function downloadObjectAsJson(exportObj, exportName) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // Required for Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
// ...existing JavaScript code...

// ...existing JavaScript code...

document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const icon = this.querySelector('i');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
        this.title = 'Hide Password'; // Updating tooltip
    } else {
        passwordInput.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
        this.title = 'Show Password'; // Updating tooltip
    }
});

// ...remaining JavaScript code...


// ...remaining JavaScript code for form handling...
