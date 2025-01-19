# Rocket League API

## Description
This project provides a REST API to interact with Rocket League game data via RapidAPI. The API allows you to:
- Fetch player profiles.
- Retrieve specific player statistics (e.g., number of goals).
- Generate dynamic link previews for social media platforms like Telegram, Discord, and X (formerly Twitter).

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory and add the following environment variables:**
   ```env
   RAPIDAPI_KEY=your_rapidapi_key
   RAPIDAPI_HOST=rocket-league1.p.rapidapi.com
   PORT=3000
   ```

4. **Start the project:**
   ```bash
   npm start
   ```

## Routes

### 1. Fetch Player Profile

**URL:**
```
GET /api/rocket/profile/:playerId
```

**Description:** Returns player profile information based on the provided `playerId`.

**Example Request:**
```
http://localhost:3000/api/rocket/profile/930226ec26174a988dff84898ee13ded
```

**Example Response:**
```json
{
  "name": "mcdoomington",
  "tag": "mcdoomington#5433",
  "presence": "Offline"
}
```

### 2. Fetch Player Statistics

**URL:**
```
GET /api/rocket/stat/:playerId/:stat
```

**Description:** Returns specific player statistics (e.g., goals scored) based on the provided `playerId` and `stat` parameter.

**Example Request:**
```
http://localhost:3000/api/rocket/stat/930226ec26174a988dff84898ee13ded/goals
```

**Example Response:**
```json
{
  "value": 968,
  "name": "Goals"
}
```

### 3. Generate Player Profile Preview

**URL:**
```
GET /api/rocket/profile/:playerId/preview
```

**Description:** Returns an HTML page with Open Graph and Twitter Card meta tags for creating dynamic link previews for the player's profile.

**Example Request:**
```
http://localhost:3000/api/rocket/profile/930226ec26174a988dff84898ee13ded/preview
```

**Example HTML Preview:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="mcdoomington's Rocket League Profile" />
    <meta property="og:description" content="Tag: mcdoomington#5433, Presence: Offline" />
    <meta property="og:image" content="https://example.com/images/placeholder.png" />
    <meta property="og:url" content="http://localhost:3000/api/rocket/profile/930226ec26174a988dff84898ee13ded" />
    <meta name="twitter:card" content="summary_large_image" />
    <title>mcdoomington's Profile</title>
</head>
<body>
    <h1>mcdoomington's Rocket League Profile</h1>
    <p>Tag: mcdoomington#5433</p>
    <p>Presence: Offline</p>
</body>
</html>
```

### 4. Generate Player Statistics Preview

**URL:**
```
GET /api/rocket/stat/:playerId/:stat/preview
```

**Description:** Returns an HTML page with Open Graph and Twitter Card meta tags for creating dynamic link previews for specific player statistics.

**Example Request:**
```
http://localhost:3000/api/rocket/stat/930226ec26174a988dff84898ee13ded/goals/preview
```

**Example HTML Preview:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="Rocket League Stat: Goals" />
    <meta property="og:description" content="Player: 930226ec26174a988dff84898ee13ded, Goals: 968" />
    <meta property="og:image" content="https://example.com/images/stats.png" />
    <meta property="og:url" content="http://localhost:3000/api/rocket/stat/930226ec26174a988dff84898ee13ded/goals" />
    <meta name="twitter:card" content="summary_large_image" />
    <title>Goals for 930226ec26174a988dff84898ee13ded</title>
</head>
<body>
    <h1>Stat: Goals</h1>
    <p>Player: 930226ec26174a988dff84898ee13ded</p>
    <p>Value: 968</p>
</body>
</html>
```

## Usage Examples

1. **Fetch Player Profile:**
   ```bash
   curl --request GET \
        --url http://localhost:3000/api/rocket/profile/930226ec26174a988dff84898ee13ded
   ```

2. **Fetch Player Statistics (Goals):**
   ```bash
   curl --request GET \
        --url http://localhost:3000/api/rocket/stat/930226ec26174a988dff84898ee13ded/goals
   ```

3. **Generate Player Profile Preview:**
   ```bash
   curl --request GET \
        --url http://localhost:3000/api/rocket/profile/930226ec26174a988dff84898ee13ded/preview
   ```

4. **Generate Player Statistics Preview:**
   ```bash
   curl --request GET \
        --url http://localhost:3000/api/rocket/stat/930226ec26174a988dff84898ee13ded/goals/preview
   ```

## Dependencies

- **Express**: For creating the REST API.
- **Axios**: For interacting with external APIs via RapidAPI.
- **dotenv**: For managing environment variables.

## License
This project is licensed under the MIT License. Feel free to use and modify it for your purposes.

