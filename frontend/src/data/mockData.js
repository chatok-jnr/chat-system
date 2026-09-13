export const USERS = [
  {
    id: "ar",
    initials: "AR",
    name: "Ayesha Rahman",
    status: "online",
    email: "ayesha.rahman@example.com",
    role: "Support agent",
    lastActive: "Active now",
  },
  {
    id: "ri",
    initials: "RI",
    name: "Rafiq Islam",
    status: "online",
    email: "rafiq.islam@example.com",
    role: "Support agent",
    lastActive: "Active now",
  },
  {
    id: "sa",
    initials: "SA",
    name: "Sadia Akter",
    status: "online",
    email: "sadia.akter@example.com",
    role: "Support lead",
    lastActive: "Active now",
  },
  {
    id: "mh",
    initials: "MH",
    name: "Mehedi Hasan",
    status: "offline",
    email: "mehedi.hasan@example.com",
    role: "Customer",
    lastActive: "3h ago",
  },
  {
    id: "tj",
    initials: "TJ",
    name: "Tania Jahan",
    status: "offline",
    email: "tania.jahan@example.com",
    role: "Customer",
    lastActive: "1d ago",
  },
];

// Only users with a thread here show up in the Chats list.
// Messages sent by the current user use from: "me" and carry a
// delivery status: "sent" | "delivered" | "seen".
export const MOCK_MESSAGES = {
  ar: [
    {
      id: 1,
      from: "them",
      user: "Ayesha Rahman",
      time: "10:22",
      text: "Hi, I placed an order yesterday but haven't received a confirmation email.",
    },
    {
      id: 2,
      from: "me",
      user: "You",
      time: "10:24",
      text: "Thanks for the help!",
      status: "delivered",
    },
    {
      id: 3,
      from: "me",
      user: "You",
      time: "10:25",
      text: "No problem. Let me know if you need anything else.",
      status: "seen",
    },
    {
      id: 4,
      from: "them",
      user: "Ayesha Rahman",
      time: "10:26",
      text: "Will do, appreciate the quick turnaround.",
    },
  ],
  ri: [
    {
      id: 1,
      from: "them",
      user: "Rafiq Islam",
      time: "10:47",
      text: "I have a problem with my order, it shows delivered but I never got it.",
    },
    {
      id: 2,
      from: "me",
      user: "You",
      time: "10:49",
      text: "Sorry to hear that. Can you share the order ID so I can look into it?",
      status: "sent",
    },
  ],
  sa: [
    {
      id: 1,
      from: "them",
      user: "Sadia Akter",
      time: "09:12",
      text: "Is there a way to change my shipping address after checkout?",
    },
    {
      id: 2,
      from: "me",
      user: "You",
      time: "09:15",
      text: "Yes, as long as the order hasn't shipped yet. Send me the order number.",
      status: "delivered",
    },
  ],
  mh: [
    {
      id: 1,
      from: "them",
      user: "Mehedi Hasan",
      time: "Yesterday",
      text: "Thanks for resolving the refund issue.",
    },
  ],
};
