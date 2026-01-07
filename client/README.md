# MERN AI App – Client

A modern React + Vite client for an AI-powered application, featuring a clean flow-based UI for interacting with AI models.

## Features

-  **Vite + React (latest)**: Fast, modern development experience.
-  **AI Integration**: Ask questions and get instant answers from an AI backend.
-  **Flow-based UI**: Node-based input and result visualization using React Flow.
-  **Hot Reloading**: Instant feedback during development.
-  **Notifications**: User feedback using react-hot-toast.
-  **Axios**: Clean API communication layer.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
cd client
npm install


### Running the App

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Build for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

```
client/
├── public/
├── src/
│   ├── api/axios.js         # Axios instance for API calls
│   ├── components/
│   │   ├── FlowCanvas.jsx   # Main flow UI
│   │   └── nodes/
│   │       ├── InputNode.jsx
│   │       └── ResultNode.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## API

The client expects an AI backend running at `http://localhost:5000/api` with an `/ask-ai` endpoint.

## Customization

- Update the API base URL in `src/api/axios.js` if your backend runs elsewhere.
- Modify node styles and logic in `src/components/nodes/` for custom UI/UX.

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

## License

[MIT](LICENSE)
