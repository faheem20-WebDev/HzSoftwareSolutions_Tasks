let calculation = "";
const screen = document.getElementById("result-screen");

// Clear all
function clearAll() {
    calculation = "";
    screen.value = "";
    screen.style.fontSize = "2rem";
}

// Delete one character
function deleteOne() {
    calculation = calculation.slice(0, -1);
    screen.value = calculation;
}

// Calculate result with error handling
function result() {
    try {
        if (calculation.trim() === "") return;
        let res = eval(calculation);
        if (!isFinite(res)) throw new Error("Math Error");
        calculation = res.toString();
        screen.value = calculation;

        if (calculation.length > 8) {
            screen.style.fontSize = "1.5rem";
            screen.style.paddingRight = "5px";
            screen.style.textAlign = "right";
        }
    } catch (err) {
        screen.value = "Error";
        calculation = "";
    }
}

// Append value to display
function appendToDisplay(value) {
    calculation += value;
    screen.value = calculation;
    screen.style.fontSize = "2rem";
    screen.style.paddingRight = "10px";
    screen.style.textAlign = "right";
}

// 🔥 Visual press effect function
function highlightButton(value) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        if (btn.value === value || (value === "Enter" && btn.value === "=")) {
            btn.classList.add("active-key");
            setTimeout(() => btn.classList.remove("active-key"), 150);
        }
        if (value === "Backspace" && btn.classList.contains("clear")) {
            btn.classList.add("active-key");
            setTimeout(() => btn.classList.remove("active-key"), 150);
        }
        if (value === "Escape" && btn.classList.contains("all-clear")) {
            btn.classList.add("active-key");
            setTimeout(() => btn.classList.remove("active-key"), 150);
        }
    });
}

// Keyboard support with UI feedback
document.addEventListener("keydown", function(event) {
    const key = event.key;

    // Numbers and operators
    if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", "."].includes(key)) {
        appendToDisplay(key);
        highlightButton(key);
    } 
    // Enter key -> =
    else if (key === "Enter") {
        result();
        highlightButton("Enter");
    } 
    // Backspace key -> delete
    else if (key === "Backspace") {
        deleteOne();
        highlightButton("Backspace");
    } 
    // Escape key -> clear
    else if (key === "Escape") {
        clearAll();
        highlightButton("Escape");
    }
});
