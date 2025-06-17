# 🥘 AI Recipe Generator

A React + Vite-based web application that uses AI to generate delicious recipes based on your input or preferences.

![Vite + React](https://img.shields.io/badge/Vite-React-blueviolet?logo=vite&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)


## 📸 Preview

> *Coming soon!* — Add a screenshot or GIF of your app here

## 🚀 Features

- 🧠 Generate recipes using AI (e.g. Hugging Face or OpenAI)
- 🍽️ Dynamic ingredients and cooking steps
- ⚡ Fast setup with Vite


## 📂 Folder Structure

src/
│
├── assets/ # Icons and images
├── components/ # Reusable UI components (optional)
├── ClaudeRecipe.jsx # AI-generated recipe component
├── Main.jsx # Main input & interaction
├── ai.js # AI API logic
├── header.jsx
├── index.jsx # App entry point
├── Ingredient.jsx # Ingredients view
└── App.jsx # Root component


---

## 🛠️ How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/younes69git/React_Project.git

# 2. Go into the project folder
cd React_Project

# 3. Install dependencies
npm install

# 4. Create a .env file
touch .env
# Add your API key:
# VITE_AI_TOKEN= 'your_token_here' or you can use key directly in ai.js

# 5. Start the dev server
npm run dev

```
Then visit: http://localhost:5173

🔒 Environment Variables
VITE_AI_TOKEN:	Your HuggingFace/OpenAI API token

🤝 Contributing
Pull requests are welcome! If you'd like to suggest improvements, feel free to fork and submit a PR.

