document.addEventListener("DOMContentLoaded", function() {
    var navbarLinks = document.querySelectorAll(".navbar a");
    var currentPath = window.location.pathname;

    // Remove the leading slash from the current path
    var formattedPath = currentPath.startsWith('/') ? currentPath.substr(1) : currentPath;

    navbarLinks.forEach(function(link) {
        if (link.getAttribute("href") === formattedPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

function copyCode() {
    var code = document.getElementById("codebox");
    if (code) {
        if (document.body.createTextRange) { // For Internet Explorer
            var range = document.body.createTextRange();
            range.moveToElementText(code);
            range.select();
        } else if (window.getSelection) { // For other browsers
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(code);
            selection.removeAllRanges();
            selection.addRange(range);
        }

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copy command was ' + msg);
            showCopyMessage();
        } catch (err) {
            console.log('Oops, unable to copy');
        }

        if (window.getSelection) { // Deselect the text
            window.getSelection().removeAllRanges();
        }
    } else {
        console.log('Element with id "codebox" was not found.');
    }
}

function showCopyMessage() {
    var message = document.getElementById("copy-message");
    message.style.display = "block";
    setTimeout(function() {
        message.style.display = "none";
    }, 2000); // Message will disappear after 2 seconds
}
