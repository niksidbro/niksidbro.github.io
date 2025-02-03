document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") { // Panic Key
        document.body.classList.add("fade"); // Fade out effect
        createDustEffect(); // Call animation function

        setTimeout(function() {
            window.location.href = "https://www.google.com"; // Redirect after effect
        }, 1500); // 1.5s ke baad redirect
    }
});

function createDustEffect() {
    for (let i = 0; i < 100; i++) { // 100 particles create karne ke liye
        let particle = document.createElement("div");
        particle.className = "particle";
        document.body.appendChild(particle);

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let size = Math.random() * 10 + 5;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        setTimeout(() => particle.remove(), 1500); // 1.5s baad particles remove ho jayenge
    }
}
