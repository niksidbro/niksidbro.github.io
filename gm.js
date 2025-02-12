async function loadGame() {
    try {
        // Multiple encoded JSON file URLs
        const jsonUrls = [
            atob("aHR0cHM6Ly9nYW1lcy1tYXphLnBhZ2VzLmRldi9nYW1lcy5qc29u"),
            atob("aHR0cHM6Ly9hbHRlcm5hdGVnYW1lcy5wYWdlcy5kZXYvZ2FtZXMuanNvbg==")
        ];
        
        // Current page ka name get karo
        const pageName = window.location.pathname.split("/").pop();
        
        if (!pageName) {
            alert("Page name not found!");
            return;
        }
        
        // Loop through JSON URLs
        for (const url of jsonUrls) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                
                // JSON me game URL check karo aur set karo
                if (data[pageName]) {
                    document.getElementById("gameFrame").src = data[pageName];
                    return; // Game mil gaya toh function exit kar do
                }
            } catch (error) {
                console.error("Error fetching JSON from", url, error);
            }
        }
        
        // Agar kisi JSON me game nahi mila
        alert("Game not found in any JSON!");
        
    } catch (error) {
        console.error("Error loading game:", error);
    }
}

// Page load hone par function run karo
window.onload = loadGame;
