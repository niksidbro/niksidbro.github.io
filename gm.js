async function loadGame() {
    try {
        // Multiple encoded JSON file URLs
        const jsonUrls = [
            atob("aHR0cHM6Ly9uaWtzaWRicm8uZ2l0aHViLmlvL2dhbWUuanNvbg=="),
            atob("aHR0cHM6Ly9nYW1lcy1tYXphLnBhZ2VzLmRldi9nYW1lcy5qc29u"),
            // Add more URLs as needed
        ];

        // Current page ka name get karo
        const pageName = window.location.pathname.split("/").pop();
        
        if (!pageName) {
            alert("Page name not found!");
            return;
        }

        let gameFound = false;

        // Har JSON URL ko fetch karo aur check karo
        for (const jsonUrl of jsonUrls) {
            const response = await fetch(jsonUrl);
            const data = await response.json();
            
            // JSON me game URL check karo aur set karo
            if (data[pageName]) {
                document.getElementById("gameFrame").src = data[pageName];
                gameFound = true;
                break; // Game milne par loop se bahar aa jao
            }
        }

        if (!gameFound) {
            alert("Game not found in any JSON!");
        }
    } catch (error) {
        console.error("Error loading game:", error);
    }
}

// Page load hone par function run karo
window.onload = loadGame;
