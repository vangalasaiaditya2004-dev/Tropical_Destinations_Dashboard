# Tropical Destinations Dashboard

A beginner-friendly ReactJS project that displays tropical travel destinations, includes live search, and provides a simple booking form. The code is intentionally simple and uses functional components, React Hooks, and plain CSS.

## Features

- Responsive navbar with Home, About, Schedule, Membership, and Pricing links
- Tropical hero section with a call-to-action button
- Dynamic destinations section powered by an external API
- Search input that filters destinations by name while typing
- Empty state message: `No such destination`
- Student discount promotion section
- Mock booking form with Name, Email, Date, and Destination fields
- Mobile-first responsive layout using Flexbox, CSS Grid, and media queries

## Tech Stack

- ReactJS
- Vite
- JavaScript
- Plain CSS
- Fetch API

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Create a production build:

```bash
npm run build
```

## API Details

The destinations are fetched from:

```text
https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/19e5009c-c751-4324-a3fe-3a29d46587f2_destinationData.json
```

The app uses `useEffect` to call the API when the `Destinations` component loads and `useState` to store:

- destination data
- search text
- loading state
- error message

## Folder Structure

```text
src/
|
|-- components/
|   |-- Navbar/
|   |   |-- index.jsx
|   |   |-- index.css
|   |-- HeroSection/
|   |   |-- index.jsx
|   |   |-- index.css
|   |-- SearchBar/
|   |   |-- index.jsx
|   |   |-- index.css
|   |-- Destinations/
|   |   |-- index.jsx
|   |   |-- index.css
|   |-- DestinationCard/
|   |   |-- index.jsx
|   |   |-- index.css
|   |-- Promotions/
|   |   |-- index.jsx
|   |   |-- index.css
|   |-- BookingForm/
|   |   |-- index.jsx
|   |   |-- index.css
|
|-- assets/
|-- App.jsx
|-- main.jsx
|-- index.css
```

## Responsive Design

The layout is mobile-first. Destination cards use a single column on small screens, two columns on tablets, and three columns on desktop screens. The navbar wraps naturally on smaller screens, and the booking form changes from one column to two columns on wider screens.
