# HH30krpg

A web-based RPG set in the Horus Heresy era. Choose your Legion, play branching quests, and shape the fate of the galaxy.

## Features

- **Player Creation:** Choose your Legion, Primarch, and customize your skills.
- **Branching Quests:** Experience iconic arcs from the Horus Heresy book series, with multiple outcomes based on your choices.
- **Inventory & Wargear:** Collect wargear, items, and interact with NPCs from the lore.
- **Image Gallery:** Legion-themed and book-inspired images, scraped automatically.
- **Tech Stack:** React frontend, Node.js/Express backend, MongoDB database.

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- Python 3 (for image scraping)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env # Edit with your MongoDB URI
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Scraping Legion Images

Install Python dependencies:

```bash
cd backend/scraper
pip install requests beautifulsoup4 pymongo
python scrape_legion_images.py
```

### Environment Variables

Create `.env` in the backend folder:

```
MONGO_URI=mongodb://localhost:27017/horus_heresy_rpg
PORT=5000
```

## Folder Structure

```plaintext
HH30krpg/
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── scraper/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.js
│   └── package.json
├── README.md
```

## Customization

- Add more quests/arcs in `backend/models/Quest.js`.
- Style the frontend further in `frontend/src/assets/style.css`.
- Expand the image scraper for more Legion themes.

## License

MIT

---

For any questions, contact the author or open an issue!