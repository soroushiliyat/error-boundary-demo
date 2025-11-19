# 🧪 Error Boundary Demo – React + TypeScript

This project demonstrates how to handle runtime errors in React using a custom `ErrorBoundary` component. It is built with **Vite + TypeScript** and is designed to showcase professional error handling for junior React developers.

##Live Demo:
https://error-boundary-demo-one.vercel.app/


## 🚀 Features

- ✅ Custom `ErrorBoundary` class component
- ✅ Fallback UI to prevent app crashes
- ✅ Clear separation between safe and buggy components
- ✅ Clean project structure with Vite + TypeScript

## 📁 Project Structure

src/ ├── components/ │   ├── ErrorBoundary.tsx      // Error handling logic │   ├── BuggyComponent.tsx     // Simulates a runtime error │   └── SafeComponent.tsx      // Renders safely ├── App.tsx                    // Combines components ├── main.tsx                   // Entry point └── index.css                  // Basic styling


## 🧪 How It Works

- `SafeComponent` renders normally.
- `BuggyComponent` throws an error (`user.name` on null).
- `ErrorBoundary` catches the error and displays a fallback UI instead of crashing the app.

📌 Purpose
This project is built to demonstrate error handling skills in React for portfolio and job interviews. It shows that the developer understands how to isolate errors and protect the user experience.

Made with 💻 by a Junior React Developer

---

اگه خواستی، می‌تونم badgeهای حرفه‌ای (Vite, TypeScript, GitHub Actions) هم به README اضافه کنم یا یه کاور تصویری برای ریپازیتوری طراحی کنیم. بریم سراغش؟ 😎



