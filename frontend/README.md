# Terminal Chat

A customer-support chat interface styled as a dark hacker/developer terminal console, built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Sidebar.jsx          top nav, chat list, connection status
    ChatList.jsx          groups conversations into ONLINE / OFFLINE
    ChatListItem.jsx       single conversation row
    ChatHeader.jsx         active conversation header + controls
    MessageList.jsx        scrollable message log, auto-scrolls to bottom
    Message.jsx             single terminal-log-style message line
    MessageComposer.jsx     command-line style input + send button
    StatusIndicator.jsx     small pulsing online/offline dot
    TerminalButton.jsx      bracket-style terminal button
  data/
    mockData.js             mock users and conversation threads
  App.jsx                   layout + mobile list/chat view state
  main.jsx                  React entry point
  index.css                 Tailwind directives + global styles
```

## Notes

- All data is currently mocked in `src/data/mockData.js`. Swap this out for a real API / WebSocket (Express + Socket.IO) layer when ready — components already receive data via props, so wiring in live data shouldn't require restructuring.
- The color palette and font are defined in `tailwind.config.js` under the `term` color namespace (`term-bg`, `term-green`, `term-cyan`, etc.) so the whole theme can be adjusted from one place.
- Mobile (<768px) shows the conversation list first; selecting a conversation swaps to the chat view with a back link in the header.
