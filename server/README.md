# MERN AI App – Backend (Server)

This is the backend (server) component of the MERN AI App, built using **Node.js**, **Express**, and **MongoDB**.  
It provides RESTful APIs for generating AI responses using **OpenRouter** and storing conversations in MongoDB.

---

## Features

- Modular & scalable architecture
- AI integration using OpenRouter (free AI models)
- MongoDB integration with Mongoose
- Clean separation of controller, service, routes & validation
- Environment-based configuration
- Secure backend-only AI API calls
- Nodemon support for development

---

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- Axios
- OpenRouter AI API
- Nodemon

---
## Project Structure
```
server/
├── nodemon.json
├── package.json
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── ai.model.js
│   └── modules/
│       └── ai/
│           ├── ai.controller.js
│           ├── ai.routes.js
│           ├── ai.service.js
│           └── ai.validator.js
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB instance (local or cloud)

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

---

## ⚙️ Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=
MONGODB_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key

### Running the Server
- In development mode (with auto-reload):
  ```sh
  npm run dev
  ```
- In production mode:
  ```sh
  npm start
  ```

### API Endpoints
The main AI-related endpoints are available under `/api/ai`. For detailed routes, see `src/modules/ai/ai.routes.js`.

## Scripts
- `npm run dev` — Start server with nodemon
- `npm start` — Start server in production mode

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.
