# 🧮 Modern Glassmorphism Calculator

A sleek, responsive, and functional web-based arithmetic calculator built with modern CSS techniques and vanilla JavaScript. This project features a professional "Glassmorphism" UI design with full keyboard support.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

-   **Glassmorphism UI**: Beautiful frosted-glass effect using `backdrop-filter` and semi-transparent layers.
-   **Full Arithmetic Operations**: Support for addition, subtraction, multiplication, division, and percentage.
-   **Keyboard Support**: Use your physical keyboard to type numbers and operators.
    -   `Enter` for result.
    -   `Backspace` for single character deletion.
    -   `Escape` for all-clear (AC).
-   **Visual Feedback**: Buttons highlight when pressed (both via mouse and keyboard).
-   **Error Handling**: Graceful handling of division by zero and invalid expressions.
-   **Responsive Design**: Works perfectly on mobile and desktop screens.

## 🎨 Design Elements

-   **Background**: Deep slate-to-dark gradient (`#0B1220` to `#1E293B`).
-   **Typography**: Clean "Segoe UI" / Tahoma stack.
-   **Color Palette**:
    -   🟣 Operators: Vibrant Purple
    -   🟡 Equals: Amber/Gold
    -   🔴 Clear: Soft Red
    -   🟠 Delete: Orange

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/Calculator_Task02.git
    ```
2.  **Open the project**:
    Simply open `index.html` in any modern web browser.

## 📂 Project Structure

```text
.
├── index.html   # Structure and UI Layout
├── style.css    # Modern Styling & Glassmorphism
└── script.js    # Logic, Keyboard Support & Animations
```

## 🛠️ Logic Overview

The calculator uses a string-buffer approach to build expressions, which are then evaluated safely using JavaScript's `eval()` within a `try...catch` block to ensure stability. It also includes dynamic font-resizing for long results to maintain UI integrity.

---
Developed with ❤️ by [Your Name/Handle]
