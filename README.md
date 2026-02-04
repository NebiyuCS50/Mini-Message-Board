# Mini-Message-Board

Mini-Message-Board is a simple Express.js application that allows users to post short messages and view them in a styled message board. Each message can be viewed in detail, and new messages can be added through a form.

## Features

- View all messages on the main page
- Add a new message with a username and text
- View details of each message (user, date, time, and content)

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- HTML/CSS (inline styles)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NebiyuCS50/Mini-Message-Board.git
   cd Mini-Message-Board
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the server with:

```bash
npm start
```

Or, for development with auto-reload:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app.js` - Main application file
- `routes/home.js` - Message routes and message data
- `views/` - EJS templates for the UI
  - `index.ejs` - Main message board
  - `form.ejs` - Form to add a new message
  - `detalis.ejs` - Details page for a single message

## Usage

- Click "+ Add New Message" to add a message
- Click "Details" on any message to view its details

## License

MIT
