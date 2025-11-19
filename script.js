const input = document.getElementById("dayInput");
const btn = document.getElementById("generateBtn");
const container = document.getElementById("circleContainer");

btn.addEventListener("click", () => {
    const count = Number(input.value);
    container.innerHTML = ""; // clear previous circles

    for (let i = 0; i < count; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");

        const symbol = document.createElement("span");
        symbol.classList.add("symbol");

        circle.appendChild(symbol);

        // toggle logic
        circle.addEventListener("click", () => {
            if (symbol.textContent === "✖") {
                symbol.textContent = "✔";
                symbol.style.color = "#39ff14";
            } else {
                symbol.textContent = "✖";
                symbol.style.color = "#ff0033";
            }
        });

        container.appendChild(circle);
    }
});