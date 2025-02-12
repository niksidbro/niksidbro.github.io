async function loadGame() {
    // Array of encoded JSON URLs
    const encodedUrls = [
        "aHR0cHM6Ly9nYW1lcy1tYXphLnBhZ2VzLmRldi9nYW1lcy5qc29u",
        "aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2dhbWVzLW1hemEvZ2FtZXMtbWF6YS5naXRodWIuaW8vbWFpbi9nYW1lcy5qc29u",
        // Add more encoded URLs as needed
    ];

    // Decode URLs
    const jsonUrls = encodedUrls.map(url => atob(url));

    // Current page ka name get karo
    const pageName = window.location.pathname.split("/").pop();

    if (!pageName) {
        alert("Page name not found!");
        return;
    }

    for (const jsonUrl of jsonUrls) {
        try {
            // JSON file fetch karo
            const response = await fetch(jsonUrl);
            const data = await response.json();

            // JSON me game URL check karo aur set karo
            if (data[pageName]) {
                document.getElementById("gameFrame").src = data[pageName];
                return; // Successfully loaded, exit the function
            }
        } catch (error) {
            console.error(`Error loading game from ${jsonUrl}:`, error);
            // Continue to the next URL if this one fails
        }
    }

    // If we've gone through all URLs and haven't returned, show an error
    alert("Game not found in any of the JSON sources!");
}

// Page load hone par function run karo
window.onload = loadGame;
