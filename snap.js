document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.body.classList.add("explode"); // Explosion effect

        setTimeout(function() {
            window.location.href = "https://www.google.com";
        }, 1000);
    }
});
