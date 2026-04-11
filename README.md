# BPL Dream 11

Build your ultimate fantasy cricket squad with a clean, responsive, and modern player selection experience.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5-ff69b4)

## Overview

BPL Dream 11 is a responsive fantasy cricket team builder created as a frontend project with React, Vite, Tailwind CSS, and DaisyUI. The application focuses on a smooth user experience where users can claim credits, browse player cards, build a dream squad, and manage their selected players through a clear and polished interface.

This project reflects an effort to write clean frontend code, organize the UI into reusable components, and create a visually engaging single-page experience that feels modern, practical, and easy to navigate.

## Key Features

- Responsive landing page with a bold cricket-themed hero section
- Coin-based player selection flow with live balance updates
- Free credit claim interaction from the banner section
- Player showcase powered by local JSON data
- Toggle between available players and selected players
- Duplicate player prevention during selection
- Remove selected players and automatically refund coins
- Toast notifications for important actions and feedback
- Mobile-friendly navbar with collapsible menu
- Newsletter and footer sections for a complete landing page experience

## Tech Stack

| Category | Technologies |
| --- | --- |
| Frontend | React 19, Vite |
| Styling | Tailwind CSS 4, DaisyUI |
| UI Enhancements | React Icons, Lucide React, React Toastify |
| Data Handling | Local JSON, Fetch API, React Suspense |
| Development Tools | ESLint, npm |
| Design Approach | Responsive Design, Component-Based UI, Clean Code |

## Live Demo

Live Site: https://book-vibe-siam11.netlify.app

Repository: https://github.com/Khalid-Sifullah-Siam/BPL-DREAM-11-siam8

## Installation & Setup

Follow these steps to run the project locally on your machine:

1. Clone the repository

```bash
git clone https://github.com/Khalid-Sifullah-Siam/BPL-DREAM-11-siam8.git
```

2. Move into the project folder

```bash
cd BPL-DREAM-11-siam8
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open the local server URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## How to Use

1. Open the homepage and explore the hero banner.
2. Click `Claim Free Credit` to increase your available coins.
3. Browse the available player cards in the main section.
4. Choose players based on your remaining coin balance.
5. Switch to the selected tab to review your squad.
6. Remove any selected player to free up coins and adjust your team.
7. Explore the newsletter and footer sections for the full landing page flow.

## Project Structure

```text
public/
- data.json

src/
- Components/
  - AvailablePlayers/
  - Banner/
  - Footer/
  - Navbar/
  - Newsletter/
  - Players/
  - SelectedPlayers/
- assets/
- App.jsx
- App.css
- index.css
- main.jsx
```

## What I Learned

- How to build a responsive single-page fantasy sports interface using reusable React components
- How to manage UI state like coin balance, selected players, and tab switching in React
- How to separate player data from the UI using a local JSON source
- How to improve the user experience with instant visual feedback using toast notifications
- How Tailwind CSS and DaisyUI help speed up development while keeping the design polished and consistent

## Author

Khalid Sifullah Siam

GitHub: [@Khalid-Sifullah-Siam](https://github.com/Khalid-Sifullah-Siam)

## Final Note

This project was built from a junior developer perspective with a strong focus on responsive layout, reusable components, clear user interaction, and clean frontend structure. The goal was not only to make the interface visually appealing, but also to keep the code organized, readable, and easy to extend in future updates.
