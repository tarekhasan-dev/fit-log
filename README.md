# FitLog

FitLog is a workout library and training planner. Explore lifts, check exercise details, build today's plan, and save workouts for later.

## Technologies Used

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide React
- React Hot Toast
- Browser localStorage

## Features

1. Browse workout cards loaded from the FitLog API.
2. Open a workout's details to see its image, equipment, difficulty, sets, reps, duration, calories, rating, and instructions.
3. Add a workout to Today's Plan and receive toast feedback.
4. Save a workout for later and receive toast feedback.
5. See Plan and Saved workout counts in the navbar.
6. View exercise count, total minutes, and total calories on the My Plan page.
7. Switch between Today's Plan and Saved workouts and remove items from either list.
8. Keep planned and saved workouts in localStorage across page reloads.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API

- All workouts: https://api.api-store.workers.dev/api/fitlog
- Single workout: https://api.api-store.workers.dev/api/fitlog/:id

## Author

Tarek Hasan
