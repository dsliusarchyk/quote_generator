/*
    ============================================
    Interactive Quote Generator - JavaScript
    Created by: Denvex 🚀
    Year: 2025
    ============================================
*/

console.log("%cCreated by Denvex 🚀", "color: #ffdd57; font-size: 16px; font-weight: bold;");

async function fetchQuote() {
    try {
        console.log("Fetching a new quote...");
        let response = await fetch("https://api.adviceslip.com/advice");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        console.log("Quote received:", data);

        document.getElementById("quote").innerText = `"${data.slip.advice}"`;
        document.getElementById("author").innerText = "";
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("quote").innerText = "Failed to load quote. Please try again.";
        document.getElementById("author").innerText = "❌ Check console for details.";
    }
}

// Create floating bubbles
function createBubbles() {
    const container = document.querySelector(".animation-container");

    for (let i = 0; i < 20; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        
        let size = Math.random() * 40 + 10; // Random size
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        bubble.style.left = `${Math.random() * 100}%`; // Random position
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random speed

        container.appendChild(bubble);

        // Remove after animation
        setTimeout(() => {
            bubble.remove();
        }, (Math.random() * 5 + 5) * 1000);
    }
}

// Refresh animation every 3 seconds
setInterval(createBubbles, 3000);

// Load quote on page load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("new-quote").addEventListener("click", fetchQuote);
    fetchQuote(); // Load the first quote
    createBubbles(); // Start animation
});
