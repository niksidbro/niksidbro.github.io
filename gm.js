async function loadGame() {
    // Array of encoded JSON URLs
    const encodedUrls = [
        "aHR0cHM6Ly9nYW1lcy1tYXphLnBhZ2VzLmRldi9nYW1lcy5qc29u",
        "aHR0cHM6Ly9uaWtzaWRicm8uZ2l0aHViLmlvL2dhbWUuanNvbg==",
        // Add more encoded URLs as needed
    ];

    // Current page ka name get karo
    const pageName = window.location.pathname.split("/").pop();

    if (!pageName) {
        console.error("Page name not found!");
        return;
    }

    let lastError = null;

    for (const encodedUrl of encodedUrls) {
        try {
            const jsonUrl = atob(encodedUrl);
            console.log(`Trying to fetch from: ${jsonUrl}`);

            const response = await fetch(jsonUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            if (data[pageName]) {
                console.log(`Game found for ${pageName}`);
                document.getElementById("gameFrame").src = data[pageName];
                return; // Successfully loaded, exit the function
            } else {
                console.log(`Game not found for ${pageName} in this JSON`);
            }
        } catch (error) {
            console.error(`Error with URL ${atob(encodedUrl)}:`, error);
            lastError = error;
            // Continue to the next URL if this one fails
        }
    }

    // If we've gone through all URLs and haven't returned, show an error
    console.error("Game not found in any of the JSON sources!", lastError);
    alert("Failed to load the game. Please check the console for more details.");
}

// Page load hone par function run karo
window.onload = loadGame;
