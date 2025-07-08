# 🌦️ Weather-Based Outfit Recommender

A simple, elegant React + TypeScript app that lets users search for the current weather in any city and get real-time outfit suggestions based on conditions like temperature, humidity, and weather type.

---

## 🚀 Features

### 🔍 Core Functionality

- **City Search Input**
  - Enter any city name to fetch weather data (using OpenWeatherMap or a mock API).
  
- **Weather Display**
  - Shows:
    - Temperature
    - Weather condition (e.g., sunny, cloudy, rainy)
    - Wind speed
    - Humidity
  
- **Outfit Recommendation**
  - Smart suggestions like:
    - "Take an umbrella"
    - "Wear a jacket"
    - "Put on sunglasses"

- **Search History**
  - Displays the last 5 searched cities (in-memory only).

---

### 🛠️ Technical Stack

- **React** with **TypeScript**
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **ESLint + Prettier** for clean, consistent code
- **Flat ESLint config** with proper environment handling
- **OpenWeatherMap API** (or mock)

---

## 🎁 Bonus Features (Planned)

- 🔄 **Auto-suggest** on city input (debounced search)
- 🌗 **Theme toggle** (light/dark)
- 🎞️ **Smooth animations** for card transitions and weather state changes
- 📶 **Offline behavior mocking** with retry logic

---

## 📁 Folder Structure (Planned)

```
src/
├── api/               # Weather API logic (real or mocked)
├── components/        # UI components (SearchBar, WeatherCard, HistoryList, etc.)
├── features/          # Redux slices and feature-specific logic
├── hooks/             # Custom hooks
├── utils/             # Utility functions (e.g., recommendation logic)
├── assets/            # Icons, images
├── App.tsx
├── index.tsx
```

---

## ⚙️ Setup & Run

```bash
# Clone the repo
git clone https://github.com/nihalshameem/weather-based-outfit-recommander.git
cd weather-based-outfit-recommander

# Install dependencies
npm install

# Copy the example environment file and update URIs
cp .env.example .env
# Edit .env to set your OpenWeatherMap API key and any external URIs

# Start dev server
npm run start
```

> Tailwind, Redux Toolkit, ESLint, and TypeScript are already pre-configured.

---

## 📦 Available Scripts

| Command            | Description                  |
|--------------------|------------------------------|
| `npm run start`    | Start development server     |
| `npm run lint`     | Run ESLint checks            |
| `npm run build`    | Production build             |
| `npm run preview`  | Preview production build     |

---

## 🔒 Error Handling

- Invalid city? You'll get a helpful toast or message.
- API failure? Displays a user-friendly fallback and retry option.

---

## 📜 License

MIT © [Your Name]

---

## 🙏 Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/api) — for the weather API
- [Tailwind CSS](https://tailwindcss.com)
- [Redux Toolkit](https://redux-toolkit.js.org)

---

## ✨ Roadmap

- [ ] Add unit tests
- [ ] Integrate auto-suggest with debounce
- [ ] Add offline retry queue
- [ ] Polish with framer-motion or CSS animations

---

> Made with 💙 to help you dress for the weather, always.