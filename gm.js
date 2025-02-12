async function loadGame() {
    // Multiple JSON URLs (Encoded format me rakhe gaye hain)
    const jsonUrls = [
        atob("aHR0cHM6Ly9nYW1lcy1tYXphLnBhZ2VzLmRldi9nYW1lcy5qc29u"),  // JSON 1
        atob("aHR0cHM6Ly9uaWtzaWRicm8uZ2l0aHViLmlvL2dhbWUuanNvbg=="), // JSON 2
        atob("aHR0cHM6Ly9iYWNrYXAtZ2FtZXMuZGV2L2dhbWVzLmpzb24") // JSON 3
    ];

    let gameData = null;

    // JSON files ko ek ek karke fetch karne ki koshish karo
    for (const jsonUrl of jsonUrls) {
        try {
            const response = await fetch(jsonUrl, { cache: "no-cache" });
            
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            
            gameData = await response.json();
            console.log(`Successfully loaded JSON from: ${jsonUrl}`);
            break; // Agar ek JSON mil gaya, to loop yahin break ho jayega
        } catch (error) {
            console.warn(`Failed to load JSON from ${jsonUrl}:`, error);
        }
    }

    // Agar koi JSON bhi load nahi ho saka
    if (!gameData) {
        alert("Failed to load game data!");
        return;
    }

    // Current page ka name get karo
    const pageName = window.location.pathname.split("/").pop();

    if (!pageName) {
        alert("Page name not found!");
        return;
    }

    // JSON me game URL check karo aur set karo
    if (gameData[pageName]) {
        document.getElementById("gameFrame").src = gameData[pageName];
    } else {
        alert("Game not found in JSON!");
    }
}

// Page load hone par function run karo
window.onload = loadGame;
