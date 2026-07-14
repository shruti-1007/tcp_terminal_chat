# Terminal Chat Application

A simple terminal-based chat application built with Node.js using the built-in `net` module. It supports multiple clients communicating over TCP sockets without using libraries like Socket.IO.

## Features

* Multiple client support
* Real-time messaging
* Usernames
* Join and leave notifications
* Handles client disconnections

## Tech Stack

* Node.js
* `net`
* `readline`

## Project Structure

```text
terminal-chat/
├── client.js
├── server.js
├── package.json
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/shruti-1007/tcp_terminal_chat.git
cd tcp_chat
```

Start the server:

```bash
node server.js
```

Open one or more terminals and run:

```bash
node client.js
```

## What I Learned

* TCP client-server communication
* Socket programming with Node.js
* Event-driven programming
* Managing multiple client connections
* Broadcasting messages
* Handling client disconnects

## Future Improvements

* Private messaging
* Online users list
* Message timestamps
* Colored terminal output
* JSON message format
